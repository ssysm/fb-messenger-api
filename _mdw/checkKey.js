const config = require('./../config');
const key = (req,res,next)=>{
    if(req.body.key !== config.authKey){
        res.status(403).send('403')
    }else{
        next();
    }
}

module.exports = key;