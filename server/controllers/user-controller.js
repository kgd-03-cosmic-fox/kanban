const { Org , OrgMember , User , Task , Stat} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
class UserController{

    static register(req, res , next){
        let dataUser 

        User.findOne({
            where : {
                email : req.body.email
            }
        })
        .then(data=>{
            if(data){
                next({status : 400 , message: 'Mohon untuk memasukkan email lain'})
            }else{

                return User.create({
                    username : req.body.username ,
                    email : req.body.email,
                    password : req.body.password
                })

            }
        })
        .then(data=>{
           dataUser = data

            return OrgMember.create({
                OrgId : 1,
                UserId : data.id,
            })

        })
        .then(dataOrg=>{
            let newUser = {}
            dataUser.Org = dataOrg            

            for( user in dataUser){
                if(user != password){
                    newUser[user] = dataUser[user]
                }
            }

            res.status(200).json(newUser)
        })
        .catch(next)
    }


    static login(req , res , next){

        User.findOne({
            email : req.body.email
        })
        .then(data=>{

            if(data){

             let checkPassword = bcrypt.compareSync(req.body.password , data.password)

             if(checkPassword){

                let access_token = jwt.sign({id: user.id , username : data.username , email : data.email}, process.env.SECRET_KEY)

                res.status(200).json({id: user.id , username : data.username , email : data.email , access_token})

             }else{
                next({status : 404 , message : 'Wrong Email / Password. Please check again'})
             }

            }else{
                next({status : 404 , message : 'Wrong Email / Password. Please check again'})
            }

        })
        .err(next)

    }


}

module.exports = UserController