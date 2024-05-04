import * as promptSync from 'prompt-sync';
const prompt = promptSync();

// Union type representing either a Circle or a Rectangle
type Shape = Circle | Rectangle;

// Type representing a Circle with a 'kind' property of 'circle' and a 'radius' property
type Circle = {
    kind: 'circle';
    radius: number;
};

// Type representing a Rectangle with a 'kind' property of 'rectangle', a 'width' property, and a 'height' property
type Rectangle = {
    kind: 'rectangle';
    width: number;
    height: number;
};

// Type guard function to check if a given shape is a Circle
function isCircle(shape: Shape): shape is Circle {
    return (shape as Circle).kind === 'circle';
}

// Type guard function to check if a given shape is a Rectangle
function isRectangle(shape: Shape): shape is Rectangle {
    return (shape as Rectangle).kind === 'rectangle';
}

// Function to calculate the area of a Circle
function calculateCircleArea(circle: Circle): number {
    return Math.PI * circle.radius ** 2;
}

// Function to calculate the area of a Rectangle
function calculateRectangleArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
}

// Function to print the area of a given shape
function printShapeInfo(shape: Shape): void {
    if (isCircle(shape)) {
        const area = calculateCircleArea(shape);
        console.log(`Area of the circle with radius ${shape.radius} is ${area.toFixed(2)}.`);
    } else if (isRectangle(shape)) {
        const area = calculateRectangleArea(shape);
        console.log(`Area of the rectangle with width ${shape.width} and height ${shape.height} is ${area.toFixed(2)}.`);
    } else {
        console.log("Invalid shape provided.");
    }
}

// Taking user input to create a shape
const shapeType = prompt("Enter shape type (circle or rectangle): ")?.toLowerCase();

if (shapeType === 'circle') {
    const radius = parseFloat(prompt("Enter the radius of the circle: "));
    const circle: Circle = { kind: 'circle', radius };
    printShapeInfo(circle);
} else if (shapeType === 'rectangle') {
    const width = parseFloat(prompt("Enter the width of the rectangle: "));
    const height = parseFloat(prompt("Enter the height of the rectangle: "));
    const rectangle: Rectangle = { kind: 'rectangle', width, height };
    printShapeInfo(rectangle);
} else {
    console.log("Invalid shape type provided.");
}