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
import TodoItem from "./TodoItem.vue";
import Spinner from "../Shared/Spinner.vue";

export default {
  props: { todos: Array, isLoading: Boolean },
  components: {
    TodoItem,
    Spinner,
  },
  setup() {},
};
</script>
