<template>
  <div id="login-page">
        <div class="center">
          <h1 style="margin-bottom: 3rem;" class="welcome">Welcome</h1>
          <form @submit.prevent="login">
            <div class="uk-margin">
              <div class="uk-inline">
                <span class="uk-form-icon" uk-icon="icon: user"></span>
                <input id="email" v-model="user.email" class="uk-input" type="email" placeholder="email here">
              </div>
            </div>

            <div class="uk-margin">
              <div class="uk-inline">
                <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                <input v-model="user.password" id="password" class="uk-input" type="password" placeholder="password here">
              </div>
            </div>
            <button type="submit" class="login-btn uk-button uk-button-primary">Login</button>
            <div class="uk-margin">
              <div class="uk-inline">
                <span class="uk-form-icon uk-form-icon-flip"></span>
                Didn't have account? <a href="#" @click="showRegister">Register</a>
              </div>
            </div>
          </form>
      </div>
    </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name:'Login',
    data(){
      return {
        user:{
          email:'',
          password:''
        }
      }
    },
    methods:{
      login(){
        axios({
          method:'POST',
          url:'http://localhost:3007/login',
          data:{
            email:this.user.email,
            password:this.user.password
          }
        })
        .then(({ data }) =>{
          localStorage.setItem('access_token',data.access_token)
          this.$emit("fetching")
          this.$emit("checkAuth")
        })
        .catch(err =>{
          console.log(err)
        })
        .finally(_ =>{
          this.user.email = ''
          this.user.password = ''
        })
      },
      showRegister(){
        this.$emit('showRegister','register-page')
      }
    }
  }
</script>
