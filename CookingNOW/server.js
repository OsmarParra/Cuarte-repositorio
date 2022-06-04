'use strict';
var express = require('express');
var bodyparser = require('body-parser');
var routes = require('./src/routes/productRoutes')

var app = express()

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({limit:'10mb'}));

app.use(express.static(__dirname + '/public'));
routes.assignRoutes(app);
app.listen(3000);

console.log('server listening on port 3000')
