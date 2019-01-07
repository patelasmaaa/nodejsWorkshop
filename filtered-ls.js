let fs = require('fs');
let path = require('path');

fs.readdir(process.argv[2], function(error, list) {
	list.forEach(function(name){
		if(path.extname(name) === '.' + process.argv[3]){
			console.log(name);
		}
	})
})