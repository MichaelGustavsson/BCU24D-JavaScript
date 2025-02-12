/*******************************************************/
//    Array.filter()
/*******************************************************/

import { vehicles } from './vehicles.js';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Plocka ut alla jämna tal och placera i en ny array...
let evenNumbers = [];

// Alternativ 1.
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});

// console.log('Original Array', numbers);
// console.log('Even Number', evenNumbers);

// Alternativ 2.
evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log('Alternativ 2 med filter funktionen');
// console.log('Original Array', numbers);
// console.log('Even Number', evenNumbers);

// Mer verklighetstroget exempel...
console.log(vehicles);

// Hämtar ut alla bilar av märket mercedes...
const mercedesList = vehicles.filter(
  (vehicle) => vehicle.manufacturer.toLowerCase() === 'mercedes'
);

console.log(mercedesList);

// Hämta ut bilar som är nyare än 2016...
const interestingCars = vehicles.filter((vehicle) => vehicle.modelYear > 2016);
console.log('Interesting Cars', interestingCars);

// Hämta bilar som har än kortare körsträcka än 10 000 mil...
const lowMileage = vehicles.filter((vehicle) => vehicle.mileage < 100000);
console.log('Low Mileage', lowMileage);

// Hämta alla bilar som uppfyller ovanstående krav...
const weWant = vehicles.filter(
  (vehicle) => vehicle.modelYear > 2016 && vehicle.mileage < 100000
);
console.log('Vi vill ha', weWant);
