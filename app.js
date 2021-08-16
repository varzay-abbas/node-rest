/**
 *Node Rest API Project with clinic data
 *
 */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const app = new express();

// register JSON parser middlewear
app.use(bodyParser.json());

//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('Hello Node Rest API Test')
  })

require('./routes/clinicRoutes')(app);

app.listen(3001, () => {
    /* eslint-disable */
   // console.log('Server is up!');//
});

module.exports = app;