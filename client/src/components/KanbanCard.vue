<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{task.title}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{task.description}}</h6>
      <h6 class="card-subtitle mb-2 text-muted">Added By :{{task.added_by}}</h6>
      <h6 class="card-subtitle mb-2 text-muted">Updated At :{{task.updatedAt}}</h6>
      <h6 class="card-subtitle mb-2 text-muted">Due : {{task.due_date}}</h6>
      <p class="card-text">{{task.Organisation}}</p>
      <a href="#" class="card-link" v-if="task.category !== 'Backlog'" @click="prevEdit(task.id)">Prev</a>
      <a href="#" class="card-link" @click="hapusTask(task.id)">Delete</a>
      <a href="#" class="card-link" v-if="task.category !== 'Done'" @click="nextEdit(task.id)">Next</a>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    props: ['task','categories'],
    name:'KanbanCard',
    methods:{
      hapusTask(id){
        axios({
          method:'Delete',
          url:`https://kanban-devp.herokuapp.com/${id}`,
          headers:{
            token:localStorage.getItem('access_token')
          }
        })
        .then(data =>{
          console.log('Success')
          this.$emit("loadHome")
        })
        .catch(err =>{
          console.log(err)
        })
      },
      prevEdit(id){
        let cat = this.categories[this.categories.indexOf(this.task.category)-1]
        console.log(`'${cat}'`)
        axios({
          method:'Patch',
          url:`https://kanban-devp.herokuapp.com/${id}`,
          data:{
            category: cat
          },
          headers:{
            token:localStorage.getItem('access_token')
          }
        })
        .then(data =>{
          this.$emit("loadHome")
          console.log('Upate success')
        })
        .catch(err =>{
          console.log(err)
        })
      },
      nextEdit(id){
        let cat = this.categories[this.categories.indexOf(this.task.category)+1]
        console.log(`'${cat}'`)
        console.log(id)
        axios({
          method:'Patch',
          url:`https://kanban-devp.herokuapp.com/${id}`,
          data:{
            category: cat
          },
          headers:{
            token:localStorage.getItem('access_token')
          }
        })
        .then(data =>{
          this.$emit("loadHome")
          console.log('Update success')
        })
        .catch(err =>{
          console.log(err)
        })
      }
    }
  }
</script>
