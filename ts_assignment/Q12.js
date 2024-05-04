"use strict";
function describeOS(osInfo) {
    console.log(`${osInfo.name} OS has ${osInfo.language} language.`);
}
const androidOS = { name: "Android", language: "Java" };
describeOS(androidOS); // Output: Android OS has Java language.
