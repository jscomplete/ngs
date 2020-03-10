// whole program doesn't go through the event loop
// we are directly using the OS syncronous file reading API
const fs = require('fs');
// synchronous version that Node makes available to read files
// you don't need any pattern to consume its data.
// you get the data when you call this method
const data = fs.readFileSync(__filename);
// you get file data before test because synchronous
console.log('File data is', data);

console.log('TEST');
