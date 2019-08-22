let lastIntervalId, counter = 0;

const greeting = delay => {
	lastIntervalId = setInterval(()=>{
    counter+=1;
    if(counter === 5){
      clearInterval(lastIntervalId);
      greeting(delay+100);
      counter = 0;
    }
    console.log("Hello World: "+delay);
  }, delay);
};

greeting(100);
