var filePath = process.argv[2];
var fs = require('fs');
fs.readFile(filePath, "utf-8", callback);
function callback(err, fileString){
	if(err == null){
		console.log(fileString.split('\n').length - 1);
	}
	else{
		console.log("error");
	}
}


