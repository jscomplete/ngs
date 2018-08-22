let lastIntervalId, counter = 5;

const greeting = delay => {
  if (counter === 5) {
    clearInterval(lastIntervalId);
    lastIntervalId = setInterval(() => {
      console.log('Hello World. ' + delay);
      greeting(delay + 100);
    }, delay);
    counter = 0;
  }

  counter += 1;
};

greeting(100);
