var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      currentPage : 'home-page',
      homePage : 'list',
      taskToDo : [],
      taskOnProcess : [],
      taskReview : [],
      taskDone : [],
      addTask : {
          task_name : '',
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
        fetchTaskToDo(){

            // getting all Task where user id = user id login
            // stats Todo

            axios({
                method: 'get',
                url: 'http://localhost:3000/Task'
            })
            .then(response =>{
                console.log(response)
                this.taskToDo = response.data
                console.log(this.taskToDo.User)
            })
            .catch(err=>{
                console.log(err)
            })

        },
        fetchTaskOnProcess(){
            
            // getting all Task where user id = user id login
            // stats On Process

        },
        fetchTaskReview(){

            // getting all Task where user id = user id login
            // stats Review

        },
        fetchTaskDone(){

            // getting all Task where user id = user id login
            // stats Done
        },
        loginSubmit(){

            // logining into website and check data in database

        },
        registerPage(){
            this.currentPage = 'register'
        },
        registerSubmit(){

            // register if not have user for login

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
        updateStatOnProc( id ){

        },
        updateStatReview( id ){

        },
        updateStateDone( id ){
            
        },
        addNewTask(){

            this.homePage = 'task'
        
        },
        myList(){
            
            this.homePage = 'list'
        }
    },
    created(){

            this.currentPage = 'homepage'
            this.fetchTaskToDo()
        
    }
  })
