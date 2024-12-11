// Ett objekt är ett sätta att organisera(kapsla) information
// som hör ihop
// Grupperar data och metoder
// Gruppera tillstånd och beteende...

// Vi kommer att arbeta med anonyma objekt.
// 1. Skapa ett eget objekt ifrån JavaScripts Object datatyp...
/*
const vehicle = new Object(); // Jag skapar ett nytt objekt som heter vehicle...

vehicle.id = 1;
vehicle.manufacturer = 'Ford';
vehicle.model = 'Mustang MACH-E';

console.log(vehicle);
console.log(vehicle.manufacturer);
*/

/*
const vehicle = {
  id: 1,
  manufacturer: 'Volvo',
  model: 'XC60',
  modelYear: 2018,
  mileage: 89500,
};

console.log('Vehicle', vehicle);

// Utöka med nya egenskaper
vehicle.color = 'Black';
vehicle.doors = 5;
vehicle.registrationNumber = 'ABC123J';
(vehicle.engine = {
  type: 'electric',
  horsePower: '500hk',
}),
  console.log('Vehicle', vehicle);

// Ta bort egenskaper...
delete vehicle.color;

console.log('Vehicle', vehicle);

console.log('Vehicle access to properties', vehicle['model']);
vehicle['model'] = 'V40';

console.log('Vehicle access to properties', vehicle['model']);
console.log('Vehicle', typeof vehicle);
/*

/************************************************/
// Värde kontra Referens typer
/************************************************/
// Värde(number, string, boolean) hamnar alltid på STACKEN!!!
// PRIMITIVA TYPER

/*
const firstName = 'Michael'; //Hamna på stacken...
console.log('FirstName', firstName);

let anotherName = firstName;
console.log('AnotherName', anotherName);
anotherName = 'Annika';
console.log('AnotherName', anotherName);
console.log('FirstName', firstName);
*/

/************************************************/
// Värde kontra Referens typer
/************************************************/
// Referenstyper hamnat ALLTID på stacken med en adress
// som pekar på en adress på HEAP delen av minnet...
// object, array Referens typer...

// Referens variabel
const vehicle1 = {
  id: 1,
  model: 'XC90',
  modelYear: 2018,
};

console.log('Bil 1', vehicle1);

// Referens variabel
let vehicle2 = vehicle1;

console.log('Bil2', vehicle2);

vehicle2.model = 'Saab Sonett';
console.log('Bil 1', vehicle1);
console.log('Bil2', vehicle2);
