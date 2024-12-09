/* 
  OPERATORS
  +, -, *, /, %, <, >, >=, =<, !
*/
/*
const firstName = 'Michael';
const lastName = 'Gustavsson';
const addressLine = 'Gatan 1';
const postalCode = '12345';
const city = 'Storstaden';

// Concat, ta två strängar och gör till en...
const fullName = firstName + ' ' + lastName;

// The very bad way of concating strings...
const personInfo =
  'Mitt namn är ' +
  firstName +
  ' ' +
  lastName +
  ' ' +
  addressLine +
  ' ' +
  postalCode +
  ' ' +
  city;

console.log(firstName, lastName);
console.log(fullName);
console.log(personInfo);

// The right way (Template strings, string interpolation)...
const personInfoTheRightWay = `Mitt namn är ${firstName} ${lastName} 
  och jag bor på gatan ${addressLine} i orten
  ${postalCode} ${city}`;

console.log(personInfoTheRightWay);
*/

/*
const currentYear = 2024;
console.log(typeof currentYear, currentYear);

const malinBirthYear = 1990;
const ageMalin = currentYear - malinBirthYear;
console.log(ageMalin);
*/
/*
let x = 10 * 2 + 5;
console.log(x);

x = (10 * 2) / 5;
console.log(x);

x = 10 * (2 + 5);
console.log(x);
let z = 3 * 3 * 3 * 3;
let y = 3 ** 4;

console.log(z, y);

// modulus %...
let a = 25;
console.log(25 / 5);
console.log(25 / 3);
console.log(25 % 2);
*/

// Förenkling av operatorer...
/*
let age = 30;
console.log(age);

age = age + 1;
console.log(age);

age += 1;
console.log(age);

// age = age - 1;
age -= 1;
console.log(age);

console.log(age++);
console.log(age--);

console.log((age *= 2));
console.log((age /= 2));
*/

// Jämförelseoperator
let x = 10;

let y = x > 10;
console.log(y);

y = x < 10;
console.log(y);

y = x === 10;
console.log(y);

y = x >= 10;
console.log(y);

y = x <= 10;
console.log(y);

y = x !== 10;
console.log(y);

// let isActive = true;

// if (!isActive) {
//   let firstName = 'Pelle';
//   console.log(firstName);
// } else {
//   console.log('isActive hade inte rätt värde');
// }

let isActive;
// let isActive = null;

// console.log(typeof null);

if (isActive) {
  console.log('isActive is undefined');
} else {
  console.log('isActive har ett värde');
}
