<template>
  <div id="test-add">
    <Navbar></Navbar>
    <div class="container-fluid">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input type="text" v-model="task.title" class="form-control" id="title">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Description</label>
          <input v-model="task.description" type="text" class="form-control" id="description">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Category</label>
          <select class="custom-select" v-model="task.category">
            <option value="Backlog">Backlog</option>
            <option value="Progress">Progress</option>
            <option value="Strugle">Strugle</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Due Date</label>
          <input v-model="task.due_date" type="date" class="form-control" id="due_date">
        </div>
      </form>
      <button class="btn btn-primary" @click="saveTask">Submit</button>
      <button class="btn btn-warning" @click="kembali">Back</button>
    </div>
  </div>
</template>
<script>
import Navbar from './Navbar'
 import axios from'axios'
  export default{
    name:'AddTask',
    components: {
      Navbar
    },
    data(){
      return{
        task:{
          title:'',
          description:'',
          category:'',
          due_date:''
        }
      }
    },
    methods:{
      kembali(){
        this.$emit("kembali")
      },
      saveTask(){
        axios({
          method:'Post',
          url:'https://kanban-devp.herokuapp.com/',
          data:{
            title:this.task.title,
            description:this.task.description,
            category:this.task.category,
            due_date:this.task.due_date
          },
          headers:{
            token:localStorage.getItem('access_token')
          }
        })
        .then(data =>{
          console.log(data)
          console.log('Success')
          this.$emit("backToHome")
        })
        .catch(err =>{
          console.log(err)
        })
      }
    }
  }
</script>
