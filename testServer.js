/*
*  https://www.w3schools.com/nodejs/nodejs_get_started.asp
*/

const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8060);