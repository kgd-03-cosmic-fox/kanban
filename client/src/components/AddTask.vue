<template>
  <section id="add-task-section" class="shadow-lg p-3 mb-5 bg-white rounded">
    <form @submit.prevent="addNewTask()">
      <h1 style="text-align: center;">Add New Task</h1>
      <small class="form-text text-muted">Organization Name</small>
      <div class="form-group">
        <label for="new-title">Task Title</label>
        <input type="text" class="form-control" id="new-title" v-model="task.newTaskTitle" />
      </div>
      <div class="form-group">
        <label for="task-desc">Task Description</label>
        <input type="text" class="form-control" id="task-desc" v-model="task.newTaskDesc" />
      </div>
      <div class="form-group">
        <label for="task-duedate">Due Date</label>
        <input type="date" class="form-control" id="task-duedate" v-model="task.newTaskDueDate" />
      </div>
      <div class="row justify-content-between mx-5">
        <button type="submit" class="btn btn-primary">Add Task</button>
        <input type="button" class="btn btn-info" value="Back" @click.prevent="back" />
      </div>
    </form>
  </section>
</template>

<script>
import axiosKanbanAPI from "../api/kanbanAPI.js";
export default {
  name: "LoginPage",
  data() {
    return {
      task: {
        newTaskTitle: "",
        newTaskDesc: "",
        newTaskDueDate: "",
      },
    };
  },
  methods: {
    back() {
      this.$emit("back");
    },
    addNewTask() {
      axiosKanbanAPI({
        method: "POST",
        url: "/tasks",
        data: {
          title: this.task.newTaskTitle,
          description: this.task.newTaskDesc,
          due_date: this.task.newTaskDueDate,
        },
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          this.$emit("back");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.task.newTaskTitle = "";
          this.task.newTaskDesc = "";
          this.task.newTaskDueDate = "";
        });
    },
  },
  props: [],
};
</script>

<style>
</style>