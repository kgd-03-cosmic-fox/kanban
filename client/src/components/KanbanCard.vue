<template>
  <div class="kanban-card m-1">
    <h6 class="card-title col-12">
      {{taskTitle}}
      <button class="btn btn-outline-danger my-2 my-sm-0" @click="deleteTask()">Del</button>
    </h6>
    <p>{{taskDesc}}</p>
    <p>Task Owner: {{owner}}</p>
    <div class="prog-button-container row justify-content-around">
      <input
        type="button"
        value="Prev"
        class="col-4"
        v-if="taskStatus > 0"
        @click="changeStatus(taskStatus-1)"
      />
      <input
        type="button"
        value="Next"
        class="col-4"
        v-if="taskStatus < 3"
        @click="changeStatus(taskStatus+1)"
      />
    </div>
  </div>
</template>

<script>
import axiosKanbanApi from "../api/kanbanAPI.js";
export default {
  name: "KanbanCard",
  props: ["taskTitle", "taskDesc", "taskStatus", "taskId", "owner"],
  methods: {
    deleteTask() {
      axiosKanbanApi({
        url: `/tasks/${this.taskId}`,
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((data) => {
          this.$emit("refreshPage", "dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeStatus(newStat) {
      axiosKanbanApi({
        url: `/tasks/${this.taskId}`,
        method: "PATCH",
        data: {
          newStatus: newStat,
        },
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((data) => {
          this.$emit("refreshPage", "dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>