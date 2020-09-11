<template>
  <div>
       <!-- first page - login page -->
        <LoginPage
            v-if="currentPage === 'login'"
            v-on:changeCurrentPage="changePage"
            v-on:fetchTask="fetchTask"
            v-on:fetchStatus="fetchStatus"
            v-on:fetchOrg="fetchOrg"
            v-on:checkPage="check"
            v-on:changeName="changeUsername"
        ></LoginPage>

        <!-- register-page -->

        <RegisterPage
        v-else-if="currentPage === 'register'"
        v-on:changeCurrentPage="changePage">
        </RegisterPage>

        <!-- all after login -->

        <HomePage
        v-else
        v-bind:idOrg ="idOrg"
        v-bind:myOrg ="myOrg"
        v-bind:tasks ="tasks"
        v-bind:status ="listStatus"
        v-on:changeCurrentPage="changePage"
        v-on:checkPage ="check"
        v-bind:username ="username"
        v-bind:orgName ="orgName"
        ></HomePage>
        
  </div>
</template>

<script>

import KanbanBoard from './components/KanbanBoard'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'

export default {
    
    data(){
        return {
            username : '',
            orgName : 'Hacktiv8',
            currentPage : 'login',
            tasks : [],
            listStatus: [],
            idOrg : 1,
            myOrg : [],
            
        }    
    }, 
    components:{
        KanbanBoard,
        LoginPage,
        RegisterPage,
        HomePage
    }, 
    methods:{
        changeUsername(name){
            this.username = name
        },
        fetchTask(){
            let idorganizations

            if(localStorage.getItem('idOrg')){
                idorganizations = localStorage.getItem('idOrg')
            }else{
                idorganizations = this.idOrg
            }

            console.log(idorganizations)
            axios({
                method: 'get',
                url: `http://localhost:3000/tasks/${idorganizations}`,
                headers :{
                    token : localStorage.getItem('token')
                }
            })
            .then(response =>{
                this.tasks = response.data
            })
            .catch(err=>{
                console.log(err)
            })

        },
        fetchOrg(){

            axios({
                method: 'get',
                url : 'http://localhost:3000/organizations',
                headers:{
                    token : localStorage.getItem('token')
                }
            })
            .then(response=>{

                this.idOrg = localStorage.getItem('idOrg')
                this.myOrg = response.data

                this.myOrg.forEach(el=>{
                    if(el.Org.id == this.idOrg){
                        localStorage.setItem('orgName' , el.Org.org_name)
                        this.orgName = el.Org.org_name
                    }
                })

            })
            .catch(err=>{
                console.log(err)
            })
        },
        fetchStatus(){

            axios({
                method: 'get',
                url : 'http://localhost:3000/stats',
                headers : {
                    token : localStorage.getItem('token')
                }
            })
            .then(response=>{
                
                this.listStatus = response.data

            })
            .catch(err=>{
                console.log(err)
            })

        },
        changePage(page){
          this.currentPage = page
        },
        check(){
        
            if(localStorage.token){
                
                this.fetchTask()
                this.fetchStatus()
                this.fetchOrg()
                this.currentPage = 'home-page'
                this.username = localStorage.getItem('username')
                this.orgName = localStorage.getItem('orgName')
                
            }else{
                this.currentPage = 'login'
            }

        }
    },
    created(){

        this.check()
    
    }
}
</script>

<style>

</style>