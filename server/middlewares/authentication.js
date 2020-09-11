const jwt = require('jsonwebtoken')
require('dotenv').config()
const {User} = require('../models')

function authentication(req , res , next){

    if(req.headers.token){
        
        try {

            let payload = jwt.verify(req.headers.token , process.env.SECRET_KEY)

            if(payload){

                req.isLoggedIn = payload
 
                
                User.findByPk(payload.id)
                .then(data=>{

                    if(data){   
                        next()
                    }else{
                    
                        throw ({status:401 , message: "Don't Have Authentication" })
                    
                    }

                })
                .catch(next)
            
            }else{

                throw ({status:401 , message: "Don't Have Authentication" })
            
            }
        
        }
        catch(err){
            
            next({status:401 , message: "Don't Have Authentication" })
        
        }
    
    }else{

        next({status:401 , message: "Don't Have Authentication" })

    }
    
}

module.exports = authentication