<template>
  <div class="container-fluid">
    <h1 class="display-5">Register</h1>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" v-model="registerUser.name" class="form-control" id="register-name" aria-describedby="emailHelp" placeholder="Name">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" v-model="registerUser.email" class="form-control" id="register-email" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="registerUser.password" class="form-control" id="register-password" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="jobDesk">JobDesk</label>
        <input type="text" v-model="registerUser.jobDesk" class="form-control" id="register-jobDesk" placeholder="JobDesk">
      </div>
      <div class="form-group">
        <label for="organisation">Organisation</label>
        <select class="custom-select" v-model="registerUser.OrganisationId">
          <option value="1">Hacktiv8</option>
          <option value="2">Dicoding</option>
          <option value="3">Arkademy</option>
          <option value="4">T-schools</option>
          <option value="5">T-access</option>
        </select>
      </div>
    </form>
    <button type="submit" class="btn btn-primary" @click="register">Register</button>
  </div>
</template>
<script>
import axios from 'axios'
  export default {
    name:'Register',
    data(){
      return {
        registerUser:{
          name:'',
          email:'',
          password:'',
          jobDesk:'',
          OrganisationId:''
        }
      }
    },
    methods:{
      register(){
        axios({
          method:'POST',
          url:'https://kanban-devp.herokuapp.com/register',
          data:{
            name:this.registerUser.name,
            email:this.registerUser.email,
            password:this.registerUser.password,
            jobDesk:this.registerUser.jobDesk,
            OrganisationId:this.registerUser.OrganisationId
          }
        })
        .then(data =>{
          this.name=''
          this.email=''
          this.password=''
          this.jobDesk=''
          this.OrganisationId=''
          console.log('Success')
          this.$emit('backLogin')
        })
        .catch(err =>{
          console.log(err)
        })
      }
    }
  }
</script>
