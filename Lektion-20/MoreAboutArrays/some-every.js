/*****************************************************************/
//  Array.some()...
/*****************************************************************/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
// console.log(numbers.some((c) => c > 3));
// console.log(numbers.some((c) => c > 8));
// console.log(numbers.some((c) => c > 10));

/*****************************************************************/
//  Array.every()...
/*****************************************************************/
console.log(numbers.every((c) => c > 7));
console.log(numbers.every((c) => c > 0));

// Funktion som vi kan använda för att testa innehåll
// i en array.
const checkArray = (element, index, array) => {
  return element >= 10;
};

// Test some().
console.log('Array.some()');
console.log([2, 9, 11, 4, 8, 3].some(checkArray));
console.log([2, 9, 4, 8, 3].some(checkArray));

// Test every().
console.log('Array.every()');
console.log([22, 19, 11, 14, 28, 33].every(checkArray));
console.log([2, 9, 4, 8, 3].every(checkArray));
