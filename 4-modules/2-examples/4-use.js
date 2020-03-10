// when you require the api you get back a function
const templateGenerator = require('./4-function');
// this sets myTemplate to call a function with the title argument passed
const myTemplate = templateGenerator('Hello Node!');

console.log(myTemplate);


// const templateGenerator = require('./4-function').default;