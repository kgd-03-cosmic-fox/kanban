<template>
      <div class="col col-xl-2 border border-primary m-2 p-3">
          <h1>{{status.name}}</h1>
           <KanbanCard 
           v-for="elem in filterTodo" 
           :elem="elem"
           :key="elem.id" 
           :todo="todo" 
           :status="status"></KanbanCard>
        </div>
</template>

<script>
import KanbanCard from './KanbanCard'

export default {
    name: "KanbanBoard",
    components:{
        KanbanCard
    },
    props:["todo","status"]
    ,
    computed:{
        filterTodo(){
            // for(let a = 0; this.status.length; a++){
                return this.todo.filter(todo=>todo.status==this.status.id)
            // }
        }
    },
}
</script>

<style>

</style>