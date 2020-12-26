const Login = require('../model/Login');
const loginUser = new Login();

module.exports = (req, res) => {
    const login = loginUser.loginCreate(req.body);
    if(login){
        res.statusCode = 200;
        res.json({status:'successfully created',user:{id:req.id, name:req.name}});
    }else{
        res.statusCode = 401;
        res.json({status:'creation error'});
    }
}