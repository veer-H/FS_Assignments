import { capitalize, roundToDecimalPlace } from './main.js'; // Assuming main.js is in the same directory

function displayTotal(amount, message = "Your total is:") {
    const formattedAmount = roundToDecimalPlace(amount, 2);
    const capitalizedMessage = capitalize(message);
    console.log(`${capitalizedMessage} $${formattedAmount}`);
}

export { displayTotal };
