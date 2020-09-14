<template>
  <section id="login-section" class="shadow-lg p-3 mb-5 bg-white rounded">
    <form @submit.prevent="login()">
      <h1 style="text-align: center;">Login Form</h1>
      <div class="form-group">
        <label for="email-login">Email address</label>
        <input type="email" class="form-control" id="email-login" v-model="user.email" />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="pass-login">Password</label>
        <input type="password" class="form-control" id="pass-login" v-model="user.password" />
      </div>
      <div class="row justify-content-between mx-5">
        <button type="submit" class="btn btn-primary">Login</button>
        <input type="button" class="btn btn-info" value="Register" @click.prevent="toRegister" />
      </div>
    </form>
  </section>
</template>

<script>
import axiosKanbanAPI from "../api/kanbanAPI.js";
export default {
  name: "LoginPage",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    toRegister() {
      this.$emit("changeDisplay", "register");
    },
    login() {
      axiosKanbanAPI({
        method: "POST",
        url: "/login",
        data: {
          email: this.user.email,
          password: this.user.password,
        },
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          this.$emit("loginSuccess", "dashboard");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.user.email = "";
          this.user.password = "";
        });
    },
  },
  props: [],
};
</script>

<style>
</style>