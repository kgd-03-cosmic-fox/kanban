<template>
  <section id="side-bar-page" class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2" >
                    <div id="side-bar">
                        <div>
                            <h2 class="task-status-title no-display">.</h2>
                        </div>
                        <div class="task-status-title">
                            <h2 id="organization">My Organization</h2> 
                                <div val="0" class="flex-column-box">  
                                    <MyOrganizations
                                        v-for="org in myOrg" v-bind:key="org.id"
                                        v-bind:org="org"
                                        v-on:checkPage="checkPage"
                                    ></MyOrganizations>
                                <div>
                                    <button id="add-org" v-on:click.prevent="addOrg">Add Organization</button>
                                </div>
                                </div>
                        </div>
                        
                        <div class="task-status-title" v-on:click.prevent="myList">
                            <h2 id="go-to-list-task">All List Task</h2>
                        </div>

                        <div class="task-status-title" v-on:click.prevent="addNewTask">
                            <h2 id="go-to-add-task">Add New Task</h2>
                        </div>
                        <div class="task-status-title" v-on:click.prevent="logout">
                            <h2 id="text-logout">Log Out</h2>
                        </div>

                    </div>
                </section>
</template>

<script>
import MyOrganizations from './MyOrganizations'

export default {
    name: 'SideBarPage',
    props :['myOrg'],
    components:{
        MyOrganizations
    },
    methods:{
        addNewTask(){
            this.$emit('changeHomePage' , 'task')
        },
        logout(){
            localStorage.clear()
            this.$emit('changeCurrentPage' , 'login')   
        },
        myList(){
            this.$emit('changeHomePage' , 'list')  
        },
        addOrg(){
            this.$emit('changeHomePage' , 'addOrg')
        },
        checkPage(){
            this.$emit('checkPage')
        }
    }
}
</script>

<style>

</style>