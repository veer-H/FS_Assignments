// app.js

const math = require('./math'); // Import the math module

const num1 = 10;
const num2 = 5;

const sum = math.add(num1, num2);
const difference = math.subtract(num1, num2);

console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
console.log(`The difference of ${num1} and ${num2} is: ${difference}`);
