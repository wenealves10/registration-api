const express = require('express');
const route = express.Router();
const HomeControllers = require('./controllers/HomeControllers');
const CreateControllers = require('./controllers/CreateControllers');

route.get('/',HomeControllers);
route.post('/create',CreateControllers);

module.exports = route;
