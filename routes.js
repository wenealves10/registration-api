const express = require('express');
const route = express.Router();
const HomeControllers = require('./controllers/HomeControllers');


route.get('/',HomeControllers);

module.exports = route;
