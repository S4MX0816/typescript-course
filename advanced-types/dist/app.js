"use strict";
//////////////////// INTERSECTION TYPES
const e1 = {
    name: "Sanyam",
    privileges: ["create-server"],
    startDate: new Date(),
};
//////////////////// TYPE GUARDS
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log(emp.privileges);
    }
    if ("startDate" in emp) {
        console.log(emp.startDate);
    }
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: "Naveen", startDate: new Date() });
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo ..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird": {
            speed = animal.flyingSpeed;
            break;
        }
        case "horse": {
            speed = animal.runningSpeed;
        }
    }
    console.log("Moving with speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
//////////////////// TYPE CASTING
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "Hi There!";
}
const errorBag = {
    email: "Not a valid email",
    userName: "Must start with a capital character",
};
console.log(errorBag);
