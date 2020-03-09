// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math;

// With require
// const { readFile } = require('fs');


const circle = {
  label: 'circleX',
  radius: 2,
};
// the function expects an object that has a radius,
// and *may* have a precision value, but it is optional
//(because of the = {} after it)
// and the default value of 2 is used if it is missing
const circleArea = ({ radius }, {precision = 2} = {}) =>
  (PI * radius * radius).toFixed(precision);

console.log(
  circleArea(circle)
);
