class Engine {
    public horsepower: number;
    public fuelType: string;

    constructor(horsepower: number, fuelType: string) {
        this.horsepower = horsepower;
        this.fuelType = fuelType;
    }
}

class Car {
    public make: string;
    public model: string;
    public year: number;
    public engine: Engine; // Include an 'Engine' instance as a property

    constructor(make: string, model: string, year: number, engine: Engine) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine; // Initialize the 'engine' property with an 'Engine' instance
    }

    public start(): void {
        console.log("Car started!");
    }

    public printCarDetails(): void {
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
