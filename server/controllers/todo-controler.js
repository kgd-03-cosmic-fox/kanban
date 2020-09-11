const {Task,Organization} = require(`../models/index`)

class TodoController{
    static postNewTodoByByOrganizationName(req,res){
        let newTodo ={
            title: req.body.title,
            description: req.body.description,
            due_date: req.body.due_date,
            status: 0,
            OrganizationId: req.loggedInUser.organization_id
        }
        Task.create(newTodo)
        .then(()=>{
            res.status(201).json({
                message:"Success adding new todo"
            })
        })
        .catch((err)=>{
            if(err.errors[0].type === "Validation error" ){
                res.status(400).json({
                    message: err.errors[0].message
                })
            }else{
            res.status(500).json({
                message:"Internal server error"
            })
            }
        })
    }
    static getAllTodoByOrganizationName(req,res){
        Task.findAll({
            where:{
                OrganizationId: req.loggedInUser.organization_id
            },
            include:[Organization]
        })
        .then(data=>{
            res.status(200).json({
                data,
                payload: req.loggedInUser            
            })
        })
        .catch(_=>{
            res.status(500).json({
                message:"Internal server error"
            })
        })
    }
    static patchTodoStatus(req,res){
        Task.findOne({
            where:{
                id:req.params.id
            }
        })
        .then((data)=>{
            console.log(data)
            if(data){
                Task.update({
                    status: req.body.status,

                },{
                    where:{
                        id: req.params.id
                    }
                })
                .then(_=>{
                    res.status(200).json({
                        message:"Status berhasil di perbaharui"
                    })
                })
            }
        })
        .catch(err=>{
            res.status(500).json({
                message:"Internal Server Error",
                err
            })
        })
    }
    static deleteTodoById(req,res){
        Task.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(_=>{
            res.status(200).json({
                message:"Todo Berhasil dihapus"
            })
        })
        .catch(_=>{
            res.status(500).json({
                message:"Internal server error"
            })
        })
    }
}

module.exports = TodoController