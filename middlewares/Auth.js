require('dotenv/config');
const jwt = require('jsonwebtoken');

function Auth(req, res, next){
    const authToken = req.headers['authorization'];
    if(authToken != undefined){
        let bearer = authToken.split(' ');
        if(bearer[1] != 'undefined'){
          jwt.verify(bearer[1],process.env.SECRET,(err, data)=>{
              if(!err){
                  req.name = data.name;
                  req.id = data.id;
                  next();
              }else{
                res.status(401);
                res.json({err: 'Token Inválido'});
              }
          });
        }else{
            res.status(401);
            res.json({err: 'Sem Token'});
        }
    }else{
        res.status(401);
        res.json({err: 'Sem Token'});
    }
   
    
}

module.exports = Auth;