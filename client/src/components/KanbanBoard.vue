<template>
  <div class="col-3 p-1" id="newtask-header">
    <h6 class="list-group-item-info mb-1 p-0">{{title}}</h6>
    <div class="board-content-space">
      <KanbanCard
        v-for="task in filtered"
        v-bind:key="task.id"
        v-bind:taskTitle="task.title"
        v-bind:taskDesc="task.description"
        v-bind:taskStatus="task.status"
        v-bind:taskId="task.id"
        @refreshPage="changePage"
      ></KanbanCard>
    </div>
  </div>
</template>

<script>
import KanbanCard from "./KanbanCard";
export default {
  name: "KanbanBoard",
  props: ["title", "progress", "tasks"],
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
  computed: {
    filtered: function () {
      let filteredTasks = this.tasks.filter((el) => {
        if (el.status === this.progress) {
          return el;
        }
      });
      return filteredTasks;
    },
  },
  components: { KanbanCard },
};
</script>

<style>
</style>