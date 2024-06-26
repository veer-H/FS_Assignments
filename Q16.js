/* Write a JavaScript program to convert an asynchronous function to return a promise.

    Use currying to return a function returning a Promise that calls the original function.
    Use the rest operator (...) to pass in all the parameters.
    Note: In Node 8+, you can use util.promisify.*/


//#Source https://bit.ly/2neWfJ2 
const promisify = func => (...args) =>
    new Promise((resolve, reject) =>
        func(...args, (err, result) => (err ? reject(err) : resolve(result)))
    );
const delay = promisify((d, cb) => setTimeout(cb, d));
delay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s
