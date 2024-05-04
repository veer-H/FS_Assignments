"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q8_student_1 = require("./Q8_student"); // Import the Student class
// Create student objects
const student1 = new Q8_student_1.Student("Alice", 20);
const student2 = new Q8_student_1.Student("Bob", 25);
// Print student information
console.log(student1.getInfo()); // Output: Name: Alice, Age: 20
console.log(student2.getInfo()); // Output: Name: Bob, Age: 25
