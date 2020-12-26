const express = require('express');
const route = express.Router();

const UserControllers = require('./controllers/UserControllers');
const UsersControllers = require('./controllers/UsersControllers');
const CreateControllers = require('./controllers/CreateControllers');
const DeleteControllers = require('./controllers/DeleteControllers');
const UpdateControllers = require('./controllers/UpdateControllers');

route.get('/users',UsersControllers);
route.get('/user/:id',UserControllers);
route.put('/user/:id',UpdateControllers);
route.delete('/user/:id',DeleteControllers);
route.post('/user/create',CreateControllers);

module.exports = route;
