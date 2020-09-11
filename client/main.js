var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      currentPage : 'login',
      homePage : 'list',
      tasks : [],
      idOrg : 1,
      addTask : {
          taskname : '',
          description : '',
          due_date : ''
      },
      login: {
          email : '',
          password : ''
      },
      register: {
          username : '',
          email : '',
          password : ''
      }
    },
    methods:{
        fetchTask(){

            axios({
                method: 'get',
                url: `http://localhost:3000/tasks/${this.idOrg}`,
                headers :{
                    token : localStorage.getItem('token')
                }
            })
            .then(response =>{
                this.tasks = response.data.data
                //this.tasks[0].Stats[0].stat_name -> for getting status name
                
            })
            .catch(err=>{
                console.log(err)
            })

        },
        loginSubmit(){

            axios({
                method : 'post',
                url : 'http://localhost:3000/login',
                data :{
                    email : this.login.email,
                    password : this.login.password
                }
            })
            .then(response =>{
                this.currentPage = 'homepage'
                localStorage.setItem('token' ,response.data.access_token)
                localStorage.setItem('idUser' , response.data.id)
                localStorage.setItem('emailUser' , response.data.email)
                this.fetchTask()
            })
            .catch(err=>{
                console.log(err)
            })
            .always(()=>{
                this.login.email = ''
                this.login.password = ''
            })
            // logining into website and check data in 
            

        },
        registerPage(){
            this.currentPage = 'register'
        },
        registerSubmit(){

            axios({
                method : 'post',
                url: 'http://localhost:3000/register',
                data:{
                    username : this.register.username,
                    email : this.register.email,
                    password : this.register.password,
                    
                }
            })
            .then(data=>{
                this.currentPage = 'login'
            })
            .catch(err=>{
                console.log(err)
            })
            .always(()=>{
                    this.register.username = ''
                    this.register.email = ''
                    this.register.password = ''
            })            

        },
        back(){
            this.currentPage = 'login'
            this.register.username = ''
            this.register.email = ''
            this.register.password = ''
        },
        logout(){

            localStorage.clear()
            this.currentPage = 'login'
            this.homePage = 'list'
            
        },
        updateStatTodo( id ){
            console.log(id)
        },
        addNewTask(){
            this.homePage = 'task'
        },
        myList(){
            this.homePage = 'list'
        },
        postNewTask(){

          axios({
              method : 'post',
              url : `http://localhost:3000/tasks/${this.idOrg}`,
              data :{
                  taskname : this.addTask.taskname, 
                  description : this.addTask.description,
                  due_date : this.addTask.due_date
              },
              headers :{
                  token : localStorage.getItem('token')
              }
          })
          .then(data=>{
            
                this.homePage = 'list'
                this.addTask.taskname = '' 
                this.addTask.description = ''
                this.addTask.due_date = ''
                this.fetchTask()

          })
          .catch(err=>{
              console.log(err)
          })

      }
    },
    created(){

        if(localStorage.token){
            this.fetchTask()
            this.currentPage = 'home-page'
        }else{
            this.currentPage = 'login'
        }

    },
    computed:{

        filterData () {
            //this.tasks[0].Stats[0].stat_name -> for getting status 
            return this.tasks.filter( task => task.Stats[0].stat_name.includes('To Do'))
            
        }

    }
  })
