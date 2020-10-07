<template>
  <section id="content-page" class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">

    <div  id="content-bar">
    <div class="container-fluid">
        <div class="row">

        <TaskListPage
            v-bind:username="username"
            v-bind:orgName="orgName"
            v-bind:status="status"
            v-bind:tasks="tasks"
            v-on:checkHomePage="changeHomePage"
            v-on:checkPage="checkPage"
            v-if="homePage === 'list'"
        ></TaskListPage>
        
        <AddTaskPage
            v-else-if="homePage === 'task'"
            v-on:changeHomePage="changeHomePage"
            v-on:checkPage="checkPage"
            v-bind:idOrg="idOrg"
        ></AddTaskPage>
        
        <AddOrganization 
        v-else
        v-on:checkPage="checkPage"
        v-on:changeHomePage="changeHomePage"
        >
        </AddOrganization>

            </div>
        </div>
    </div>
   
</section>
</template>

<script>
import axios from 'axios'
import TaskListPage from './TaskListPage'
import AddTaskPage from './AddTaskPage'
import AddOrganization from './AddOrganization'

export default {

    name:'ContentPage',
    props:['username' , 'orgName' , 'status' , 'tasks' , 'idOrg' , 'homePage'],
    components:{
        TaskListPage,
        AddTaskPage,
        AddOrganization
    },
    methods:{
        changeHomePage(page){
            this.$emit('changeHomePage' , page)
        },
        checkPage(){
            this.$emit('check')
        }
    }
}
</script>

<style>

</style>