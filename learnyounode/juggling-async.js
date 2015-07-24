var urls = [process.argv[2], process.argv[3], process.argv[4]];

var http = require('http');
var bl = require('bl');

var done = [];
var count = 0;

urls.forEach(function (url, i){
	http.get(urls[i], function (response){
		response.pipe(bl(function (err, data){
			if(err) return console.error(err);
			done[i] = data.toString();
			count++;
			if(count === 3){
				console.log(done[0]);
				console.log(done[1]);
				console.log(done[2]);
			}
		}));
	});
});
