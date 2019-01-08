var net = require('net');
let todaydate;

var server = net.createServer(function(socket){
	
	todaydate = date.getFullYear()+'-'+date.getMonth()+'-'date.getDate()+' '+date.getHours()+':'+date.getMinutes()  

	socket.write(todaydate);
	socket.end();
}).listen(process.argv[2]);