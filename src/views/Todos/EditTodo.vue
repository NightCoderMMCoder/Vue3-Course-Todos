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
import db from "../../firebase/init";
import useDoc from "@/hooks/useDoc";
import Spinner from "../../components/Shared/Spinner.vue";

export default {
  components: { Spinner },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    const { updateDoc } = useDoc("todos", id);

    const isLoading = ref(true);

    const todos = reactive({
      task: "",
      dueDate: "",
    });

    const docRef = db.collection("todos").doc(id);
    const error = ref(null);
    onMounted(async () => {
      try {
        const doc = await docRef.get();
        if (!doc.exists) {
          throw new Error("Data not found");
        }
        todos.task = doc.data().task;
        todos.dueDate = doc.data().dueDate;
      } catch (err) {
        error.value = err.message;
        console.log(err.message);
      } finally {
        isLoading.value = false;
      }
    });

    const handleSubmit = async () => {
      isLoading.value = true;
      await updateDoc(todos);
      router.push({ name: "Home" });
      isLoading.value = false;
    };

    return { ...toRefs(todos), handleSubmit, isLoading, error };
  },
};
</script>

<style></style>
