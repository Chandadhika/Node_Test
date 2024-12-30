// setup one
// common js require() = import
// add module
const os = require('os');
const path = require('path');

console.log(os);
console.log(global);

console.log(__dirname);
console.log(__filename);


console.log(path.join(__dirname));
console.log(path.join(__filename));

console.log(path.parse(__dirname));
console.log(path.parse(__filename));
