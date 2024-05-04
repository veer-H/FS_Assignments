// String to number conversion with parseInt()
let strNum: string = "123";
let numberFromParseInt: number = parseInt(strNum); // Type assertion after parsing
console.log("String to number (parseInt):", numberFromParseInt); // Output: 123

// Number to string conversion with toString()
let numberValue: number = 789;
let stringFromNumber: string = numberValue.toString();
console.log("Number to string:", stringFromNumber); // Output: "789"
