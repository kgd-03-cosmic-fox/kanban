<template>
  <div id="home-page" >
    <Navbar></Navbar>
    <div class="container-fluid border border-dark">
      <div class="row">
        <div class="col-3 d-flex align-items-start flex-column bd-highlight bg-primary">
          <div class="p-2 bd-highlight w-100"><button><a href="#" @click="showAdd">Add Task</a></button></div>
          <div class="p-2 bd-highlight w-100"><button><a href="#" @click="logout">Logout</a></button></div>
        </div>
        <div class="col-9" id="cntr-1">
          <div class="row">
            <KanbanBoard
            @loadHome = "loadHome"
              v-for="category in categories"
              :categories="categories"
              :categoryTitle = "category"
              :tasks="tasks"
              :key="category"
              @loadHome1="loadHome1"
              @loadHome2="loadHome2"
            ></KanbanBoard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from './Navbar'
import KanbanBoard from './KanbanBoard'
  export default{
    name:'MainPage',
    props:['tasks','categories'],
    components:{
      Navbar,
      KanbanBoard
    },
    methods:{
      logout(){
        localStorage.removeItem("access_token")
        this.$emit("checkAuth")
      },
      showAdd(){
        this.$emit("showAddForm")
      },
      loadHome(){
        this.$emit("loadHome")
      }
    }
  }
</script>
