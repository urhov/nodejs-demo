var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
   fs.readFile('index.html', function){
res.writtenHead(200, {'content - Type' : 'text/html': 'charset=utf-8'});
res.write(data);
res.end();
   });
}).listen(8080);