<template>
  <section id="add-task-page" >
    <div class="task-status-title"><h1>Add Task To Do</h1></div>
    <div class="col-12 flex-row-box" id="add-task">
        <div id="add-form">
            <div id="add-box">

                <div class="task-status-title">
                    <h1 id="add-title">Input Task To Do Description</h1>
                </div>
                
                <form method="post">
                    <table>
                        <tr>
                            <td><input type="text" name="task_name" id="task_name" v-model="addTask.taskname"></td>
                        </tr>
                        <tr>
                            <td><input type="text" name="description" id="description" v-model="addTask.description"></td>
                        </tr>
                        <tr id="due_date_add">
                            <td><input type="date" name="due_date" id="due_date" v-model="addTask.due_date"></td>
                        </tr>   
                    </table>
                </form>

                <div>
                    <button id="post-add-task" v-on:click.prevent="postNewTask">Submit</button>
                </div>

            </div>
        </div>            
    </div>
</section>
</template>

<script>
import axios from 'axios'

export default {
    name:'AddTaskPage',
    data(){
        return {
            addTask : {
                taskname : '',
                description : '',
                due_date : ''
            }
        }    
    },
    props:['idOrg'],
    methods:{
         postNewTask(){
          axios({
              method : 'post',
              url : `https://kanbanapps.herokuapp.com/tasks/${this.idOrg}`,
              data :{
                  taskname : this.addTask.taskname, 
                  description : this.addTask.description,
                  due_date : this.addTask.due_date
              },
              headers :{
                  token : localStorage.getItem('token')
              }
          })
          .then(data=>{

                this.$emit('changeHomePage' , 'list')
                this.$emit('checkPage')

          })
          .catch(err=>{
              console.log(err)
          })
          .finally(_=>{
                this.addTask.taskname = '' 
                this.addTask.description = ''
                this.addTask.due_date = ''
          })
        }
    }
}
</script>

<style>

</style>