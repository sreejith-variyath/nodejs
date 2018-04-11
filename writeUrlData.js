var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function(req,res){

 var data = url.parse(req.url,true).query;
 //console.log('data',data);
 if(typeof data.txt !== 'undefined'){
 var txt = data.txt;
 console.log('query param value',txt);
 res.writeHeader(200,{'Content-type':'text/html'});
 //res.write('data from url : ',txt);
 if(txt!='undefined'){
	 fs.appendFile('test.txt',txt,function(err){
	 	if(err) throw err;
	 });
 }
}
 res.end();

}).listen(8080);