const { Org , OrgMember , User , Task , Stat} = require('../models')

class OrganizationController {
    

    static createNewOrg(req , res , next){  
        
        Org.findOne({
            where:{
                org_name : req.body.org_name
            }
        })
        .then(data=>{

            if(data){
                res.send(400).json({message : 'Organization Name must be Unique'})
            }else{

                Org.create({
                    org_name : req.body.org_name
                })
                .then(data=>{

                    return OrgMember.create({
                        OrgId : data.id,
                        UserId : req.isLoggedIn.id,
                        FlagOwner : 1
                    })

                })
                .then(data =>{
                    res.status(200).json({message : 'Organization has been Created'})
                })
            }
        })
        .catch(next)

    }

    static myOrg(req , res , next){

        OrgMember.findAll({
            where : {
                UserId : req.isLoggedIn.id
            },
            include : Org
        })
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(next)

    }

    static orgMember(req , res , next){

        OrgMember.findAll({
            where : {
                OrgId : req.params.idOrg
            },
            include : User
        })
        .then(data=>{

            res.status(200).json(data)

        })
        .catch(next)


    }

    static addMember(req , res , next){

        OrgMember.create({
            OrgId : req.params.idOrg,
            UserId : req.body.UserId,
            FlagOwner : 0
        })
        .then(data=>{
            res.status(200).json({message : 'Member Has been Successfully Added'})
        })
        .catch(next)

    }

    static deleteMember(req , res , next){

        OrgMember.destroy({
            where : {
                OrgId : req.params.idOrg,
                UserId : req.body.UserId
            }
        })
        .then(data=>{

            res.status(200).json({message : 'Member has been Deleted'})

        })
        .catch(next)
    }


}

module.exports = OrganizationController