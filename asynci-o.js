let fs = require('fs');
let str;

fs.readFile(process.argv[2], function reads(error, data){
	str = data.toString().split('\n');	
	console.log(str.length-1);
});

