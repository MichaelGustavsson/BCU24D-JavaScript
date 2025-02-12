const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Spread operatorn...
const arr2 = [...arr1];

console.log('Array 1', arr1);
console.log('Array 2', arr2);

// for loop...
const arr3 = [];
for (let i = 0; i < arr1.length; i++) {
  // arr3.push(arr1[i]);
  arr3[i] = arr1[i];
}

console.log('Array 3', arr3);

// while loop...
const arr4 = [];
let i = 0;
while (i < arr1.length) {
  arr4[i] = arr1[i];
  i++;
}

console.log('Array 4', arr4);

// Slice...
const arr5 = arr1.slice();
console.log('Array 5', arr5);

// JSON functions...
// console.log(JSON.stringify(arr1));
// console.log(JSON.parse(JSON.stringify(arr1)));
const arr6 = JSON.parse(JSON.stringify(arr1));
console.log('Array 6', arr6);

// Concat...
const arr7 = arr1.concat();
console.log('Array 7', arr7);

// from...
const arr8 = Array.from(arr1);
console.log('Array 8', arr8);
