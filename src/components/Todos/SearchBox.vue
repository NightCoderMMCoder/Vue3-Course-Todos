<template>
  <div class="search">
    <input type="text" placeholder="Search..." class="form-control" />
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
        <li>
          <a class="dropdown-item" href="#">
            <i class="fas fa-sort-alpha-down"></i> Alphabetically
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            <i class="far fa-star"></i> Importance
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#"
            ><i class="fas fa-calendar"></i>Due Date
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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
