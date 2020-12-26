const Users = require('../model/Users');
const users = new Users();
module.exports = (req, res) => {
    
   try{
       res.statusCode = 200;
       res.json({data:users.getsUsers});
   }catch(err){
       res.statusCode = 401;
       res.json({err:err});
   }

}