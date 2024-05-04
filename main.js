/* //Generators as Iterables
Instead of manually enumerating all 52 card values, you can create a generator 
function that computes all permutations of the different suits and numbers, 
yielding each one by one. Also show all 52 cards?
*/
function getPower(decimalPlaces) {
    return Math.pow(10, decimalPlaces);
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function roundToDecimalPlace(number, decimalPlaces = 2) {
    const factor = getPower(decimalPlaces);
    return Math.round(number * factor) / factor;
}

export { capitalize, roundToDecimalPlace };
