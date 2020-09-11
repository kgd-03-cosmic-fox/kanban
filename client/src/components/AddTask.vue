<template>
  <div id="test-add">
    <form>
      <h3>Add New Todo</h3>
      <table>
        <tr>
          <td><label for="title">Title</label></td>
          <td><input type="text" v-model="task.title" placeholder="Title"></td>
        </tr>
        <tr>
          <td><label for="description">description</label></td>
          <td><input  type="text" v-model="task.description" placeholder="Description"></td>
        </tr>
        <tr>
          <td><label for="category">Category</label></td>
          <td>
          <select v-model="task.category">
            <option value="Backlog">Backlog</option>
            <option value="Progress">Progress</option>
            <option value="Strugle">Strugle</option>
            <option value="Done">Done</option>
          </select>
          </td>
        </tr>
        <tr>
          <td>Date</td>
          <td><input type="date" v-model="task.due_date"><br></td>
        </tr>
        <tr>
          <td><button @click="saveTask">Save</button></td>
          <td><button @click="kembali">Back</button></td>
        </tr>
      </table>
  </form>
  </div>
</template>
<script>
 import axios from'axios'
  export default{
    name:'AddTask',
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
          url:'http://localhost:3007/',
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
