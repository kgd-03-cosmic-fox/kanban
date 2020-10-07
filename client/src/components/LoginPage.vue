<template>
    <section id="login-page">
            <div id="login-box">
                <div id="login-form">
                        <div class="task-status-title">
                            <h1 >Welcome to Kanban Website testing</h1>
                        </div>

                        <form method="post">
                            <table>
                                <tr>
                                    <td><input type="text" name="email-login" id="email-login" placeholder="Email" v-model="login.email"></td>
                                </tr>
                                <tr>
                                    <td><input type="password" name="password-login" id="password-login" placeholder="Password" v-model="login.password"></td>
                                </tr>
                            </table>
                            <div>                    
                        </div>
                            <button id="login-register" v-on:click.prevent="registerPage">Register</button>
                            <button id="submit-login" v-on:click.prevent="loginSubmit">Login</button>
                        </form> 
                </div>
            </div>
        </section>
</template>

<script>
import axios from 'axios'

export default {
    name :'LoginPage',
    data(){
        return {
            login: {
                email : '',
                password : ''
            }
        }
    },
    methods:{
        loginSubmit(){

            axios({
                method : 'post',
                url : 'https://kanbanapps.herokuapp.com/login',
                data :{
                    email : this.login.email,
                    password : this.login.password
                }
            })
            .then(response =>{
                
                localStorage.setItem('token' ,response.data.access_token)
                localStorage.setItem('idUser' , response.data.id)
                localStorage.setItem('emailUser' , response.data.email)
                localStorage.setItem('username' ,response.data.username)
                localStorage.setItem('orgName' , 'Hacktiv8')

                this.$emit('changeCurrentPage' , 'home-page')
                this.$emit('fetchTask')
                this.$emit('fetchStatus')
                this.$emit('fetchOrg')
                this.$emit('checkPage')


            })
            .catch(err=>{
                console.log(err)
            })
            .finally(()=>{
                this.login.email = ''
                this.login.password = ''
            })
            // logining into website and check data in 
            

        },
        registerPage(){
            this.$emit('changeCurrentPage' , 'register')
        }
    }
}
</script>

<style>

</style>