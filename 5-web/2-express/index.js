const express = require('express');

const server = express();

server.listen(4242, () => {
  console.log('Express Server is running...');
});
