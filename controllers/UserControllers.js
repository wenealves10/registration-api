const Users = require('../model/Users');
const users = new Users();
module.exports = (req, res) => {
  
  if(users.getUser(req.params.id)){
    res.statusCode = 200;
    res.json({data:users.getUser(req.params.id)});
  }else{
    res.statusCode = 404;
    res.json({error:'Not Found 404'});
  }

}