'use strict';

var http = require('http');
var nodeStatic = require('node-static');

var server = new nodeStatic.Server('./static');

var app = http.createServer(function (request, response) {

  request.addListener('end', function () {
    server.serve(request, response);
  }).resume();

});

app.listen(8080);

console.log('Server up and running on port 8080');
