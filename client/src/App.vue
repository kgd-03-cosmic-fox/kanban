<template>
  <div>
    <Navbar v-if="display !== 'login' && display !== 'register'" @changePage="changeDisplay"></Navbar>

    <Login v-if="display === 'login'" @loginSuccess="checkAuth" @changeDisplay="changeDisplay"></Login>
    <Register v-else-if="display === 'register'" @changePage="changeDisplay"></Register>
    <MainBoard v-else-if="display === 'dashboard'" v-bind:tasks="tasks" @changePage="checkAuth"></MainBoard>
    <AddTask v-else-if="display === 'addTask'" @back="checkAuth"></AddTask>
  </div>
</template>

<script>
import axiosKanbanAPI from "./api/kanbanAPI.js";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import MainBoard from "./components/MainBoard";
export default {
  name: "App",
  components: {
    Navbar,
    Login,
    Register,
    MainBoard,
    AddTask,
  },
  data() {
    return {
      display: "login",
      tasks: [],
    };
  },
  methods: {
    changeDisplay(newDisplay) {
      this.display = newDisplay;
    },
    checkAuth() {
      if (localStorage.getItem("access_token")) {
        this.changeDisplay("dashboard");
        this.fetchTasks();
      } else {
        this.changeDisplay("login");
      }
    },
    fetchTasks() {
      axiosKanbanAPI({
        method: "GET",
        url: "/tasks",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          this.tasks = data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    },
  },
  created() {
    this.checkAuth();
  },
};
</script>

<style>
</style>