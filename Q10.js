/* Write a JavaScript program to map array values to an object using a function. The key-value pairs consist of the original value as the key and the mapped value.

Note: Use an anonymous inner function scope to declare an undefined memory space, using closures to store a return value. Use a new Array to store the array with a map of the function over its data set and a comma operator to return a second step, without needing to move from one context to another (due to closures and order of operations).

    Use Array.prototype.reduce() to apply fn to each element in arr and combine the results into an object.
    Use el as the key for each property and the result of fn as the value.*/

//#Source https://bit.ly/2neWfJ2 
const mapObject = (arr, fn) =>
    (a => (
        (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
    ))();
const squareIt = arr => mapObject(arr, a => a * a);
console.log(squareIt([1, 2, 3])); 
