const http = require('http');
const url = require('url');


http.createServer(function(request, response){
    response.end('oie');
}).listen(8181);