new Vue ({
    el:"#app",
    data:{
        msg:"Hello Vue",
        newTodo:"",
        todoList: [],
        onGoing:[]
    },
    methods:{
        addTodo(){
            this.todoList.push(this.newTodo)
        },
        processTodo(){
            
        }
    }
})