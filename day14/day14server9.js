var http=require('http');
var fs = require('fs');
http.createServer(function(req,res) {
	fs.readFile('banana.txt',function(err,file) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write(file);
	return res.end();
});
}).listen(5000);
