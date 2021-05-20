<template>
  <nav class="navbar navbar-expand-lg bg-primary py-3">
    <div class="container">
      <h4 class="navbar-brand mb-0">Todos</h4>
      <ul class="navbar-nav">
        <router-link :to="{ name: 'Home' }">
          <li class="nav-item me-5">
            Home
          </li>
        </router-link>
        <router-link :to="{ name: 'AddTodo' }">
          <li class="nav-item">
            Add Todo
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  width: 100%;
  display: flex;
  justify-content: center;
}
ul li {
  cursor: pointer;
}
</style>
