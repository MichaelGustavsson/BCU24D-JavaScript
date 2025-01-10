/*********************************************************/
// Constructor Functions...
// En mall som beskriver hur ett objekt ska bli
// och bete sig på...
/*********************************************************/
function Movie(title, releaseYear) {
  // Skapa egenskaper som går att manipulera ifrån ett objekt...
  // Vårt tillstånd, vår information som lagras i varje objekt...
  this.movieTitle = title;
  this.releaseYear = releaseYear;
  this.length = '';
  this.director = '';

  // Beteende(Metoder)...
  this.play = function () {
    return `Filmen ${this.movieTitle} spelas just nu`;
  };
}

// Instantiera funktionen Movie...
// Skapa en kopia av funktionen och allt dess innehåll...
const uncharted = new Movie('Uncharted', 2021);
uncharted.length = '1tim 51min';
uncharted.director = 'Ruben Fleisher';

// console.log(uncharted);
// console.log(uncharted.play());

const batman = new Movie('Batman', 2005);
batman.length = '2tim 4min';
batman.director = 'Christopher Nolan';
// console.log(batman);
// console.log(batman.play());

const myDate = new Date();
// console.log(myDate);

// console.log(batman instanceof Movie);
// console.log(myDate instanceof Movie);

// Dynamiskt lägga till egenskaper...
batman.genre = 'Action';
uncharted.genre = 'Adventure';
uncharted.actors = [{ name: 'x' }, { name: 'y' }];

// console.log(batman);
// console.log(uncharted);

// Kontrollera om objektet har en viss egenskap...
// console.log(batman.hasOwnProperty('genre'));
// console.log(uncharted.hasOwnProperty('genre'));

// console.log('Batman har du egenskapen actors', batman.hasOwnProperty('actors'));
// console.log(
//   'Uncharted har du egenskapen actors',
//   uncharted.hasOwnProperty('actors')
// );

// Hämta alla egenskapers namn(key)
// console.log(Object.keys(uncharted));
// console.log(Object.keys(batman));
// Hämta alla egenskapers värde(value)
// console.log(Object.values(uncharted));
// console.log(Object.values(batman));
// console.log(Object.entries(uncharted));
// console.log(Object.entries(batman));

// Loopa igenom alla entries
// for (let [key, value] of Object.entries(uncharted)) {
//   if (typeof value !== 'function') {
//     console.log(`Egenskap: ${key} har värdet: ${value}`);
//   }
// }

console.log(uncharted);
console.log(batman);

delete uncharted.actors;
delete uncharted.genre;
delete uncharted.director;
console.log(uncharted);
console.log(batman);

// Dynamiskt lägga till metoder...
console.log(uncharted.play());
console.log(batman.play());

uncharted.pause = function () {
  return 'Filmen är nu pausad för att hämta kaffe...';
};
console.log(uncharted);

console.log(uncharted.pause());
// console.log(batman.pause());

delete uncharted.pause;
console.log(uncharted);
