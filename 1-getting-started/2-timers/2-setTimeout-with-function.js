const func = () => {
  console.log('Hello after 4 seconds');
};

setTimeout(func, 4 * 1000);


// For: func(arg1, arg2, arg3, ...)
// We can use: setTimeout(func, delay, arg1, arg2, arg3, ...)
