/* Write a JavaScript program to build  an array, using an iterator function and an initial seed value.

    Use a while loop and Array.prototype.push() to call the function repeatedly until it returns false.
    The iterator function accepts one argument (seed) and must always return an array with two elements ([value, nextSeed]) or false to terminate.*/


function buildArray(iterator, seed) {
    const result = [];
    let next = iterator(seed);

    while (next !== false) {
        const [value, nextSeed] = next;
        result.push(value);
        next = iterator(nextSeed);
    }

    return result;
}

// Example usage:
function generateEvenNumbers(seed) {
    const nextValue = seed + 2;
    return nextValue <= 10 ? [seed, nextValue] : false; // Terminate when exceeding 10
}

const evenNumbers = buildArray(generateEvenNumbers, 0);
console.log(evenNumbers); // Output: [0, 2, 4, 6, 8, 10]
