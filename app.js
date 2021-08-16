/**
 *Node Rest API Project with clinic data
 *
 */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const winston = require('winston');
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

// register JSON parser middlewear
app.use(bodyParser.json());

//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('Hello Node Rest API Test')
  })

require('./routes/clinicRoutes')(app);

app.listen(3001, () => {
  logger.info('Server is up and running at port:3001');
});

module.exports = app;