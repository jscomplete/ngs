const theOneFunc = () => {};

setTimeout(theOneFunc, 4 * 1000);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
const hi = num => {
    console.log(`Hello after ${num} seconds`);
};

setTimeout(hi, 2 * 1000, 2);