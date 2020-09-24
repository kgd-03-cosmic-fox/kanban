const {Organization} = require(`../models/index`)

class ControllerOrganization{
    static getAllOrganization(req,res){
        Organization.findAll()
        .then(data=>{
            res.status(200).json({
                data
            })
        })
    }
}


module.exports = ControllerOrganization