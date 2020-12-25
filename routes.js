const express = require('express');
const route = express.Router();
const UsersControllers = require('./controllers/UsersControllers');
const CreateControllers = require('./controllers/CreateControllers');
const UserControllers = require('./controllers/UserControllers');

route.get('/users',UsersControllers);
route.get('/user/:id',UserControllers);
route.post('/create',CreateControllers);

module.exports = route;
