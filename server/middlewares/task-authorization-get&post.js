const {User , OrgMember , Org} = require('../models')

function TaskAuthorization (req , res , next) {

    console.log(req.params)

    User.findOne({
        where: {
            id : req.isLoggedIn.id
        },
        include : Org
    })
    .then(data=>{
       
        checkOrg = false

        data.Orgs.forEach(el=>{
            console.log(el.id , req.params.idOrg)
            if(req.params.idOrg == el.id){
                checkOrg = true
            }

        })

        if(checkOrg){
            next()
        }else{
            next({status:404 , message : 'Not Authorize!!!'})
        }
        
    })
    .catch(next)

}

module.exports = TaskAuthorization