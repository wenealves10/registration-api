Users = require('../model/Users');
const users = new Users();

module.exports = (req, res) => {
    const update = users.putUser(req.params.id, req.body);
    if(update){
        res.statusCode = 200;
        res.json({status:'Successfully updated'});
    }else{
        res.statusCode = 401;
        res.json({status:'Update Error'});
    }
}