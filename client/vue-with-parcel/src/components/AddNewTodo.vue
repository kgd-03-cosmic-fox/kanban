<template>
  <div>
    <form @submit.prevent="addTodo">
        <h3>Add New Todo</h3><br>
        <input style="width:100%" v-model="newTodo.title" type="text" placeholder="Title"><br><br>
        <input style="width:100%" v-model="newTodo.description" type="text" placeholder="Description"><br><br>
        <input style="width:100%" v-model="newTodo.due_date" type="date"><br><br>          
        <button class="btn btn-secondary">Add</button><br><br>
    </form><br>
</div>
</template>

<script>
import kanbanApi from '../api/kanbanApi'

export default {
  name: 'AddNewTodo',
  data () {
    return {
      newTodo:{
        title: "",
        description: "",
        due_date: ""
      },
    }
  },
  methods: {
    addTodo(){
        kanbanApi({
            method:"POST",
            url:`/todo`,
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
            this.newTodo.title = ''
            this.newTodo.description = ''
            this.newTodo.due_date = ''
            this.$emit('fetchData')
        })
        .catch(err=>{
            console.log(err)
        })
    }
  }
}
</script>

<style>

</style>