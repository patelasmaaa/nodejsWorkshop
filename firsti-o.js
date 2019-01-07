let fs = require('fs');

let buffer = fs.readFileSync(process.argv[2]);
let str = buffer.toString().split('\n');

console.log(str.length-1);

//console.log(buffer.toString().split('\n'));
