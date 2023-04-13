// const http = require('http');
import { createServer } from  'http'

const server = createServer((req, res) => {
  res.end('Hello World \n ecma');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
