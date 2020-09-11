const { Org , OrgMember , User , Task , Stat , TaskStat} = require('../models')

class TaskController {

    static taskAll(req , res , next){

        Task.findAll({
            where : {
                OrgId : req.params.idOrg
            },
            include: [
                {
                    model:Stat
                },
                {
                    model:User
                }
            ]
            
        })
        .then(data=>{

            res.status(200).json(data)
        })
        .catch(next)

    }

    static postTask(req , res , next){

        Task.create({
            taskname : req.body.taskname,
            description : req.body.description,
            due_date : req.body.due_date,
            UserId : req.isLoggedIn.id,
            OrgId : req.params.idOrg
        })
        .then(data=>{

            return TaskStat.create({
                StatId : 1,
                TaskId : data.id
            })
            
        })
        .then(data =>{

            res.status(200).json({message : 'Create Task Success'})

        })
        .catch(next)
    }

        static patchStatus(req ,res , next){

            TaskStat.update({

                StatId : req.body.StatId

            },{
                where : {
                    TaskId : req.params.idTask
                }
            })
            .then(data=>{
                console.log(data)
                if(data != 0){

                    res.status(200).json({message : 'Data has been Updated'})

                }else{
                    
                    next({status : 400 , message : 'Data not Found'})
                }
            })
            .catch(next)

        }
        
        static deleteTask(req , res , next){

            TaskStat.destroy({
                where : {
                    TaskId : req.params.idTask
                }
            })
            .then(data=>{

                return Task.destroy({
                    where :{
                        id : req.params.idTask
                    }
                })
                
            })
            .then(data=>{
                res.status(200).json({message : 'Data has been deleted'})
            })
            .catch(next)
        }
}

module.exports = TaskController