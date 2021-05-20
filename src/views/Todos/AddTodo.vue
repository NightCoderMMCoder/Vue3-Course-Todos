<template>
  <div class="card">
    <div class="card-header bg-primary">
      Add Todo
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
        <button class="btn btn-primary">
          Add <Spinner v-if="isLoading" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import db from "../../firebase/init";
import { useRouter } from "vue-router";
import Spinner from "../../components/Shared/Spinner.vue";
export default {
  components: { Spinner },
  setup() {
    const router = useRouter();
    const todos = reactive({
      task: "",
      dueDate: "",
    });
    const isLoading = ref(false);

    const handleSubmit = async () => {
      isLoading.value = true;
      const collectionRef = db.collection("todos");
      await collectionRef.add({
        ...todos,
        createdAt: Date.now(),
      });
      isLoading.value = false;
      router.push({ name: "Home" });
    };

    return { ...toRefs(todos), handleSubmit, isLoading };
  },
};
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
}
</style>
