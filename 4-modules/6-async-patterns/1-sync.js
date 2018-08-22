const fs = require('fs');

const data = fs.readFileSync(__filename);

console.log('File data is', data);

console.log('TEST');
