function swap<T>(arr: T[], index1: number, index2: number): T[] {
  // Check for valid indices
  if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
    throw new Error("Invalid index provided");
  }

  // Swap elements using destructuring
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

  // Return the modified array
  return arr;
}

// Example usage
const numbers: number[] = [1, 2, 3, 4];
swap(numbers, 0, 3); // Swap first and last elements
console.log(numbers); // Output: [4, 2, 3, 1]

const strings: string[] = ["apple", "banana", "cherry"];
swap(strings, 1, 2); // Swap second and third elements
console.log(strings); // Output: ["apple", "cherry", "banana"]
