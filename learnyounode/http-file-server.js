var port = process.argv[2];
var filePath = process.argv[3];
console.log(filePath);


var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res){

	var file = fs.createReadStream(filePath);
	
	file.on("open", function(){
		//res.writeHead(200, { 'content-type': 'text/plain' })
		file.pipe(res);
	})

	file.on("error", function (err){
		res.end(err);
	})

})

server.listen(port);