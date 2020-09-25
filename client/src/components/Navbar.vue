<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
    <a class="navbar-brand font-white" href="#" @click="refreshHome">Kanban</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link font-white" href="#"> <span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link font-white" href="#" @click="refreshHome">Work List</a>
        </li>
      </ul>
      <button type="button" class="btn btn-warning ml-2 mr-5" @click="logout">Logout</button>
    </div>
  </nav>
</template>
<script>
  export default{
    name:'Navbar',
    methods: {
      logout(){
        localStorage.removeItem("access_token")
        this.$emit("checkAuth")
      },
      refreshHome () {
        this.$emit("checkAuth")
      }
    }
  }
</script>
