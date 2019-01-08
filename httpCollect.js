var http = require('http');
var bl = require('bl');
//var bufferlist = new BufferList();
var str;

http.get(process.argv[2], function(response){
	response.pipe(bl(function(error, data) {
		str = data.toString();
		console.log(str.length);
		console.log(str);
		//bufferlist.append(data);
	}))
	
})