<template>
      <div id="register-box">
          <div id="register-form">
            <h1>Register</h1><br>
            <div class="form-group">
                <form @submit.prevent= "register">
                    <input v-model="newUser.name" type="text" placeholder="name"><br><br>
                    <input v-model="newUser.email" type="text" placeholder="email"><br><br>
                    <input v-model="newUser.password" type="password" placeholder="password"><br><br>
                    <select v-model="newUser.OrganizationId">
                        <option v-for="item in organizations" :key="item.id" :value=item.id >{{item.name}}</option>
                    </select><br><br>
                <button class="btn btn-primary">Register</button>
                </form><br>
                <button @click="cancelButton" class="btn btn-secondary">Cancel</button>
            </div>
          </div>
          <div id="register-background" class="d-flex flex-row bd-highlight mb-3">
              <img class="p-2 bd-highlight" src="../assets/img/greetings.jpg" alt="" style="width:100%">
          </div>
    </div>
</template>

<script>
import kanbanApi from '../api/kanbanApi'
      
export default {
    name: "RegisterPage",
    data (){
        return{
            newUser:{
                name: "",
                email: "",
                password: "",
                OrganizationId:""
            },
            organizations: [
        {
            "id": 1,
            "name": "Hektiv9",
            "createdAt": "2020-09-10T14:34:45.713Z",
            "updatedAt": "2020-09-10T14:34:45.713Z"
        },
        {
            "id": 2,
            "name": "Discard",
            "createdAt": "2020-09-10T14:34:45.713Z",
            "updatedAt": "2020-09-10T14:34:45.713Z"
        },
        {
            "id": 3,
            "name": "KudKademi",
            "createdAt": "2020-09-10T14:34:45.713Z",
            "updatedAt": "2020-09-10T14:34:45.713Z"
        },
        {
            "id": 4,
            "name": "T-Mubil",
            "createdAt": "2020-09-10T14:34:45.713Z",
            "updatedAt": "2020-09-10T14:34:45.713Z"
        },
        {
            "id": 5,
            "name": "Lazadut",
            "createdAt": "2020-09-10T14:34:45.713Z",
            "updatedAt": "2020-09-10T14:34:45.713Z"
        }
    ]
        }
    },
    methods:{
        register(){
            kanbanApi({
                method:"POST",
                url:`/register`,
                data:{
                    name: this.newUser.name,
                    email: this.newUser.email,
                    password: this.newUser.password,
                    organization_name: Number(this.newUser.OrganizationId)
                }
            })
            .then(_=>{
                this.$emit('changePage','login-page')
            })
            .catch(err=>{
                console.log(err)
            })
        },
        cancelButton () {
             this.$emit('changePage','login-page')
        }
    }
}
</script>

<style>

</style>