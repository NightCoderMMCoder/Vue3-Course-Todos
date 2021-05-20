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
        <button class="btn btn-primary">Add Todo</button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import db from "../../firebase/init";
export default {
  setup() {
    const todos = reactive({
      task: "",
      dueDate: "",
    });

    const handleSubmit = async () => {
      const collectionRef = db.collection("todos");
      const doc = await collectionRef.add({
        ...todos,
        createdAt: Date.now(),
      });
      console.log(doc);
    };

    return { ...toRefs(todos), handleSubmit };
  },
};
</script>

<style></style>
