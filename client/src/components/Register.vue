<template>
  <div id="test-register">
    <form>
      <h3>Register</h3>
      <label for="name">Name: </label>
      <input v-model="registerUser.name" type="text" placeholder="Name"><br>
      <label for="email">Email: </label>
      <input v-model="registerUser.email" type="text" placeholder="Email"><br>
      <label for="Job Desk">Password: </label>
      <input v-model="registerUser.password" type="password" placeholder="Password"><br>
      <label for="password">Job Desk : </label>
      <input v-model="registerUser.jobDesk" type="text" placeholder="JobDesk"><br>
      <label for="organisation">Organisation: </label>
      <select v-model="registerUser.OrganisationId">
        <option value="1">Hacktiv8</option>
        <option value="2">Dicoding</option>
        <option value="3">Arkademy</option>
        <option value="4">T-schools</option>
        <option value="5">T-access</option>
      </select>
      <br>
  </form>
  <button class="btn btn-secondary" @click="register">Register</button><br>
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
          url:'http://localhost:3007/register',
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
