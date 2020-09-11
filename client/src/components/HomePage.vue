<template>
  <section id="home-page">
          
            <div class="container-fluid">
                <div class="row">
                    
                    
                <SideBarPage
                v-on:changeHomePage="changeHomePage"
                v-on:changeCurrentPage="changeCurrentPage"
                v-on:checkPage="check"
                v-bind:myOrg="myOrg">
                </SideBarPage>

                
                <ContentPage
                    v-bind:username="username"
                    v-bind:orgName="orgName"
                    v-bind:status="status"
                    v-bind:tasks="tasks"
                    v-bind:idOrg="idOrg"
                    v-bind:homePage="homePage"
                    v-on:changeHomePage="changeHomePage"
                    v-on:check="check"
                ></ContentPage>

                </div>
            </div>
        </section>
</template>

<script>

import axios from 'axios'
import SideBarPage from './SideBarPage'
import ContentPage from './ContentPage'

export default {
    name: 'HomePage',
    props : ['idOrg' , 'tasks' , 'status' , 'myOrg' , 'username' , 'orgName'],
    components:{
        SideBarPage,
        ContentPage
    },
    data(){
        return {
            homePage : 'list'
        }
    },
    methods :{
        
        changeHomePage(page){
            this.homePage = page
        },
        check(){
            this.$emit('checkPage')
        },
        changeCurrentPage(page){
            this.$emit('changeCurrentPage' , page)
        }
    }
}
</script>

<style>

</style>