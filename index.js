// Environment variables
require('dotenv/config');
const config = {
    port: process.env.PORT || 8080,
    host: process.env.HOST || '127.0.0.1'
}

// Express Config
const express = require('express');
const app = express();

// BodyParser Config
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes 
const routes = require('./routes');
app.use(routes);

// Server Listen
const serverRunning = _ => console.log(`Server Running in port:${config.port} => http://locahost:${config.port}`);
app.listen(config.port, config.host, serverRunning);






