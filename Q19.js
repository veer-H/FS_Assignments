/* Write a JavaScript function that accepts an argument and returns the type.

Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined*/

function getArgumentType(argument) {
    const type = typeof argument;

    // Handle special case: null is technically an object but shouldn't be classified as such
    if (argument === null) {
        return "null";
    }

    // Return the type directly for basic types
    if (["string", "number", "boolean", "undefined"].includes(type)) {
        return type;
    }

    // For functions, use built-in check
    if (typeof argument === "function") {
        return "function";
    }

    // Otherwise, it's likely an object (including arrays)
    return "object";
}
