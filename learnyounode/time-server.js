var port = process.argv[2];
//var url = process.argv[3];

var net = require('net');

var dates = {};


var server = net.createServer(function (socket){
	var dateStr = "";
	var date = new Date();
	dateStr += date.getFullYear();
	dateStr += "-0";
	dateStr += date.getMonth()+1;
	dateStr += "-";
	dateStr += date.getDate();
	dateStr += " ";
	dateStr += date.getHours();
	dateStr += ":";
	dateStr += date.getMinutes();
	socket.end(dateStr);
})
server.listen(port);

function zeroFill(num){
	if(num < 10)
		return '0' + num;
	return num;
}