var express = require('express');
var router = express.Router();
const login = require("facebook-chat-api");
const config = require('./../config');
const key = require('./../_mdw/checkKey');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('express');
});

router.post('/msg',key,(req,res)=>{
  login({email: config.email,password: config.password},(err,api)=>{
    if(err){
      res.status(500).send(err)
    }
    
    //var yourID = "1589339201187007";
    var gid = config.groupId
    var msg = req.body.msg;
    if(api.sendMessage(msg,api)){
      res.send('ok')
    }else{
      res.status(500)
    }
  });
})

module.exports = router;
