const { Org , OrgMember , User , Task , Stat} = require('../models')
const task = require('../models/task')

class TaskController {

    static taskToDo(req , res , next){

        Task.findAll({
            where : {
                OrgId : req.params.idOrg,
                StatId : 1
            },
            include: Stat
        })
        .then(data=>{
            res.status(200).json({data})
        })
        .catch(next)

    }

    static taskOnProcess(req , res , next){

        Task.findAll({
            where : {
                OrgId : req.params.idOrg,
                StatId : 2
            },
            include: Stat
        })
        .then(data=>{
            res.status(200).json({data})
        })
        .catch(next)
    }

    static taskReview(req , res , next){
        
        Task.findAll({
            where : {
                OrgId : req.params.idOrg,
                StatId : 3
            },
            include: Stat
        })
        .then(data=>{
            res.status(200).json({data})
        })
        .catch(next)
    }

    static taskDone(req , res , next){
        
        Task.findAll({
            where : {
                OrgId : req.params.idOrg,
                StatId : 4
            },
            include: Stat
        })
        .then(data=>{
            res.status(200).json({data})
        })
        .catch(next)
    }


    static postTask(req , res , next){

        Task.create({
            task_name : req.body.task_name,
            description : req.body.description,
            due_date : req.body.due_date,
            UserId : req.body.UserId,
            OrgId : req.params.idOrg
        })
        .then(data=>{
            res.status(200).json({message : 'Create Task Success'})
        })
        .err(next)
    }

        static patchTodo(req ,res , next){

            Task.update({

                StatId : 1

            },{
                where : {
                    id : req.params.idTask
                }
            })
            .then(data=>{

                if(data != 0){

                    res.status(200).json({message : 'Data has been Updated'})

                }else{
                    
                    next({status : 400 , message : 'Data not Found'})
                }
            })
            .catch(next)

        }
        
        static patchOnProcess(req ,res , next){
            
            Task.update({

                StatId : 2
                
            },{
                where : {
                    id : req.params.idTask
                }
            })
            .then(data=>{

                if(data != 0){

                    res.status(200).json({message : 'Data has been Updated'})

                }else{
                    
                    next({status : 400 , message : 'Data not Found'})
                }
            })
            .catch(next)

        }
        
        static patchReview(req ,res , next){
            
            Task.update({

                StatId : 3
                
            },{
                where : {
                    id : req.params.idTask
                }
            })
            .then(data=>{

                if(data != 0){

                    res.status(200).json({message : 'Data has been Updated'})

                }else{
                    
                    next({status : 400 , message : 'Data not Found'})
                }
            })
            .catch(next)

        }
        
        static patchDone(req ,res , next){

            Task.update({

                StatId : 4
                
            },{
                where : {
                    id : req.params.idTask
                }
            })
            .then(data=>{

                if(data != 0){

                    res.status(200).json({message : 'Data has been Updated'})

                }else{
                    
                    next({status : 400 , message : 'Data not Found'})
                }
            })
            .catch(next)

        }

        static deleteTask(req , res , next){

            Task.destroy({
                where : {
                    id : req.params.idTask
                }
            })
            .then(data=>{
                res.status(200).json({message : 'Data has been deleted'})
            })
            .err(next)
        }
}

module.exports = TaskController