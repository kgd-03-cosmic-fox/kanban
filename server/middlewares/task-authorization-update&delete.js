const {User , OrgMember , Org , Task} = require('../models')
function TaskAuthorizationUpdateDelete (req, res , next){

    let idOrg
    
    Task.findOne({
        where : {
            id : req.params.idTask
        }
    })
    .then(data=>{
        if(data){
            
            idOrg = data.OrgId

            return OrgMember.findAll({
                where : {
                    UserId : req.isLoggedIn.id
                }
            })
            .then(data=>{

                console.log(data)
                data.forEach(el=>{
                    if(el.OrgId === idOrg){
                        next()
                    }
                })

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