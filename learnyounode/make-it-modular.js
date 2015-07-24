// var dir = argv[2];
// var ext = argv[3];

var filter = require('./filter');

filter(argv[2], argv[3], function(files){
	files.foreach(function(file){
		console.log(file);
	})
});