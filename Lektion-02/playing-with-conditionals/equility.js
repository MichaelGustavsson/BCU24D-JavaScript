/*************************************/
// Jämförelse
// 1. loose comparison (==)
// 2. strict comparison (===)
/*************************************/

const number = '10';

// loosely comparison
if (number == 10) {
  console.log(`Number är ${number} (loose)`);
}

// strict comparison
if (number === 10) {
  console.log(`Number är ${number} (loose)`);
} else {
  console.log('Den gubben gick inte!');
}

console.log('Number är av typen', typeof number);

const newNumber = prompt('Ange ett nummer');

console.log(typeof newNumber);

// loose comparison
if (newNumber == 5) {
  console.log(`Du angav värdet ${newNumber}`);
  console.log('Du angav värdet', newNumber);
}

// loose
if (newNumber != 5) {
  console.log(`Du angav inte förväntat värde (5) utan jag fick ${newNumber}`);
}

// strict
if (newNumber === 5) {
  console.log(`Du angav förväntat värde (5) utan jag fick ${newNumber}`);
}
if (newNumber !== 5) {
  console.log(`Du angav inte förväntat värde (5) utan jag fick ${newNumber}`);
}
