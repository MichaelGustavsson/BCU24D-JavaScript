/*******************************************************/
//    Array.find()
/*******************************************************/
import { movies } from './movies.js';
const numberInput = document.querySelector('#criteria');
const button = document.querySelector('button');
const resultDisplay = document.querySelectorAll('div');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Variant 1.
let found = numbers.find(function (number) {
  return number === 8;
});

// console.log('Sökt nummer', found);

// Variant 2.
found = numbers.find((number) => {
  return number === 5;
});
// console.log('Sökt nummer', found);

found = numbers.find((number) => number === 3);
// console.log('Sökt nummer', found);

// Låt oss sy ihop detta som en dynamisk funktion
// Som letar efter ett numeriskt värde som vi hämtar in
// ifrån en webbsida...
const findNumber = (criteria) => {
  const hit = numbers.find((number) => number === criteria);
  return hit;
};

const handleButtonClick = () => {
  const value = numberInput.value;
  const result = findNumber(+value);
  // const result = findNumber(parseInt(value));
  resultDisplay[2].innerText = result ? result : 'Sökt värde fanns ej!';
  console.log();
};

button.addEventListener('click', handleButtonClick);

// Ett mer verklighets troget exempel...
// Nu använder vi movies.js...
console.log(movies);

let movie = movies.find((movie) => movie.id === 565770);
console.log(movie);

movie = movies.find((movie) => movie.title.startsWith('Talk'));
console.log(movie);

movie = movies.find((movie) => movie.title.endsWith('X'));
console.log(movie);

movie = movies.filter((movie) => movie.language === 'is');
console.log(movie);

movie = movies.filter((movie) => movie.overview.includes('djärvt'));
console.log(movie);
