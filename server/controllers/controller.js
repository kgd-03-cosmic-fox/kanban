const {User} = require(`../models/index`)
const jwt = require(`jsonwebtoken`)
const bcrypt = require(`bcryptjs`)
require('dotenv').config()


class Controller{
    static postRegister(req,res){
        const newUser={
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            OrganizationName: req.body.organization_name
        }
        User.create(newUser)
        .then((data)=>{
            res.status(201).json({
                message: `Hai ${data.name}, pendaftaran akunmu telah berhasil`
            })
        })
        .catch((err)=>{
           if(err.name === "SequelizeUniqueConstraintError"){
               res.status(400).json({
                   message: err.errors[0].message
               })
           }
           else if(err.name === "SequelizeValidationError"){
                res.status(400).json({
                    message: err.errors[0].message
                })
           }
           else{
               res.status(500).json({
                   message:"Internal Server Error"
               })
           }
        })
    }
    static postLogin(req,res){
        User.findOne({
            where:{
                email:req.body.email
            }
        })
        .then((data)=>{
            if(data){
                if(bcrypt.compareSync(req.body.password,data.password)){
                    const payload = {
                        name: data.name,
                        email:data.email,
                        organization_name:data.OrganizationName
                    }
                    res.status(202).json({
                        token: jwt.sign(payload,process.env.JWT_SECRET_KEY)
                    })
                }
                else{
                    res.status(400).json({
                        message:"Invalid email/password"
                    })
                }
            }
            else{
                res.status(400).json({
                    message:"Invalid email/password"
                })
            }
        })
        .catch((err)=>{
            res.send(500).json({
                message:"Internal Server Error",
                err
            })
        })
    }
}

module.exports = Controller