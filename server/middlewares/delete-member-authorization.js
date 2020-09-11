const {User , Org , OrgMember} = require('../models')

function OrgAuthorization(req , res , next){

    User.findOne({
        where :{
            id : req.body.UserId
        },
        include : OrgMember
    })
    .then(data=>{

        if(data.OrgMember.FlagOwner === 1){
            next()
        }else{
            next({status:400 , message :'Not Authorize'})
        }

    })
    .catch(next)

}

module.exports = OrgAuthorization