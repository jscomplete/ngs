import { createServer } from 'http';

const server = createServer((req, res) => {
  res.end('Laura\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
