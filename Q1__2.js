/* 1)evaluate expression ${add(2,3)} using function call in template literal use two arguments.


2)passing a function inside template literals using arrow function print a variable is greater than or less than and print true or false.*/


const addition = (a, b) => a + b;
console.log(`The sum of 2 and 3 is ${addition(2, 3)}`);

function add(x, y) {
    return x + y;
}

console.log(`Sum 2 + 3 = ${add(2, 3)}`);