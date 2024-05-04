"use strict";
class Bus {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
// Example usage
const bus1 = new Bus("Volvo", "S-Series", 2024);
console.log("Bus 1:", bus1); // Output: Bus 1: { make: 'Ford', model: 'E-Series', year: 2023 }
