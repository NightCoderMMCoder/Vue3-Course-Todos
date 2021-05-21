<template>
  <div class="card">
    <div class="card-header bg-primary">
      Add Todo
    </div>
    <div class="card-body">
      <div class="error-message" v-if="error">
        {{ error }}
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-2">
          <label for="task" class="form-label">Task</label>
          <input type="text" id="task" class="form-control" v-model="task" />
          <small class="error-message" v-if="errors.task">{{
            errors.task
          }}</small>
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">Date</label>
          <input type="date" id="date" class="form-control" v-model="dueDate" />
        </div>
        <button class="btn btn-primary" :disabled="isLoading">
          Add <Spinner v-if="isLoading" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import Spinner from "../../components/Shared/Spinner.vue";
import useCollection from "../../hooks/useCollection";
import useValidation from "@/hooks/validation";

export default {
  components: { Spinner },
  setup() {
    const { addDoc, isLoading, error } = useCollection("todos");
    const router = useRouter();
    const todo = reactive({
      task: "",
      dueDate: "",
    });
    const { validation, errors } = useValidation(todo);

    const handleSubmit = async () => {
      let isValidate = validation({ dueDate: false });
      if (isValidate) {
        await addDoc(todo);
        if (!error.value) {
          router.push({ name: "Home" });
        }
      }
    };

    return { ...toRefs(todo), handleSubmit, isLoading, errors, error };
  },
};
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
}
</style>
