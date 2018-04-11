var http = require('http');
var fs = require('fs');
http.createServer(function (req,res){

 fs.readFile('text.html',function(err,data){
 	res.writeHeader(200,{"ContentType":"text/html"});
 	res.end(data);

 })

}).listen(8080);