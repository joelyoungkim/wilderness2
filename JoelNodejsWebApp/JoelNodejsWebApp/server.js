'use strict';
var http = require('http');
//var port = process.env.PORT || 1337;
var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
