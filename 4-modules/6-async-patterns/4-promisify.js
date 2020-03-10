//import { readFile as _readFile } from 'fs';
//import { promisify } from 'util';

//const readFile = promisify(_readFile);

const fs = require('fs');
const util = require('util');
// the promise that is returned
const readFile = util.promisify(fs.readFile);

async function main() {
  const data = await readFile(__filename);
  console.log('File data is', data);
}

main();

console.log('TEST');
