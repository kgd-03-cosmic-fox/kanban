function errorHandler (err , req , res , next){

    console.log(err)

    let message = err.message
    status = err.status || 500
    
    if(status === 500){
        message = 'Internal Server Error'
    }

    res.status(status).json({message})

}

module.exports = errorHandler