"use strict";
class Engine {
    constructor(horsepower, fuelType) {
        this.horsepower = horsepower;
        this.fuelType = fuelType;
    }
}
class Car {
    constructor(make, model, year, engine) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine; // Initialize the 'engine' property with an 'Engine' instance
    }
    start() {
        console.log("Car started!");
    }
    printCarDetails() {
        console.log(`Car Details:`);
        console.log(`  Make: ${this.make}`);
        console.log(`  Model: ${this.model}`);
        console.log(`  Year: ${this.year}`);
        console.log(`Engine Details:`);
        console.log(`  Horsepower: ${this.engine.horsepower}`);
        console.log(`  Fuel Type: ${this.engine.fuelType}`);
    }
}
// Example usage
const engine = new Engine(200, "Petrol");
const car = new Car("Ford", "Mustang", 2024, engine);
car.start(); // Output: Car started!
car.printCarDetails();
