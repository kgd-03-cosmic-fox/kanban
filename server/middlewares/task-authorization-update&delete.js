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

            return OrgMember.findOne({
                where : {
                    UserId : req.isLoggedIn.id,
                    OrgId: idOrg
                }
            })
            .then(data=>{

                if(data) {
                    next()
                } else {
                    next({status : 401 , message:'Not Authorize'})
                }
 
            })

        }
        else{
            next({status : 400 , message:'Task Not Found'})
        }

    })
    .catch(next)

}

module.exports = TaskAuthorizationUpdateDelete