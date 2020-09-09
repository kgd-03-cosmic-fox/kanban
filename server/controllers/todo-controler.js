const {Task} = require(`../models/index`)

class TodoController{
    static postNewTodoByByOrganizationName(req,res){
        console.log(req)
        let newTodo ={
            title: req.body.title,
            description: req.body.description,
            due_date: req.body.due_date,
            status: "planned",
            OrganizationName: req.loggedInUser.organization_name
        }
        Task.create(newTodo)
        .then(()=>{
            res.status(201).json({
                message:"Success adding new todo"
            })
        })
        .catch(()=>{
            res.status(500).json({
                message:"Internal server error"
            })
        })
    }
    static getAllTodoByOrganizationName(req,res){
        Task.findAll({
            where:{
                OrganizationName: req.loggedInUser.organization_name
            }
        })
        .then(data=>{
            res.status(200).json({
                data
            })
        })
        .catch(err=>{
            res.status(500).json({
                message:"Internal server error"
            })
        })
    }
}

module.exports = TodoController