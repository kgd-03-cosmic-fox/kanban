<template>
    <div>
        <!-- form-register -->
        <RegisterPage 
        v-if="currentPage === 'register-page' " @changePage="changePage">
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
                <h2>Selamat Datang, {{user.name}}</h2>
            </div>
            <div class="cards">
                <div class="side-bar card-body col col-xl-3 border border-dark m-2 p-3">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <form>
                        <h3>Add New Todo</h3>
                        <input v-model="newTodo.title" type="text" placeholder="Title"><br>
                        <input v-model="newTodo.description" type="text" placeholder="Description"><br>
                        <input v-model="newTodo.due_date" type="date"><br>           
                        <button @click= "addTodo" class="btn btn-secondary">Add</button><br>
                    </form>
                </div>
                <KanbanBoard
                v-for="status in status" 
                :key="status.id" 
                :status="status" 
                :todo="todoList"
                :colors="colors" 
                class="col col-xl-2 border border-primary m-2 p-3 kanbanBoard" 
                @fetchData="fetchData"
                >
                </KanbanBoard>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import KanbanBoard from './components/KanbanBoard'

export default {
    name: "App",
    components:{
        NavBar, LoginPage, RegisterPage, KanbanBoard
    },
    data (){
        return {
            baseUrl:"https://caneband-apps.herokuapp.com/",
            currentPage: "",
            user:{
                name: "",
                email: "",
                password: ""
            },
            newTodo:{
                title: "",
                description: "",
                due_date: ""
            },
            todoList: [],
            organizations:[],
            status:[
                {
                    id: 0,
                    name: "BackLog"
                },
                {
                    id: 1,
                    name: "To-Do"
                },
                {
                    id: 2,
                    name: "Doing"
                },
                {
                    id: 3,
                    name: "Completed"
                }
            ],
            colors:["primary","warning","danger","success"]
        }
    },
    methods:{
        changePage(page){
            this.currentPage = page
        },
        addTodo(){
            axios({
                method:"POST",
                url:`${this.baseUrl}/todo`,
                data:{
                    title: this.newTodo.title,
                    description: this.newTodo.description,
                    due_date: this.newTodo.due_date
                },
                headers:{
                    access_token: localStorage.getItem(
                        "access_token"
                    )
                }
            })
            .then(_=>{
                this.fetchData()
            })
            .catch(err=>{
                console.log(err)
            })
        },
        fetchData(){
            axios({
                method:"GET",
                url: `${this.baseUrl}/todo`,
                headers:{
                access_token: localStorage.getItem(
                    `access_token`
                    )
                }
            })
            .then(response=>{
                this.todoList = response.data.data
                this.user.name = response.data.payload.name
                // this.organizations = responsedata.payload.organization
                // for(let a = 0; this.status.length; a++){
                //  console.log(this.todoList.filter(todo=>todo.status==this.status[a].id))
                // }
            })
            .catch(err=>{
                console.log(err)
            })
        },
        fetchAllOrganization(){
            axios({
                method:"GET",
                url:`${this.baseUrl}/organization`,
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