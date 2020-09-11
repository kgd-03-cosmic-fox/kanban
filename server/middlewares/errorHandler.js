function errorHandler (err , req , res , next){

    console.log(err)

    let message = ''
    status = err.status || 500

    if(err.name === 'SequelizeValidationError'){

        status = 400
        err.errors.forEach(el=>{
            message += el.message
        })


    }else if(status === 500){
        message = 'Internal Server Error'
    } 

    res.status(status).json({message})

}

module.exports = errorHandler