// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

const dateToParse = 'March 26, 2024';
const parsedDate = Date.parse(dateToParse);
const years = Math.round(parsedDate / year);

console.log(parsedDate);
