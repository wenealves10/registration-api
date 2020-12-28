const Login = require('../model/Login');
const userLogin = new Login();

module.exports = (req, res) => {
    userLogin.loginUser(req.body).then(token => {
        if(token){
            res.statusCode = 200;
            res.json({token});
        }else{
            res.statusCode = 401;
            res.json({error: 'wrong email or password'});
        }
    }).catch(error =>{
        res.statusCode = 404;
        res.json({error: 'wrong email or password'})
    })
}
