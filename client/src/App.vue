<template>
  <!-- login page -->
  <div>
    <Login
    v-if="currentPage == 'login-page'"
    @checkAuth="checkAuth"
    @fetching="fetchTasks"
    @changePage="changedPage"
    @showRegister="showRegister"
    ></Login>
    <!-- home page -->

    <Register
    v-else-if="currentPage == 'register-page'"
    @backLogin="checkAuth"
    ></Register>

    <AddTask
    v-else-if="currentPage == 'addTask-page'"
    @kembali="backTH"
    @backToHome="homeLoading"
    ></AddTask>

    <MainPage
    @showAddForm="showAdd"
    @checkAuth="checkAuth"
    v-else-if="currentPage == 'main-page'"
    :tasks = "tasks"
    :categories="categories"
    @loadHome="homeLoading"
    ></MainPage>
    <EditTask v-else-if="currentPage == 'edit-page'"></EditTask>
  </div>
</template>

<script>
import Login from './components/Login'
import Register from './components/Register'
import AddTask from './components/AddTask'
import MainPage from'./components/MainPage'
import EditTask from './components/EditTask'
import axios from 'axios'
export default {
  name:'App',
  data(){
    return {
      currentPage:'login-page',
      tasks:[],
      categories:['Backlog','Progress','Strugle','Done']
    }
  },
  methods: {
    changedPage(page){
      this.currentPage = page
    },
    fetchTasks(){
      axios({
        method:'Get',
        url:'https://kanban-devp.herokuapp.com/',
        headers:{
          token:localStorage.getItem('access_token')
        }
      })
      .then(({ data }) =>{
        this.tasks = data
      })
      .catch(err =>{
        console.log(err)
      })
    },
    showRegister(page){
      this.currentPage = page
    },
    homeLoading(){
      this.checkAuth()
    }
    ,
    checkAuth(){
      if(!localStorage.access_token){
        this.currentPage = 'login-page'
      }
      else{
        this.fetchTasks()
        this.currentPage = 'main-page'
      }
    },
    showAdd(){
      this.currentPage='addTask-page'
    },
    backTH(){
      this.currentPage='main-page'
    }
  },
  components:{
    Login,
    Register,
    AddTask,
    MainPage
  },created(){
    if(!localStorage.access_token){
      this.currentPage='login-page'
    }
    else{
      this.fetchTasks()
      this.currentPage='main-page'
    }
  }
};
</script>

<style>

</style>
