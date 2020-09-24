<template>
    <div class="border-solid rounded border border-dark">
        <form @submit.prevent="login" class="flex-login h80">
            <input 
            v-model="user.email" 
            type="text" 
            class="mb-4" 
            id="email-input" 
            placeholder="email"
            >
            <input 
            v-model="user.password" 
            type="password" 
            class="mb-4" 
            id="password-input" 
            placeholder="password"
            >
            <button class="mb-4 btn btn-primary">Login</button>
            <img class="logo-login" src="../assets/img/caneband-logo.png" alt="" width="75px">
        </form>
        <button class="btn btn-secondary" @click="registerPage">Register</button>
    </div>
</template>

<script>
import kanbanApi from '../api/kanbanApi'

export default {
    name: "LoginPage",
    data (){
        return {
            user:{
                name: "",
                email: "",
                password: ""
            }
        }
    },
    methods:{
         login(){
            kanbanApi({
                method:"POST",
                url:`/login`,
                data:{
                    email: this.user.email,
                    password: this.user.password,
                }
            })
            .then(response=>{
                this.user.name = response.data.payload.name
                localStorage.setItem(
                    `access_token`,
                    response.data.token
                    )
                localStorage.setItem("loggedInUser",response.data.payload)
                    this.$emit('changePage',"main-page")
                    this.$emit('fetchData')        
           })
            .catch(err=>{
                console.log(err)
            })
            .finally(_=>{
                this.user.name = ""
                this.user.password= ""
            })
        },
        registerPage(){
            this.$emit('changePage','register-page')
        }
    }
}
</script>

<style>

</style>