var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	req.on('data', function(message){
		res.write(message + ' ' + message + ' ' + message);
	});

	req.on('end', function(){
		res.end();
	});
}).listen(3000, '127.0.0.1');

console.log("Echo server running :-P");