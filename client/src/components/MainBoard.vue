<template>
  <section id="board-section" style="margin-top: 5px;">
    <div class="row mx-1" style="text-align: center;">
      <KanbanBoard
        v-for="board in boards"
        v-bind:key="board.progress"
        v-bind:progress="board.progress"
        v-bind:title="board.title"
        v-bind:id="`${board.title}-box`"
        v-bind:tasks="tasks"
        @changePage="changePage"
      ></KanbanBoard>
    </div>
  </section>
</template>

<script>
import KanbanBoard from "./KanbanBoard";
export default {
  name: "MainBoard",
  components: {
    KanbanBoard,
  },
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
  props: ["tasks"],
  data() {
    return {
      boards: [
        { progress: 0, title: "Backlog" },
        { progress: 1, title: "In-Progress" },
        { progress: 2, title: "Testing Phase" },
        { progress: 3, title: "Deploy" },
      ],
    };
  },
};
</script>

<style>
</style>