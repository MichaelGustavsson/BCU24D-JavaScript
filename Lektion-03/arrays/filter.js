/*********************************************/
// Array.filter()
/*********************************************/
// Filter tar ett predicate(funktion) med
// sökbegreppet som ska appliceras på listan...
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Hämta alla jämna tal och flytta dem till en
// ny lista...
// 1. Via en forEach loop...
// const evenNumbers = [];
// numbers.forEach(function (number) {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });
// console.log(numbers);
// console.log(evenNumbers);

// 2. Med hjälp av filter metoden...
const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);

// Ett mer verklighetstroget exempel...
// Hämta ut alla bilar av märket mercedes...
console.log(vehicles);
const mercedes = vehicles.filter(
  (vehicle) => vehicle.manufacturer.toLowerCase() === 'mercedes'
);
console.log('Mercer i lager', mercedes);

const interesting = vehicles.filter((vehicle) => vehicle.modelYear > 2016);
console.log('Intressanta', interesting);

const lowMileage = vehicles.filter((vehicle) => vehicle.mileage < 100000);
console.log('Tillräckligt lågt milantal', lowMileage);

// const test = mercedes.filter((merca) => merca.modelYear > 2018);
// console.log('TEST', test);

// const foundAllFancyVehicles = vehicles.filter(
//   (vehicle) =>
//     vehicle.manufacturer === 'Mercedes' &&
//     vehicle.modelYear > 2016 &&
//     vehicle.mileage < 150000
// );

// console.log(foundAllFancyVehicles);
// const foundMercedes = [];
// for (let vehicle of vehicles) {
//   if (vehicle.manufacturer.toLocaleLowerCase() === 'mercedes') {
//     foundMercedes.push(vehicle);
//   }
// }

// for (let i = 0; i < vehicles.length; i++){
//   if (vehicles[i].manufacturer === 'mercedes') {
//     foundMercedes.push(vehicles[i]);
//   }
// }

// console.log(foundMercedes);

console.log(vehicles);
