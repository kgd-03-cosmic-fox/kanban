<template>
  <div id="home-page" >
    <Navbar
    @checkAuth="loadHome"
    ></Navbar>
    <div class="container-fluid border">
      <div class="row">
        <div class="p-2 bd-highlight w-100"><button type="button" class="btn btn-primary" @click="showAdd">Add Task</button></div>
      </div>
      <div class="row">
        <div class="col-12" id="cntr-1">
          <div class="row">
            <KanbanBoard
            @loadHome = "loadHome"
              v-for="category in categories"
              :categories="categories"
              :categoryTitle = "category"
              :tasks="tasks"
              :key="category"
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
      showAdd(){
        this.$emit("showAddForm")
      },
      loadHome(){
        this.$emit("loadHome")
      }
    }
  }
</script>
