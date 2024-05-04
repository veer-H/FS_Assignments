// Vehicle class (abstract)
class Vehicle {
    run() {
        throw new Error("This method must be implemented in a subclass.");
    }
}

// Car class
class Car extends Vehicle {
    run() {
        const resultText = document.getElementById("result");
        resultText.textContent = "Car is running smoothly!\n";
    }
}

// Truck class
class Truck extends Vehicle {
    run() {
        const resultText = document.getElementById("result");
        resultText.textContent = "Truck is hauling heavy cargo!\n";
    }
}

function processData(form) {
    const selectedVehicle = form.elements["vehicleType"].value;
    let vehicle;

    if (selectedVehicle === "car") {
        vehicle = new Car();
    } else if (selectedVehicle === "truck") {
        vehicle = new Truck();
    } else {
        console.error("Invalid vehicle type selected.");
        return;
    }

    vehicle.run(); // Call the appropriate run method
    const resultText = document.getElementById("result");
    //resultText.textContent = `You selected ${selectedVehicle}.\n`;
}
