/* Write a JavaScript program to perform left-to-right function composition for asynchronous functions.

    Use Array.prototype.reduce() and the spread operator (...) to perform function composition using Promise.prototype.then().
    The functions can return a combination of normal values, Promises or be async, returning through await.
    All functions must accept a single argument.*/

const composeAsync = (...fns) => arg =>
    fns.reduce((prevPromise, fn) =>
        prevPromise.then(fn), Promise.resolve(arg));

// Example asynchronous functions
const asyncAddOne = async (x) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x + 1);
        }, 1000);
    });
};

const asyncDouble = async (x) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x * 2);
        }, 1000);
    });
};

const asyncSquare = async (x) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x * x);
        }, 1000);
    });
};

// Composing the functions
const composedAsyncFunction = composeAsync(asyncAddOne, asyncDouble, asyncSquare);

// Testing the composed function
const input = 3;
composedAsyncFunction(input)
    .then(result => {
        console.log("Result:", result); // Output: Result: 28 (3 + 1 = 4 , 4*2 = 8, 8*8 = 64)
    })
    .catch(error => {
        console.error("Error:", error);
    });
