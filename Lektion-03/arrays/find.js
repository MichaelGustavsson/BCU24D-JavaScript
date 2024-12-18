/***************************************/
// Array.find()
/***************************************/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// find metoden tar ett argument(predicate) = en funktion
// som vi använder för att söka efter något i listan
// och find returnerar resultat om det finns något...

// Variant 1.
// const found = numbers.find(function (number) {
//   return number === 11;
// });
// console.log(found);

// Variant 2.
// Mest populär...
// const found = numbers.find((number) => number === 5);

// const found1 = numbers.find((number) => {
//   number === 5;
// });

// console.log(found);

// const actors = ['Bruce', 'Julia', 'Chris', 'Paul'];
// const actor = actors.find((actor) => actor === 'Paul');

// console.log(actor);

/*******************************************************/
// Använder movies.js
/*******************************************************/
console.log(movies);

// Sök på id...
let movie = movies.find((movie) => movie.id === 980489);
movie = movies.find((movie) => movie.title.startsWith('Fast'));
movie = movies.find((movie) => movie.language === 'is');
movie = movies.find((movie) =>
  movie.overview.toLowerCase().startsWith('jonas')
);

console.log(movie);
