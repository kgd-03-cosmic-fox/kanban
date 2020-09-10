new Vue ({
  el:'#app',
  data:{
    currentPage:'login-page',
    user:{
      email:'',
      password:'',
    },
    task:{
      title:'',
      description:'',
      category:'',
      due_date:''
    },
    tasks:[]
  },
  methods:{
    login(){
      axios({
        method: 'POST',
        url: 'http://localhost:3007/login',
        data: {
          email:this.user.email,
          password:this.user.password
        }
      })
      .then(response => {
        // console.log(response.data.access_token)
          console.log(this)
          localStorage.setItem('token',response.data.access_token)
          this.currentPage = 'home-page'
          this.fetchTask()
      })
      .catch(err =>{
          console.log(err)
      })
    },
    showForm(){
      this.currentPage = 'test-add'
    },
    fetchTask(){
      axios({
        method:'Get',
        url: 'http://localhost:3007/',
        headers:{
          token: localStorage.token
        }
      })
      .then(response =>{
        this.tasks = response.data
      })
      .catch(err =>{
        console.log(err)
      })
    },
    addTask(){
      axios({
        method:'POST',
        url: 'http://localhost:3007/',
        headers:{
          token: localStorage.token
        },
        data:{
          title:this.task.title,
          description:this.task.description,
          category:this.task.category,
          due_date:this.task.due_date
        }
      })
      .then(response =>{
        this.fetchTask()
        this.currentPage= 'home-page'
      })
      .catch(err =>{
        console.log(err)
      })
    },
    deleteDeh(id){
      axios({
        method:'Delete',
        url: `http://localhost:3007/${id}`,
        headers:{
          token: localStorage.token
        }
      })
      .then(response =>{
        console.log(`success ${id}`)
        this.fetchTask()
      })
      .catch(err =>{
        console.log(err)
      })
    }
  },
  created(){
    if(!localStorage.token){
      this.currentPage='login-page'
    }
    else{
      this.fetchTask()
      this.currentPage='home-page'
    }
  }
})
