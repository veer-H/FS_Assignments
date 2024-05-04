/* Write a JavaScript program to determine if the current runtime environment is a browser. This is so that front-end modules can run on the server (Node) without errors.

    Use Array.prototype.includes() on the typeof values of both window and document (globals usually only available in a browser environment unless they were explicitly defined), which will return true if one of them is undefined.
    typeof allows globals to be checked for existence without throwing a ReferenceError.
    If both of them are not undefined, then the current environment is assumed to be a browser.*/
//#Source https://bit.ly/2neWfJ2 
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

console.log(isBrowser()); // true (browser)
console.log(isBrowser()); // false (Node)
