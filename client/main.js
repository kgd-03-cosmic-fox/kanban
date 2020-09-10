
const baseUrl = "http://localhost:3000"

new Vue ({
    el:"#app",
    data:{
        currentPage: "",
        user:{
            name: "",
            email: "",
            password: ""
        },
        newTodo:{
            title: "",
            description: "",
            due_date: ""
        },
        todoList: [],
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
                this.currentPage = "main-page"
                this.user.name = response.data.payload.name
                localStorage.setItem(
                    `access_token`,
                    response.data.token
                    )
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
            axios({
                method:"POST",
                url:`${baseUrl}/todo`,
                data:{
                    title: this.newTodo.title,
                    description: this.newTodo.description,
                    due_date: this.newTodo.due_date
                },
                headers:{
                    access_token: localStorage.getItem(
                        "access_token"
                    )
                }
            })
            .then(_=>{
                this.fetchData()
            })
            .catch(err=>{
                console.log(err)
            })
        },
        processTodo(id){
            console.log(id)
        },
        fetchData(){
            axios({
                method:"GET",
                url: `${baseUrl}/todo`,
                headers:{
                access_token: localStorage.getItem(
                    `access_token`
                    )
                }
            })
            .then(response=>{
                this.todoList = response.data.data
                this.user.name = response.data.payload.name
            
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },
    created(){
        if(localStorage.getItem(`access_token`)){
            this.currentPage = "main-page"
            this.fetchData()
        }
        else{
            this.currentPage = "login-page"
        }
    }
})