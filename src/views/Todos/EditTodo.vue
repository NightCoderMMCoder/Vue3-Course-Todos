<template>
  <Spinner v-if="isLoading" color="#42b983" size="50px" />
  <div class="error" v-else-if="error">
    {{ error }}
    <button class="btn btn-primary" @click="$router.replace({ name: 'Home' })">
      Go Home
    </button>
  </div>
  <div class="card" v-else>
    <div class="card-header bg-primary">
      Edit Todo
    </div>
    <div class="card-body">
      <form @submit.prevent="handleSubmit">
        <div class="mb-2">
          <label for="task" class="form-label">Task</label>
          <input type="text" id="task" class="form-control" v-model="task" />
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">Date</label>
          <input type="date" id="date" class="form-control" v-model="dueDate" />
        </div>
        <button class="btn btn-primary" :disabled="isLoading">
          Update <Spinner v-if="isLoading" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import useDoc from "@/hooks/useDoc";
import Spinner from "../../components/Shared/Spinner.vue";

export default {
  components: { Spinner },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    const { updateDoc, getDoc, isLoading } = useDoc("todos", id);

    const todo = reactive({
      task: "",
      dueDate: "",
    });

    const error = ref(null);
    onMounted(async () => {
      const doc = await getDoc();
      if (doc) {
        todo.task = doc.data().task;
        todo.dueDate = doc.data().dueDate;
      }
    });

    const handleSubmit = async () => {
      await updateDoc(todo);
      router.push({ name: "Home" });
    };

    return { ...toRefs(todo), handleSubmit, isLoading, error };
  },
};
</script>

<style></style>
