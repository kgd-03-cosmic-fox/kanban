const baseUrl = "http://localhost:3000"

new Vue ({
    el:"#app",
    data:{
        currentPage: "main-page",
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
            localStorage.setItem(`access_token`,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2F0cmlhYmhpIiwiZW1haWwiOiJzYXRyaWFiaGlAaGVrdGl2OS5jb20iLCJvcmdhbml6YXRpb25fbmFtZSI6Ikhla3RpdjkiLCJpYXQiOjE1OTk2NzQxMTh9.Pf3mDD3t6b6CFa_Y5HzMMzC8mAhhBy7JoaZjGk5I6Q8")
        },
        logout(){
            localStorage.removeItem(`access_token`)
        },
        addTodo(){
            this.todoList.push(this.newTodo)
        },
        processTodo(){
            
        },
        fetchTodos(){
            axios({
                methods: "get",
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