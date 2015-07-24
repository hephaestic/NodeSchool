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

// http.get(urls[0], function (response){
// 	response.pipe(bl(function (err, data){
// 		if(err) return console.error(err);
// 		done[0] = data.toString();
// 		if(null != done[0] && null != done[1] && null != done[2] ){
// 			console.log(done[0]);
// 			console.log(done[1]);
// 			console.log(done[2]);
// 		}
// 	}));
// })

// http.get(urls[1], function (response){
// 	response.pipe(bl(function (err, data){
// 		if(err) return console.error(err);
// 		done[1] = data.toString();
// 		if(null != done[0] && null != done[1] && null != done[2] ){
// 			console.log(done[0]);
// 			console.log(done[1]);
// 			console.log(done[2]);
// 		}
// 	}));
// })

// http.get(urls[2], function (response){
// 	response.pipe(bl(function (err, data){
// 		if(err) return console.error(err);
// 		done[2] = data.toString();
// 		if(null != done[0] && null != done[1] && null != done[2] ){
// 			console.log(done[0]);
// 			console.log(done[1]);
// 			console.log(done[2]);
// 		}
// 	}));
// })

