const http = require('http');
// higher order functions recieve functions as arguments
// or return functions
// createServer function is a higher order function
// original code:
//const server = http.createServer((req, res) => {
  // res.end('Hello World\n');
// });

// capturing the anon funct in requestListener
// .end method -> res.write(blah); res.end();
// .end not optional because otherwise HTTP won't close
// req object for server is of type IncomingMessage, NOT ClientRequest
// res object is of type ServerResponse
// both req and res are streams!
const requestListener = (req, res) => {
  console.dir(req, {depth: 0 });
  res.end('Hello Node\n')
};

//const server = http.createServer(requestListener);
// pass in the refrence, do not call it requestListener()<-bad
// or could do
const server = http.createServer();
server.on('request', requestListener);
// listen method is async one, so need to have callback
server.listen(4242, () => {
  console.log('Server is running...');
});
