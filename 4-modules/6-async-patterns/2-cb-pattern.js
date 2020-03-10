const fs = require('fs');
// not syncReadFile readFile is asynchronous
// it has to go through the event loop
// callback pattern where last arg of any async function is
// itself a function -> known as the callback function
// callback function always takes an error object as it's first arg, data after
// if there is an error then it will be an error object
// otherwise passed as null
fs.readFile(__filename, function cb(err, data) {
  console.log('File data is', data);
});

console.log('TEST');
