<template>
  <div>
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"></todo-item>
  </div>
</template>

<script>
import { ref } from "vue";
import db from "../../firebase/init";
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  setup() {
    const todos = ref([]);

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
      console.log(snapshot);
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      todos.value = results;
    });

    return { todos };
  },
};
</script>
