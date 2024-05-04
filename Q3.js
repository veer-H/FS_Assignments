/* 3)Write a JavaScript program to mutate the original array to filter out the values specified, based on a given iterator function.

    Check if the last argument provided is a function.
    Use Array.prototype.map() to apply the iterator function fn to all array elements.
    Use Array.prototype.filter() and Array.prototype.includes() to pull out the values that are not needed.
    Set Array.prototype.length to mutate the passed in an array by resetting its length to 0.
    Use Array.prototype.push() to re-populate it with only the pulled values.*/


function filterArray(arr, fn) {
    // Check if the last argument is a function
    if (typeof fn !== 'function') {
        return "Error: Last argument must be a function.";
    }

    // Apply the iterator function fn to all array elements
    const mappedValues = arr.map(fn);

    // Pull out the values that are not needed
    const filteredValues = arr.filter(val => !mappedValues.includes(val));

    // Mutate the passed-in array by resetting its length to 0
    arr.length = 0;

    // Re-populate the array with only the pulled values
    arr.push(...filteredValues);

    return arr;
}

// Example usage
const originalArray = [1, 2, 3, 4, 5];
const iteratorFunction = x => x % 2 === 0; // Filter even numbers
const filteredArray = filterArray(originalArray, iteratorFunction);
console.log(filteredArray); // Expected output: [1, 3, 5]

