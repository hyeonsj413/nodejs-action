
var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function( req, res){
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    fs.createReadStream('../image.jpeg').pipe(res);

});

server.listen(3000);
console.log('server running');