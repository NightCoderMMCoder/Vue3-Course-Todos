import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddTodo from "../views/Todos/AddTodo";
import EditTodo from "../views/Todos/EditTodo";
import NotFound from "../views/NotFound.vue";

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
    {
      path: "/todo/edit/:id",
      name: "EditTodo",
      component: EditTodo,
    },
    {
      path: "/:notFound(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
