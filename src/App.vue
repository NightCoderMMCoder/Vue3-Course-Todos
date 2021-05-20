<template>
  <Navbar />
  <main class="my-5">
    <router-view></router-view>
  </main>
</template>

<script>
import Navbar from "./components/Layout/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
main {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
