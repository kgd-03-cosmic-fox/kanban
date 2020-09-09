const { Task } = require('../models')
function authorization(req,res,next){
  Task.findOne({
    where:{
      id:req.params.id
    }
  })
  .then(task =>{
    if(task.OrganisationId == req.loggedInUser.organisationId){
      next()
    }
    else{
      res.status(401).json({
        message:"Access Denied"
      })
    }
  })
  .catch(err =>{
    res.send(err)
  })
}
module.exports = authorization
