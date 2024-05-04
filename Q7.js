/* Write a JavaScript program to convert a string to snake case also in KebabCase.

Note: Break the string into words and combine them adding _ as a separator, using a regexp.

  Use String.prototype.match() to break the string into words using an appropriate regexp.
  Use Array.prototype.map(), Array.prototype.slice(), Array.prototype.join() and String.prototype.toLowerCase() to combine them, adding _ as a separator.*/

function toSnakeCase(str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
}

function toKebabCase(str) {
  return toSnakeCase(str).replace(/_/g, '-');
}

// Example usage:
const camelCase = "camelCase";
const hyphenated = "hyphenated-string";
const mixedString = "someMixed_string With spaces_underscores-and-hyphens";

console.log(toSnakeCase(camelCase));    // Output: camel_case
console.log(toKebabCase(camelCase));    // Output: camel-case
console.log(toSnakeCase(hyphenated));   // Output: hyphenated_string
console.log(toKebabCase(hyphenated));   // Output: hyphenated-string
console.log(toSnakeCase(mixedString));  // Output: some_mixed_string_with_spaces_underscores_and_hyphens
console.log(toKebabCase(mixedString));  // Output: some-mixed-string-with-spaces-underscores-and-hyphens
