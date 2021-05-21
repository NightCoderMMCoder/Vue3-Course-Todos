<template>
  <div class="search mb-4">
    <input
      type="text"
      placeholder="Search..."
      class="form-control"
      :value="modelValue"
      @input="(e) => $emit('update:modelValue', e.target.value)"
    />
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="sort"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="fas fa-sort"></i> Sort
      </button>
      <ul class="dropdown-menu" aria-labelledby="sort">
        <li @click="setSortingType('all')">
          <a class="dropdown-item" href="#">
            <i class="fas fa-sort-alpha-down"></i> All
          </a>
        </li>
        <li @click="setSortingType('alphabetically')">
          <a class="dropdown-item" href="#">
            <i class="fas fa-sort-alpha-down"></i> Alphabetically
          </a>
        </li>
        <li @click="setSortingType('importance')">
          <a class="dropdown-item" href="#">
            <i class="far fa-star"></i> Importance
          </a>
        </li>
        <li @click="setSortingType('dueDate')">
          <a class="dropdown-item" href="#"
            ><i class="fas fa-calendar"></i>Due Date
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: { setSortingType: Function, modelValue: String },
};
</script>

<style scoped>
.dropdown-toggle::after {
  display: none;
}
.search {
  display: flex;
}
.search input {
  margin-right: 10px;
}
.fas:not(button .fas),
.far {
  color: var(--primary);
  margin-right: 10px;
}
</style>
