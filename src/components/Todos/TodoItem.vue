<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
      :checked="todo.completed"
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
export default {
  props: { todo: Object },
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
