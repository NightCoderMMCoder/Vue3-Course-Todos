<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      :checked="todo.completed"
      @change="handleChange"
    />
    <label class="form-check-label">
      <p class="mb-0">
        <span :class="{ completed: todo.completed }">{{ todo.task }}</span>
        <br />
        <small v-if="todo.dueDate">Overdue {{ todo.dueDate }} </small>
      </p>
      <span>
        <i
          class="fas fa-pencil-alt"
          @click="$router.push({ name: 'EditTodo', params: { id: todo.id } })"
        ></i>
        <i class="fas fa-trash" @click="handleDelete"></i>
        <i
          class="far fa-star"
          :class="{ important: todo.important }"
          @click="handleClick"
        ></i>
      </span>
    </label>
  </div>
</template>

<script>
import db from "../../firebase/init";
import useDoc from "@/hooks/useDoc";

export default {
  props: { todo: Object },
  setup(props) {
    const { updateDoc } = useDoc("todos", props.todo.id);
    const docRef = db.collection("todos").doc(props.todo.id);
    const handleDelete = async () => {
      await docRef.delete();
    };

    const handleChange = () => {
      updateDoc({
        completed: !props.todo.completed,
      });
    };

    const handleClick = async () => {
      updateDoc({
        important: !props.todo.important,
      });
    };

    return { handleDelete, handleChange, handleClick };
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
