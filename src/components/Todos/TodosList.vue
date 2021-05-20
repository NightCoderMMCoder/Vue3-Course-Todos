<template>
  <div>
    <Spinner v-if="isLoading" color="#42b983" size="50px" />
    <todo-item
      v-else
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    ></todo-item>
  </div>
</template>

<script>
import { ref } from "vue";
import db from "../../firebase/init";
import TodoItem from "./TodoItem.vue";
import Spinner from "../Shared/Spinner.vue";

export default {
  components: {
    TodoItem,
    Spinner,
  },
  setup() {
    const todos = ref([]);
    const isLoading = ref(true);

    const collectionRef = db.collection("todos").orderBy("createdAt");
    // const snapshot = await collectionRef.get();
    // let results = [];
    // snapshot.docs.forEach((doc) => {
    //   results.push({
    //     ...doc.data(),
    //     id: doc.id,
    //   });
    // });
    // todos.value = results;
    collectionRef.onSnapshot((snapshot) => {
      // console.log(snapshot);
      // let results = [];
      // snapshot.docs.forEach((doc) => {
      //   results.push({
      //     ...doc.data(),
      //     id: doc.id,
      //   });
      // });
      // todos.value = results;
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          todos.value.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
          isLoading.value = false;
        }
        if (change.type === "modified") {
          const idx = todos.value.findIndex(
            (todo) => todo.id === change.doc.id
          );
          Object.assign(todos.value[idx], {
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
        if (change.type === "removed") {
          const idx = todos.value.findIndex(
            (todo) => todo.id === change.doc.id
          );
          todos.value.splice(idx, 1);
        }
      });
    });

    return { todos, isLoading };
  },
};
</script>
