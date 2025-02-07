/****************************************************/
//    Array.map()
/****************************************************/
import { vehicles } from './vehicles.js';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const calculatedNumbers = numbers.map((value) => value * 3);
console.log(numbers);
console.log(calculatedNumbers);

// Vehicles...

class Car {
  constructor(vehicleName, modelYear, mileage) {
    this.vehicleName = vehicleName;
    this.modelYear = modelYear;
    this.mileage = mileage;
  }
}

console.log(vehicles);
let vehicleList = vehicles.map((vehicle) => {
  return {
    companyName: vehicle.manufacturer,
    model: vehicle.model,
    modelYear: vehicle.modelYear,
    mileage: vehicle.mileage,
  };
});

console.log(vehicleList);

vehicleList = vehicles.map((vehicle) => {
  return {
    vehicleName: `${vehicle.manufacturer} ${vehicle.model}`,
  };
});

console.log(vehicleList);

vehicleList = vehicles.map((vehicle) => {
  return new Car(
    `${vehicle.manufacturer} ${vehicle.model}`,
    vehicle.modelYear,
    vehicle.mileage / 100
  );
});

console.log(vehicleList);
let car = vehicleList.at(2);
console.log(car);
