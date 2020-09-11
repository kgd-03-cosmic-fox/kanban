<template>
  <div class="col-3">
    <div class="center">{{ categoryTitle }}</div>
    <div class="row">
      <div class="col-3 border border-dark">
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
