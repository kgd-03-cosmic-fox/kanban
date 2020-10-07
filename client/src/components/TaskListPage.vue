<template>
  <section id="task-list-page">
            <!-- content title -->
            <div class="task-status-title">
                <h2>Welcome {{username}} , This is All of Your {{orgName}} Task List</h2>
            </div>

            <!-- box all list content -->
            <div class="col-12 flex-row-box" >

                <KanbanBoard v-for="status in status" v-bind:key="status.id" 
                    v-bind:status="status"
                    v-bind:tasks="tasks"
                    v-on:changeHomePage="changeHomePage"
                    v-on:checkPage="check"
                ></KanbanBoard>
                <!-- content list todo section To Do -->

            </div>
  </section>
</template>

<script>

import KanbanBoard from './KanbanBoard'

export default {
    name: 'TaskListPage',
    props:['username' ,'orgName' , 'status' , 'tasks'],
    components:{
        KanbanBoard
    },
    methods:{
        changeHomePage(page){
            this.$emit('changeHomePage' , page)
        },
        check(){
            this.$emit('checkPage')
        }
    }
}
</script>

<style>

</style>