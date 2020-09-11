const { Stat } = require('../models')

class StatusController{

    static getAll(req,res,next){
        
        Stat.findAll()
        .then(data=>{

            res.status(200).json(data)
        })
        .catch(next)

    }

}


module.exports = StatusController