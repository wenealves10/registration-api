const Users = require('../model/Users');
const users = new Users();

module.exports = (req, res) => {
    const delet = users.deleteUser(req.params.id);
    if(delet){
        res.statusCode = 200;
        res.json({status:'Successfully deleted',user:{id:req.id, name:req.name}});
    }else{
        res.statusCode = 401;
        res.json({status:'Error while deleting'});
    }
}