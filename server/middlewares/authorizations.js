const { Task } = require(`../models`)

function authorizations(req,res,next){
    console.log('terpanggil')
    Task.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(todo =>{
        if(todo){
            if(todo.OrganizationId == req.loggedInUser.organization_id && req.loggedInUser.isAdmin){
                next()
            } else {
                res.status(401).json({
                    message: 'Unauthorized'
                })
            }
        } else {
            res.status(404).json({
                message: 'error not found: 404'
            })
        }
    })
    .catch(err=>{
        next(err)
    })
}

module.exports = authorizations