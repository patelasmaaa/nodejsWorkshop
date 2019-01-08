let reads = require('./module.js');

reads(process.argv[2], process.argv[3], function(error, result) {
	if(error) return console.error(error);
	/*else 
		//console.log(result);
		return result;*/

	result.forEach(function(file){
		console.log(file);
		//console.log(fileode)
	});
});h