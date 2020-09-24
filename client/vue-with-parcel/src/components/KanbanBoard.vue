<template>
      <div :class="status.color">
          <h2>{{status.name}}</h2>
           <KanbanCard 
           v-for="elem in filterTodo" 
           :elem="elem"
           :key="elem.id" 
           :todo="todo" 
           :status="status"
           @fetchData="fetchData"
           ></KanbanCard>
        </div>
</template>

<script>
import KanbanCard from './KanbanCard'

export default {
    name: "KanbanBoard",
    components:{
        KanbanCard
    },
    props:["todo","status","colors"],
    computed:{
        filterTodo(){
                return this.todo.filter(todo=>todo.status==this.status.id)
        }
    },
    methods:{
        fetchData(){
            this.$emit('fetchData')
        }
    }
}
</script>

<style>

</style>