function newTaskStartingValueAssign(req, res, next) {
  req.body.organization = req.body.payload.organization;
  //UserId relation will be added when someone take the job to the next level
  req.body.status = 0;
  next();
}

//this middleware will be called exclusively on "Create New Task" calls
//should be called AFTER authentication because it NEEDS decoded payload
//to autoassign starting value according to the token
module.exports = newTaskStartingValueAssign;