function calculateAverage(numbers) {
    // Input validation (optional but recommended)
    if (!Array.isArray(numbers) || !numbers.length) {
        return null; // Or throw an error if you prefer
    }

    // Calculate the sum of all numbers
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Calculate the average by dividing the sum by the number of elements
    const average = sum / numbers.length;

    return average;
}

// Example usage (assuming you have a way to get user input for the array)
const numbers = [1, 2, 3, 4, 5]; // Replace this with your actual user input
const average = calculateAverage(numbers);

if (average !== null) {
    console.log("The average of the numbers is:", average);
} else {
    console.error("Invalid input: Please provide an array of numbers.");
}
