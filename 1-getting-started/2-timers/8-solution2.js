let counter = 0;
const intervalId = setInterval(() => {
  console.log('Hello World');
  counter += 1;

  if (counter === 5) {
    console.log('Done');
    clearInterval(intervalId);
  }
}, 1000);
