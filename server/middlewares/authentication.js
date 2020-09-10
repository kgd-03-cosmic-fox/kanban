const jwt = require(`jsonwebtoken`)
const {User} = require(`../models/index`)

function authentication(req,res,next){
    console.log(req.headers.access_token)
    if(!req.headers.access_token){
        res.status(401).json({
            message:"Failed to Authenticate"
        })
    }
    else{
        try{
            const payload = jwt.verify(req.headers.access_token,process.env.JWT_SECRET_KEY)

            User.findOne({
                where:{
                    email:payload.email
                }
            })
            .then((data)=>{
                if(data){
                    req.loggedInUser = payload
                    next()
                }
                else{
                    res.status(401).json({
                        message:"Failed to Authenticate"
                    })
                }
            })
            .catch((err)=>{
                res.send(err)
            })
        }
        catch(err){
            res.status(401).json({
                message:"Failed to Authenticate"
            })
        }
    }
}

module.exports=authentication