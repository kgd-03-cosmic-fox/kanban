<template>
  <div class="col-3 my-2">
    <div class="center bg-secondary">{{ categoryTitle }}</div>
    <div class="row">
      <div class="col-3 mx-4 my-3 mb-2">
        <KanbanCard
          v-for="task in filterTask"
          :categories="categories"
          :task="task"
          :key="task.id"
          @loadHome="loadHome"
        ></KanbanCard>
      </div>
    </div>
  </div>
</template>
<script>
import KanbanCard from './KanbanCard'
  export default{
    name:'KanbanBoard',
    props:['categories','categoryTitle','tasks'],
    components:{
      KanbanCard
    },
    methods:{
      loadHome(){
        this.$emit("loadHome")
      }
    },
    computed:{
      filterTask:function (){
        let filteredTask = this.tasks.filter(task => task.category == this.categoryTitle)
        return filteredTask
      }
    }
  }
</script>
