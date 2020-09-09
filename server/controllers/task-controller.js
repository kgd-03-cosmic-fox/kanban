const { Org , OrgMember , User , Task , Stat} = require('../models')

class TaskController {

    static taskToDo(req , res , next){

        Task.findAll({
            where : {
                OrgId : req.params.id,
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
                OrgId : req.params.id,
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
                OrgId : req.params.id,
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
                OrgId : req.params.id,
                StatId : 4
            },
            include: Stat
        })
        .then(data=>{
            res.status(200).json({data})
        })
        .catch(next)
    }

}

module.exports = TaskController