"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function isCircle(shape) {
    return shape.kind === 'circle';
}
function isRectangle(shape) {
    return shape.kind === 'rectangle';
}
function calculateCircleArea(circle) {
    return Math.PI * Math.pow(circle.radius, 2);
}
function calculateRectangleArea(rectangle) {
    return rectangle.width * rectangle.height;
}
function printShapeInfo(shape) {
    if (isCircle(shape)) {
        var area = calculateCircleArea(shape);
        console.log("Area of the circle with radius ".concat(shape.radius, " is ").concat(area.toFixed(2), "."));
    }
    else if (isRectangle(shape)) {
        var area = calculateRectangleArea(shape);
        console.log("Area of the rectangle with width ".concat(shape.width, " and height ").concat(shape.height, " is ").concat(area.toFixed(2), "."));
    }
    else {
        console.log("Invalid shape provided.");
    }
}
// Taking user input to create a shape
var shapeType = (_a = prompt("Enter shape type (circle or rectangle): ")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
if (shapeType === 'circle') {
    var radius = parseFloat(prompt("Enter the radius of the circle: "));
    var circle = { kind: 'circle', radius: radius };
    printShapeInfo(circle);
}
else if (shapeType === 'rectangle') {
    var width = parseFloat(prompt("Enter the width of the rectangle: "));
    var height = parseFloat(prompt("Enter the height of the rectangle: "));
    var rectangle = { kind: 'rectangle', width: width, height: height };
    printShapeInfo(rectangle);
}
else {
    console.log("Invalid shape type provided.");
}
