<template>
  <div class="home">
    <search-box
      :set-sorting-type="setSortingType"
      v-model="searchTerm"
    ></search-box>
    <TodosList :todos="filteredTodos" :isLoading="isLoading"></TodosList>
  </div>
</template>

<script>
import SearchBox from "../components/Todos/SearchBox.vue";
import TodosList from "../components/Todos/TodosList.vue";
import useCollection from "@/hooks/useCollection";
import { computed, ref } from "vue";

export default {
  components: { SearchBox, TodosList },
  setup() {
    const { getDocs, isLoading, items: todos } = useCollection("todos");
    getDocs();

    const sortingType = ref(null);

    const setSortingType = (type) => {
      sortingType.value = type;
    };

    const searchTerm = ref("Something");

    const filteredTodos = computed(() => {
      if (sortingType.value === "alphabetically") {
        return todos.value.slice(0).sort((a, b) => {
          if (a.task > b.task) return 1;
          else if (a.task < b.task) return -1;
          return 0;
          // return a.task > b.task ? 1 : a.task < b.task ? -1 : 0;
        });
      } else if (sortingType.value === "importance") {
        return todos.value.filter((todo) => todo.important);
      } else if (sortingType.value === "dueDate") {
        return todos.value
          .filter((todo) => todo.dueDate)
          .sort((a, b) => {
            let dueDateA = new Date(a.dueDate);
            let dueDateB = new Date(b.dueDate);
            return dueDateB - dueDateA;
          });
      } else {
        return todos.value;
      }
    });

    return { filteredTodos, isLoading, setSortingType, searchTerm };
  },
};
</script>
