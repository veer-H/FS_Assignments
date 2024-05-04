/*Write a JavaScript program to take any number of iterable objects or objects with a length property and return the longest one.

    Use Array.prototype.reduce(), comparing the length of objects to find the longest one.
    If multiple objects have the same length, the first one will be returned.
    Returns undefined if no arguments are provided. */


//#Source https://bit.ly/2neWfJ2 
const longestItem = (...vals) => [...vals].sort((a, b) => b.length - a.length)[0];
console.log(longestItem('this', 'is', 'a', 'testcase'));
console.log(longestItem(...['a', 'ab', 'abc']));
console.log(longestItem(...['a', 'ab', 'abc'], 'abcd'));
console.log(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]));
console.log(longestItem([1, 2, 3], 'foobar'));
