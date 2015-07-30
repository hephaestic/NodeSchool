var port = process.argv[2];

var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res){
	var info = url.parse(req.url, true);
	var date = new Date(info.query.iso);

	var ans;
	if(info.pathname === '/api/parsetime'){
		ans = parsetime(date);
	}else if(info.pathname === '/api/unixtime'){
		ans = unixtime(date);
	}

	if(ans){
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(ans));
	} else{
		res.writeHead(400);
	}

})
server.listen(port);


function parsetime(time){
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	};
}

function unixtime(time){
	return {unixtime: time.getTime()};
}

function parseTime(date){
	var obj = new Object();
	obj.hour = date.getHours();
	obj.minute = date.getMinutes();
	obj.second = date.getSeconds();
	return JSON.stringify(obj);
}

function unixTime(iso){
	var date = new Date(iso);
	var obj = new Object();
	obj.unixtime = date.getTime();
	return JSON.stringify(obj);
}