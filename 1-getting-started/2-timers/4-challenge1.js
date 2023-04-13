const theOneFunc = time => {
    console.log("Hello after " + time + " seconds");
};

setTimeout(theOneFunc, 2 * 1000);
setTimeout(theOneFunc, 4 * 1000,4);
setTimeout(theOneFunc, 8* 1000,8);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
