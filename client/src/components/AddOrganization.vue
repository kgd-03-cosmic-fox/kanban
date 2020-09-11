<template>
<div id="org-bar">
    <div class="task-status-title"><h2>Add Organization</h2></div>
    <div class="col-12 flex-row-box" id="add-task">          
        <div id="add-form">
            <div id="add-box">

                <div class="task-status-title">
                    <h1 id="add-title">Input Task To Do Description</h1>
                </div>
                <form method="post">
                    <table>
                        <tr>
                            <td><input type="text" name="organizations_name" id="organizations_name" v-model="organizationsName"></td>
                        </tr>
                    </table>
                </form>
                <div>
                    <button id="post-add-org" v-on:click.prevent="postAddOrg">Add Organization</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    name: 'AddOrganization',
    data(){
        return{
            organizationsName : ''
        }
    },
    methods:{
        postAddOrg(){
            axios({

                method:'post',
                url:`https://kanbanapps.herokuapp.com/organizations/create`,
                data:{
                    org_name : this.organizationsName
                },
                headers:{
                    token : localStorage.getItem('token')
                }
                
            })
            .then(response=>{

                this.$emit('changeHomePage' , 'list')
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