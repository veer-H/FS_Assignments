/* Write a JavaScript program to split a multiline string into an array of lines.

    Use String.prototype.split() and a regular expression to match line breaks and create an array.S*/

// function splitIntoLines(multilineString) {
//     return multilineString.split(/\r?\n/).map(line => line.trim());
// }

// // Example multiline string
// const multilineString = `Line 1
//             Line 2
//             Line 3`;

// const linesArray = splitIntoLines(multilineString);
// console.log(linesArray);


const splitLines = str => str.split(/\r?\n/);
console.log('Original string:');
console.log('This\nis a\nmultiline\nstring.\n');
console.log(splitLines('This\nis a\nmultiline\nstring.\n'));