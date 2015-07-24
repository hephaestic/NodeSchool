var fs = require('fs');
var path = require('path');


module.exports = function(dir, ext, callback){
	fs.readdir(dir, function(err, data){
		if(err) callback(err, null);
		else{
			var filteredFiles = [];
			data.foreach(function(file){
				if(path.extname(file) === "." + ext)
					filteredFiles.push(file);
			})
			callback(null, filteredFiles);
		}
	});
};