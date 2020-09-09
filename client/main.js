new Vue ({
  el:'#app',
  data:{
    currentPage:'login-page'
  },
  methods:{
    changePage(page){
      this.currentPage = page
    }
  }
})
