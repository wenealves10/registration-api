const express = require('express');
const route = express.Router();
const auth = require('./middlewares/Auth');

const UserControllers = require('./controllers/UserControllers');
const UsersControllers = require('./controllers/UsersControllers');
const CreateControllers = require('./controllers/CreateControllers');
const DeleteControllers = require('./controllers/DeleteControllers');
const UpdateControllers = require('./controllers/UpdateControllers');
const LoginCreateControllers = require('./controllers/LoginCreateControllers');
const LoginControllers = require('./controllers/LoginControllers');

route.get('/users',auth,UsersControllers);
route.get('/user/:id',auth,UserControllers);
route.put('/user/:id',auth,UpdateControllers);
route.delete('/user/:id',auth,DeleteControllers);
route.post('/user/create',auth,CreateControllers);
route.post('/user/sign',auth,LoginCreateControllers);
route.post('/user/login',LoginControllers);

module.exports = route;
