// toplevel api of express is function
const express = require('express');
// to use express call it
const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express');
});

server.get('/about', (req, res) => {
  res.send('About...');
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
