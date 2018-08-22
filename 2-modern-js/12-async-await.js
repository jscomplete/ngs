const https = require('https');

function fetch (url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (rd) => data = data + rd);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

fetch('https://www.javascript.com/')
  .then(data => {
    console.log(data.length);
  });

  (async function read() {
    const data = await fetch('https://www.javascript.com/');

    console.log(data.length);
  })();
