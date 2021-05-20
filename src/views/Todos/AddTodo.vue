<template>
  <div class="card">
    <div class="card-header bg-primary">
      Add Todo
    </div>
    <div class="card-body">
      <form>
        <div class="mb-2">
          <label for="task" class="form-label">Task</label>
          <input type="text" id="task" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">Date</label>
          <input type="date" id="date" class="form-control" />
        </div>
        <button class="btn btn-primary">Add Todo</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
