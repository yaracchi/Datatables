var http = require('http');
var app = require('./app');
//this is executed upon each request
http.createServer(app.handleRequest).listen(8000);