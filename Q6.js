/* Write a JavaScript program to iterate over a callback n times.

    Use Function.prototype.call() to call fn n times or until it returns false.
    Omit the last argument, context, to use an undefined object (or the global object in non-strict mode).*/

function iterateCallback(n, callback) {
    for (let i = 0; i < n; i++) {
        if (callback.call() === false) {
            break;
        }
    }
}

// Example callback function
function exampleCallback() {
    console.log("Executing callback...");
    // Returning false to stop iteration after 3 calls
    if (exampleCallback.counter === 2) {
        return false;
    }
    exampleCallback.counter++;
}

exampleCallback.counter = 0;

// Call the callback function 5 times
iterateCallback(5, exampleCallback);
