<template>
  <section id="register-page">
    <div id="register-box">
        <div id="register-form">
                <div class="task-status-title">
                    <h1>Register</h1>
                </div>
                
                <form method="post">
                    <table>
                        <tr>
                            <td><input type="text" name="username-register" id="username-register" placeholder="Username" v-model="register.username"></td>
                        </tr>
                        <tr>
                            <td><input type="text" name="email-register" id="email-register" placeholder="Email" v-model="register.email"></td>
                        </tr>
                        <tr>
                            <td><input type="password" name="password-register" id="password-register" placeholder="Password" v-model="register.password"></td>
                        </tr>
                    </table>
                </form>
                
                <div>
                    <button id="submit-back-to-login" v-on:click.prevent="back">Back</button>
                    <button id="submit-register" v-on:click.prevent="registerSubmit">Register</button>
                </div>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios'

export default {
    name : 'RegisterPage',
    data(){
        return{
            register: {
                username : '',
                email : '',
                password : ''
            }
        }
    },
    methods:{

        registerSubmit(){
            axios({
                method : 'post',
                url: 'https://kanbanapps.herokuapp.com/register',
                data:{
                    username : this.register.username,
                    email : this.register.email,
                    password : this.register.password,
                    
                }
            })
            .then(data=>{
                this.$emit('changeCurrentPage' , 'login')
            })
            .catch(err=>{
                console.log(err)
            })
            .finally(()=>{
                    this.register.username = ''
                    this.register.email = ''
                    this.register.password = ''
            })            

        },
        back(){
            this.$emit('changeCurrentPage' , 'login')
            this.register.username = ''
            this.register.email = ''
            this.register.password = ''
        
        }
    }
}
</script>

<style>

</style>