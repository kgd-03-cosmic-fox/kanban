const {Task,Organization} = require(`../models/index`)

class TodoController{
    static postNewTodoByByOrganizationName(req,res,next){
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
            next(err)
        })
    }
    static getAllTodoByOrganizationName(req,res,next){
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
        .catch(err=>{
            next(err)
        })
    }
    static patchTodoStatus(req,res,next){
        Task.findOne({
            where:{
                id:req.params.id
            }
        })
        .then((data)=>{
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
            next(err)
        })
    }
    static deleteTodoById(req,res,next){
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
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = TodoController