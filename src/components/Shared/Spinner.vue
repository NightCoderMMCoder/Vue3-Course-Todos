<template>
  <clip-loader :loading="true" :color="color" :size="size"></clip-loader>
</template>

<script>
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
export default {
  components: {
    ClipLoader,
  },
  props: {
    color: {
      type: String,
      default: "white",
    },
    size: {
      type: String,
      default: "20px",
    },
  },
};
</script>

<style></style>
