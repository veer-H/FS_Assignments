/* Write a JavaScript program to pick  the key-value pairs corresponding to the given keys from an object.

    Use Array.prototype.reduce() to convert the filtered/picked keys back to an object with the corresponding key-value pairs if the key exists in the object.*/

function pick(obj, keys) {
    return keys.reduce((acc, key) => {
        if (key in obj) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}

// Example usage:
const person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    occupation: "Software Engineer"
};

const pickedKeys = ["name", "age", "hobby"];

const pickedObject = pick(person, pickedKeys);
console.log(pickedObject); // Output: { name: "John Doe", age: 30 }
