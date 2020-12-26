const Users = require('../model/Users');
const users = new Users();
module.exports = (req, res) => {
  // res.json({save: 'Saved successfully'});
  const created = users.createUser(req.body);
  if(created){
    res.statusCode = 200;
    res.json({status: 'Created successfully'});
  }else{
    res.statusCode = 401;
    res.json({error:'Creation error'});
  }
  
}