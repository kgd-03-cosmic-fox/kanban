const baseUrl = "http://localhost:3000"

new Vue ({
    el:"#app",
    data:{
        currentPage: "login-page",
        user:{
            email: "",
            password: ""
        },
        msg:"Hello Vue",
        newTodo:"",
        todoList: [],
        onGoing:[]
    },
    methods:{
        login(){
            axios({
                method:"POST",
                url:`${baseUrl}/login`,
                data:{
                    email: this.user.email,
                    password: this.user.password
                }
            })
            .then(response=>{
                console.log(response)
                this.currentPage = "main-page"

                localStorage.setItem(`access_token`, response.data.token)
            })
            .catch(err=>{
                console.log(err)
            })
        },
        logout(){
            localStorage.removeItem(`access_token`)
            this.currentPage = "login-page"
        },
        addTodo(){
            this.todoList.push(this.newTodo)
        },
        processTodo(){
            
        },
        fetchTodos(){
            axios({
                method: "get",
                url: `${baseUrl}/todo`
            })
            .then(data=>{
                console.log(data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
})