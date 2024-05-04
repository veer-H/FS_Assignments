/* Write a JavaScript program to curry (curries) a function
Note: Use recursion. If the number of provided arguments (args) is sufficient, call the passed function fn. Otherwise, return a curried function fn that expects the rest of the arguments. If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. Math.min()), you can optionally pass the number of arguments to the second parameter arity.

    Use recursion.
    If the number of provided arguments (args) is sufficient, call the passed function fn.
    Otherwise, use Function.prototype.bind() to return a curried function fn that expects the rest of the arguments.
    If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. Math.min()), you can optionally pass the number of arguments to the second parameter arity.*/

//#Source https://bit.ly/2neWfJ2 
const curry = (fn, arity = fn.length, ...args) =>
    arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
console.log(curry(Math.pow)(2)(8));
console.log(curry(Math.min, 3)(10)(50)(2));
