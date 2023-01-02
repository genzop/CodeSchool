var express = require('express');
var app = express();
var router = require('./routes/cities.js');


app.use('/cities', router);
app.listen(3000);
