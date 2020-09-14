<template>
  <section id="regis-section" class="shadow-lg p-3 mb-5 bg-white rounded">
    <form @submit.prevent="registerNewUser()">
      <h1 style="text-align: center;">Register Form</h1>
      <div class="form-group">
        <label for="name-regis">Name</label>
        <input type="text" class="form-control" id="name-regis" v-model="user.name" />
      </div>
      <div class="form-group">
        <label for="email-regis">Email address</label>
        <input type="email" class="form-control" id="email-regis" v-model="user.email" />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="pass-regis">Password</label>
        <input type="password" class="form-control" id="pass-regis" v-model="user.password" />
      </div>
      <div class="form-group">
        <label for="org-regis">Organization</label>
        <select id="org-regis" class="form-control" v-model="user.organization">
          <option value="Hacktiv8" selected>Hacktiv8</option>
          <option value="Bethesda">Bethesda</option>
          <option value="Kojima Production">Kojima Production</option>
          <option value="Cosmic Fox">Cosmic Fox</option>
        </select>
        <!-- 
        <input type="text" class="form-control" id="org-regis" v-model="user.organization" />-->
      </div>
      <div class="row justify-content-between mx-5">
        <input type="button" class="btn btn-info" value="Back" @click.prevent="changePage('login')" />
        <button type="submit" class="btn btn-primary">Register</button>
      </div>
    </form>
  </section>
</template>

<script>
import axiosKanbanAPI from "../api/kanbanAPI.js";
export default {
  name: "RegisterPage",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        organization: "Hacktiv8",
      },
    };
  },
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    },
    registerNewUser() {
      axiosKanbanAPI({
        method: "POST",
        url: "/register",
        data: {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          organization: this.user.organization,
        },
      })
        .then((response) => {
          this.changePage("login");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.name = "";
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<style>
</style>