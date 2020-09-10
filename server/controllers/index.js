const { User, Task, Organisation } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
class Controller{
  static async postLogin(req,res){
    try{
      const user = await User.findOne({ where: { email: req.body.email }})
      if(!user){
        return res.status(404).json({
          message:`There's no account email ${req.body.email},Please Register yourself First!`
        })
      }
      else{
        if(bcrypt.compareSync(req.body.password,user.password)){
          const access_token = jwt.sign({id:user.id,email:user.email,organisationId:user.OrganisationId},process.env.SECRET_KEY)
          return res.status(202).json({access_token})
        }
        else{
          return res.status(401).json({
            message: 'Incorrect email/password'
          })
        }
      }
    }
    catch(err){
      res.json(err)
    }
  }
  static postRegister(req,res){
    User.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      jobDesk:req.body.jobDesk,
      OrganisationId:req.body.OrganisationId
    })
    .then(data =>{
      res.status(201).json({
        msg:"Register Success",
        name: req.body.name,
        password:req.body.password
      })
    })
    .catch(err =>{
      res.json(err)
    })
  }
  static getTask(req,res){
    Task.findAll({
      where:{
        OrganisationId:req.loggedInUser.organisationId
      }
    })
    .then(data =>{
      res.status(200).json(data)
    })
    .catch(err =>{
      res.send(err)
    })
  }
  static postTask(req,res){
    Task.create({
      title:req.body.title,
      description: req.body.description,
      OrganisationId:req.loggedInUser.organisationId,
      category: req.body.category,
      due_date: req.body.due_date
    })
    .then(data =>{
      res.status(200).json({
        message:"input success"
      })
    })
    .catch(err =>{
      res.send(err)
    })
  }
  static deleteTask(req,res){
    Task.destroy({
      where:{
        id:req.params.id
      }
    })
    .then(data =>{
      res.status(200).json({
        message:"Delete Success"
      })
    })
    .catch(err =>{
      res.send(err)
    })
  }
  static getTaskById(req,res){
    Task.findOne({
      where:{
        id:req.params.id
      }
    })
    .then(data =>{
      res.status(200).json(data)
    })
    .catch(err =>{
      console.log(err)
      res.status(500).json({
        message:err
      })
    })
  }
  static putTask(req,res){
    Task.update({
      title:req.body.title,
      description:req.body.description,
      category: req.body.category,
      due_date: req.body.due_date
    },{
        where:{
          id:req.params.id
        }
    })
    .then(data =>{
      res.status(200).json({
        message:"Update Success"
      })
    })
    .catch(err =>{
      console.log(err)
      res.send(err)
    })
  }
  static getTask(req,res){
    let myData = []
    let dummyObj={}
    Task.findAll({
      where:{
        OrganisationId:req.loggedInUser.organisationId
      },
      include:Organisation
    })
    .then(data =>{
      data.forEach((el) => {
        dummyObj = {
          id:el.id,
          title:el.title,
          description:el.description,
          category:el.category,
          due_date:`${new Date(el.due_date).getDate()}-${new Date(el.due_date).getMonth()}-${new Date(el.due_date).getFullYear()}`,
          Organisation: el.Organisation.name
        }
        myData.push(dummyObj)
      });

      res.status(200).json(myData)
    })
    .catch(err =>{
      console.log(err)
      res.send(err)
    })
  }
}
module.exports = Controller
