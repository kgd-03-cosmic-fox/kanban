<template>
    <div>
        <!-- form-register -->
        <RegisterPage 
        v-if="currentPage === 'register-page'"
        @changePage="changePage"
        id="register-page"
        >
        </RegisterPage>
        <!-- form login -->
        <LoginPage 
        v-else-if="currentPage === 'login-page' " 
        @changePage= "changePage" 
        @fetchData= "fetchData">
        </LoginPage>
        <div class="main-page" v-else-if= "currentPage === 'main-page' ">
            <NavBar></NavBar>
            <div class="header">
                <h2>Welcome, {{user.name}}</h2>
            </div>
            <div class="cards">
                <AddNewTodo
                class="side-bar card-body col col-xl-4 border border-dark m-2 p-3"
                style="width:15%"
                @fetchData="fetchData"
                >
                </AddNewTodo>
                <KanbanBoard
                v-for="status in status" 
                :key="status.id" 
                :status="status" 
                :todo="todoList"
                :colors="colors" 
                class="col col-sm-2 border border-primary m-2 p-3 kanbanBoard" 
                @fetchData="fetchData"
                >
                </KanbanBoard>
            </div>
        </div>
    </div>
</template>

<script>
import kanbanApi from './api/kanbanApi'
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import KanbanBoard from './components/KanbanBoard'
import AddNewTodo from './components/AddNewTodo'

export default {
    name: "App",
    components:{
        NavBar, LoginPage, RegisterPage, KanbanBoard, AddNewTodo
    },
    data (){
        return {
            currentPage: "",
            user:{
                name: "",
                email: "",
                password: ""
            },
            todoList: [],
            organizations:[],
            status:[
                {
                    id: 0,
                    name: "BackLog",
                    color: "col col-xl-2 border border-primary m-2 p-3"
                },
                {
                    id: 1,
                    name: "To-Do",
                    color: "col col-xl-2 border border-warning m-2 p-3"
                },
                {
                    id: 2,
                    name: "Doing",
                    color: "col col-xl-2 border border-danger m-2 p-3"
                },
                {
                    id: 3,
                    name: "Completed",
                    color: "col col-xl-2 border border-success m-2 p-3"
                }
            ],
            colors:["primary","warning","danger","success"]
        }
    },
    methods:{
        changePage(page){
            this.currentPage = page
        },
        fetchData(){
            kanbanApi({
                method:"GET",
                url: `/todo`,
                headers:{
                access_token: localStorage.getItem(
                    `access_token`
                    )
                }
            })
            .then(response=>{
                this.todoList = response.data.data
                this.user.name = response.data.payload.name
            })
            .catch(err=>{
                console.log(err)
            })
        },
        fetchAllOrganization(){
            kanbanApi({
                method:"GET",
                url:`/organization`,
                headers:{
                    access_token: localStorage.getItem(
                        "access_token"
                    )
                }
            })
            .then(response=>{
                this.organizations = response.data.data
            })
            .catch(err=>{
                console.log(err)
            })
        },
        refreshPage(){
            if(localStorage.getItem(`access_token`)){
            this.currentPage = "main-page"
            this.fetchData()
            this.fetchAllOrganization()
            }
            else{
                this.currentPage = "login-page"
                this.fetchAllOrganization()
            }
        }
    },
    created(){
       this.refreshPage()
    }
}
</script>

<style>

</style>