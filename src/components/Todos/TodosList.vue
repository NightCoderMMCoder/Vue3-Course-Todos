<template>
  <div class="form-check" v-for="todo in todos" :key="todo.id">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
    />
    <label class="form-check-label" for="flexCheckDefault">
      <p class="mb-0">
        <span :class="{ completed: todo.completed }">{{ todo.task }}</span>
        <br />
        <small v-if="todo.dueDate">Overdue {{ todo.dueDate }} </small>
      </p>
      <span>
        <i class="fas fa-pencil-alt"></i>
        <i class="fas fa-trash"></i>
        <i class="far fa-star" :class="{ important: todo.important }"></i>
      </span>
    </label>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import db from "../../firebase/init";

export default {
  setup() {
    const todos = ref([
      {
        id: 1,
        task: "Go Shopping",
        dueDate: new Date(2021, 5, 3),
        completed: true,
        important: true,
      },
      {
        id: 2,
        task: "Buy Tickets",
        dueDate: new Date(2021, 5, 4),
      },
      {
        id: 3,
        task: "Homework",
      },
    ]);

    onMounted(async () => {
      const snapshot = await db.collection("todos").get();
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      todos.value = results;
    });

    return { todos };
  },
};
</script>

<style scoped>
.form-check {
  border-bottom: 1px solid #bbbbbb;
  padding: 20px;
}
.form-check-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.completed {
  text-decoration: line-through;
  opacity: 0.7;
  transition: 0.3s linear;
}
.fa-calendar {
  color: var(--primary);
}
.fa-star {
  color: rgb(160, 160, 160);
  cursor: pointer;
}
.important {
  font-weight: bold;
  color: var(--primary);
}
.overDue {
  color: red;
}
.overDue .fas {
  color: red;
}
.fa-trash {
  margin: 0 20px;
  color: #fa1e0e;
  cursor: pointer;
}
.fa-pencil-alt {
  color: #ffe227;
  cursor: pointer;
}
</style>
