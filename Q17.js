/* Write a JavaScript program to check whether the given argument is a symbol.

    Use typeof to check if a value is classified as a symbol primitive.*/

//#Source https://bit.ly/2neWfJ2 
const isSymbol = val => typeof val === 'symbol';
console.log(isSymbol(Symbol('x')));
console.log(isSymbol(Symbol(1)));
console.log(isSymbol(Symbol(')')));
