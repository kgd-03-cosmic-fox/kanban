const {User , OrgMember , Org , Task} = require('../models')
function TaskAuthorizationUpdateDelete (req, res , next){

    let idOrg
    
    Task.findOne({
        where : {
            TaskId : req.params.idTask
        }
    })
    .then(data=>{

        if(data){
            
            idOrg = data.OrgId

            return User.findOne({
                where : {
                    id : req.isLoggedIn.id
                }
            })
            .then(data=>{

                if(data.OrgId === idOrg){
                    next()
                }
            })
            .catch(next)
        }
        else{
            next({status : 400 , message:'Task Not Found'})
        }

    })
    .catch(next)

}

module.exports = TaskAuthorizationUpdateDelete