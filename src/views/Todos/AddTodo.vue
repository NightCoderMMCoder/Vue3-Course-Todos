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
        <button class="btn btn-primary">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import db from "../../firebase/init";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const todos = reactive({
      task: "",
      dueDate: "",
    });

    const handleSubmit = async () => {
      const collectionRef = db.collection("todos");
      await collectionRef.add({
        ...todos,
        createdAt: Date.now(),
      });
      router.push({ name: "Home" });
    };

    return { ...toRefs(todos), handleSubmit };
  },
};
</script>

<style></style>
