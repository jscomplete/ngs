const express = require('express');

const server = express();

// this line is required to get ejs and express to work together
server.set('view engine', 'ejs');

// instead of .send using .render
// this renders one of the templates that is found in the views directory
server.get('/', (req, res) => {
  res.render('index');
});

server.get('/about', (req, res) => {
  res.render('about');
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
