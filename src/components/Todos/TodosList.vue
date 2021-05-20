<template>
  <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"></todo-item>
</template>

<script>
import { onMounted, ref } from "vue";
import db from "../../firebase/init";
import TodoItem from "./TodoItem.vue";

export default {
  components: { TodoItem },
  setup() {
    const todos = ref([
      {
        id: 1,
        task: "Go Shopping",
        dueDate: new Date(2021, 5, 3),
        completed: true,
        important: true,
      },
      {
        id: 2,
        task: "Buy Tickets",
        dueDate: new Date(2021, 5, 4),
      },
      {
        id: 3,
        task: "Homework",
      },
    ]);

    onMounted(async () => {
      const snapshot = await db.collection("todos").get();
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          ...doc.data(),
          id: doc.id,
          dueDate: doc.data().dueDate.toString(),
        });
      });
      todos.value = results;
    });

    return { todos };
  },
};
</script>
