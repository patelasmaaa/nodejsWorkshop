var http = require('http');
var fs = require('fs');

let server = http.createServer(function(request, response){

	
	response.writeHead(200, {'Context-Type': 'text/plain'});
	
	let file = fs.createReadStream(process.argv[3]);
	file.pipe(response);
	
}).listen(process.argv[2]);