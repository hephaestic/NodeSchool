// var http = require('http');

// http.get(process.argv[2], function(response) {
//     var len = 0;
//     var str = '';
//     response.setEncoding("utf8");
//     response.on("data", function(data) {
//         len += data.length;
//         str += data;
//     });
//     response.on("end", function(end) {
//         console.log(len);
//         console.log(str);
//     });
//     response.on("error", console.error);
// });

var url = process.argv[2];

var http = require('http');

http.get(url, function (response){
	//console.log("callback");
	var numData = 0;
	var allData = "";
	response.setEncoding("utf8");
	response.on("data", function (data){
	//console.log("get");
		numData += data.length;
		allData += data;
	});
	response.on("end", function (end){
	//console.log("end");
		console.log(numData);
		console.log(allData);
	});
	response.on("error", console.error);
})
