<template>
  <div class="card">
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
        <button class="btn btn-primary">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import db from "../../firebase/init";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const todos = reactive({
      task: "",
      dueDate: "",
    });
    const id = route.params.id;

    const docRef = db.collection("todos").doc(id);
    onMounted(async () => {
      const doc = await docRef.get();
      todos.task = doc.data().task;
      todos.dueDate = doc.data().dueDate;
    });

    const handleSubmit = async () => {
      await docRef.update(todos);
      router.push({ name: "Home" });
    };

    return { ...toRefs(todos), handleSubmit };
  },
};
</script>

<style></style>
