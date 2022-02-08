const http = require('http');
// require function is what you use to manage the dependicies of your programs // 
// Can use it to depend on any library. Built in or third party  //

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
