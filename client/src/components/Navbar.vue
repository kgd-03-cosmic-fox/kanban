<template>
  <section id="navbar-section">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h2 class="navbar-brand">Organization</h2>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <!--  -->
          <h5 class="nav-link">User Name</h5>
        </li>
        <li class="nav-item">
          <button class="btn btn-outline-success my-2 my-sm-0" @click="addNewTask()">Add New Task!</button>
        </li>
      </ul>
      <!-- LOGOUT() FUNCTION NOT ADDED YET -->
      <button
        class="btn btn-outline-danger my-2 my-sm-0"
        type="button"
        @click.prevent="logout"
      >Log out</button>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.clear();
      this.$emit("changePage", "login");
    },
    addNewTask() {
      this.$emit("changePage", "addTask");
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>