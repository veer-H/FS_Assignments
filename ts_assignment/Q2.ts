// let (Block-scoped, mutable)
let firstName = "John";

if (true) {
    let lastName = "Doe";
    console.log("Inside if:", firstName, lastName); // John Doe
}

console.log("Outside if:", firstName); // John (lastName not accessible)

// const (Block-scoped, immutable)
const PI = 3.14159;
// PI = 3.14; // Error: Cannot assign to a const variable

// var (Function-scoped, mutable - not recommended)
var greeting = "Hello";

function sayHello() {
  var greeting = "Hi"; // Re-declares greeting within function scope
  console.log(greeting); // Hi
}

sayHello();
console.log(greeting); // Hello (original greeting)
