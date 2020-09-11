<template>
  <div class="flex-column-box">
        <div class="task-status-title">
            <h2>Task List {{status.stat_name}}</h2>
        </div>
            <div class="box-card">
                <KanbanCard v-for="task in filterData" v-bind:key="task.id" 
                v-bind:status="status"
                v-bind:task="task"
                v-on:changeHomePage="changeHomePage"
                v-on:checkPage="checkPage"
                ></KanbanCard>  
            </div>
        </div>
</template>

<script>
import KanbanCard from './KanbanCard'

export default {
    name:'KanbanBoard',
    props : ['status' , 'tasks'],
    components:{
        KanbanCard
    },
    methods:{
        changeHomePage(page){
            this.$emit('changeHomePage' , page)
        },
        checkPage(){
            this.$emit('checkPage')
        }
    },
    computed :{
        filterData(){
            return this.tasks.filter( task => task.Stats[0].TaskStat.StatId === this.status.id)
        }
    }
}
</script>

<style>

</style>