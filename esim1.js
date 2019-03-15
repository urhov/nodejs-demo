console.log('hei maailma')

var http = require ('http');
var url = require ('url');
http.createServer(function(req, res){


var q = url.parse(req.url, true).query;

console.log(q);

var nimi = q.nimi;
var osoite = q.osoite;


res.writeHead (200, {'content type' : 'text/html'});

res.write('<h1> Tervetuloa </h1>')

res.write('<a href ="http://www.esedu.fi">Hello world </a>');

res.write('<p>Tervetuloa');

res.write ('<p>' + nimi + '(' + osoite + ')' + .);

res.end('hello world');

res.write('<p>' + req.url + '</p>');

})res.end();

}).listen(8080);


