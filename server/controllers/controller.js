const {User} = require(`../models/index`)
const jwt = require(`jsonwebtoken`)
const bcrypt = require(`bcryptjs`)

class Controller{
    static postRegister(req,res){
        const newUser={
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin:false,
            OrganizationId: req.body.organization_name //Body input tulisannya name tapi valuenya dalam bentuk "id"
        }
        User.create(newUser)
        .then((data)=>{
            res.status(201).json({
                message: `Hai ${data.name}, pendaftaran akunmu telah berhasil`
            })
        })
        .catch((err)=>{
            console.log(err)    
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
                        organization_id:data.OrganizationId,
                        isAdmin: data.isAdmin
                    }
                    res.status(202).json({
                        token: jwt.sign(payload,process.env.JWT_SECRET_KEY),
                        payload
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