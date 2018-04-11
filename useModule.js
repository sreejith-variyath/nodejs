var http = require('http');
var dateTime = require('./myfirstModule');
http.createServer(function(req,res){
	res.writeHead(200,{'contentType':'text/html'});
	res.write("Date and Time :"+dateTime.myDateTime());
	res.end()
}).listen(8080);