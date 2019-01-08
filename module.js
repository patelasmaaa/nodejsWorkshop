let fs = require('fs');
let path = require('path');

var result = [];
module.exports = function(dirname, extension, callback){
		fs.readdir(dirname, function(error, list) {
			if(error) return callback(error);

		list.forEach(function(name){
			if(path.extname(name) === '.' + process.argv[3]){
				//console.log(name);
				result.push(name);
			}
		});
		return callback(null, result);
	})	
}
