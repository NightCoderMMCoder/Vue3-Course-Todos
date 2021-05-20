import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddTodo from "../views/Todos/AddTodo";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/todo/add",
      name: "AddTodo",
      component: AddTodo,
    },
  ],
});

export default router;
