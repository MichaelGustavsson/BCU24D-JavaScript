/*********************************************************************/
// Loops iterate
// JavaScript har vi olika varianter av att gå igenom en lista(array)
// 1. for loopen
// 2. for of loopen
// 3. forEach loopen
/*********************************************************************/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for loopen...
console.log('----- for loopen ------');
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i], 'i = ' + i);
}

// for of loopen...
console.log('----- for of loopen ------');
for (let number of numbers) {
  console.log(number);
}

// forEach loopen (High Order Methods)...
// Finns i två varianter...
// Variant 1.
console.log('----- forEach loopen variant 1 ------');
// Vi använder en anonym funktion...
numbers.forEach(function (number) {
  console.log(number);
});

// Variant 2.
console.log('----- forEach loopen variant 2 ------');
// Vi använder en Arrow function...
numbers.forEach((number) => {
  console.log(number);
});
