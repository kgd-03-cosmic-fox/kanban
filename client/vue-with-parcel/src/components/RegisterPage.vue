<template>
      <div>
        <form @submit.prevent= "register">
            <input v-model="newUser.name" type="text" placeholder="name"><br>
            <input v-model="newUser.email" type="text" placeholder="email"><br>
            <input v-model="newUser.password" type="password" placeholder="password"><br>
            <select v-model="newUser.OrganizationId">
                <option v-for="item in organizations" :key="item.id" :value=item.id >{{item.name}}</option>
            </select><br>
        <button class="btn btn-primary">Register</button>
        </form><br>
        <button class="btn btn-secondary">Cancel</button>
    </div>
</template>

<script>
import axios from 'axios'
      
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
    // props:['organizations'],
    methods:{
        register(){
            axios({
                method:"POST",
                url:`http://localhost:3000/register`,
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
        }
    }
}
</script>

<style>

</style>