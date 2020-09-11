<template>
    <div class="card flex-column-card">
        <div class="data-list">
            <div>
                <p>{{task.taskname}}</p>
                <p>{{task.description}}</p>
              
            </div>
        </div>
        <div class ="information">
            <div class="due">
                Due Date :{{task.due_date}} 
   
            </div>
            <div class="author">    
                Author : {{task.User.username}}
            </div>
            <div class="card-button flex-row-box">
                
                <button type="button" class="btn btn-default btn-lg" style="color:white"  v-if="status.id > 1" v-on:click.prevent="updateStat(task.id , status.id-1 )">Prev
                </button>
                <button type="button" class="btn btn-default btn-lg" style="color:white" v-on:click.prevent="deleteTask(task.id)">Delete
                </button>
                <button type="button" class="btn btn-default btn-lg" style="color:white" v-if="status.id < 4" v-on:click.prevent="updateStat(task.id , status.id+1)">Next
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name:'KanbanCard',
    props: ['task' , 'status'],
    methods:{
        updateStat(id , statId){
            console.log(id , statId)
            axios({
                method: 'patch',
                url:`http://localhost:3000/tasks/${id}`,
                data:{
                    StatId : statId
                },
                headers:{
                    token : localStorage.getItem('token')
                }
            })
            .then(data=>{
                console.log(data)
                this.$emit('checkPage')

            })
            .catch(err=>{
                console.log(err)
            })

        },
        deleteTask(id){

            axios({
                method:'delete',
                url:`http://localhost:3000/tasks/${id}`,
                headers:{
                    token : localStorage.getItem('token')
                }
            })
            .then(data=>{
                this.$emit('checkPage')
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