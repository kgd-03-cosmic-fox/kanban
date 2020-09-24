const {User , OrgMember , Org} = require('../models')

function TaskAuthorization (req , res , next) {

    OrgMember.findOne({
        where: {
            UserId: req.isLoggedIn.id,
            OrgId: req.param.idOrg
        }
    })
        .then(data => {
            if(data){
                next()
            } else {
                next({status:404 , message : 'Not Authorize!!!'})
            }
        })
        .catch(next)
        
}

module.exports = TaskAuthorization