<template>
    <div class="card-body border p-3 kanbanCard">
      <h5 class="card-title">{{elem.title}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{elem.due_date}}</h6>
      <p class="card-text">{{elem.description}}</p>
      <button v-if="status.id<3" @click="processTodo(elem.id,status.id+1)" class="btn btn-primary">Next</button><br><br>
      <button v-if="status.id>0" @click="processTodo(elem.id,status.id-1)" class="btn btn-warning">Return</button><br><br>
      <button  @click="deleteTodo(elem.id)" class="btn btn-danger">Delete</button><br><br>
  </div>
</template>

<script>
export default {
    name:"KanbanCard",
    props: ["todo","status", "elem"],
    methods:{
          processTodo(id,statusId){
            axios({
                method:"PATCH",
                url:`https://caneband-apps.herokuapp.com//todo/${id}`,
                data:{
                    status: statusId
                },
                headers:{
                    access_token: localStorage.getItem(`access_token`)
                }
            })
            .then(data=>{
              this.$emit('fetchData')
            })
            .catch(err=>{
              
            })
        },
        deleteTodo(id){
          axios({
            method:"DELETE",
            url:`https://caneband-apps.herokuapp.com//todo/${id}`,
            headers:{
              access_token:localStorage.getItem("access_token")
            }
          })
          .then(_=>{
            this.$emit(`fetchData`)
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