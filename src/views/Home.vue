<template>
  <div class="home">
    <search-box></search-box>
    <todos-list></todos-list>
  </div>
</template>

<script>
import SearchBox from "../components/Todos/SearchBox.vue";
import TodosList from "../components/Todos/TodosList.vue";
export default {
  components: { SearchBox, TodosList },
  setup() {},
};
</script>
