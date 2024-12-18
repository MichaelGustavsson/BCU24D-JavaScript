/**********************************************************/
// Funktioner i JavaScript...
/**********************************************************/
/* 
  Funktioner/metoder är sätt att gruppera kod/logik så att
  vi kan återanvända samma kod någon annanstans...

  Vi har 3 olika sätt att skapa funktioner på...
  1.  Function Declarations
  2.  Function Expression
  3.  Arrow Functions
*/

/* 
  Function Declarations
*/
// Skapar en namngiven funktion...
function writeToLog() {
  console.log('Detta är ett meddelande ifrån funktionen writeToLog');
}

writeToLog();
// writeToLog();
// writeToLog();
// writeToLog();
// writeToLog();
// writeToLog();
// writeToLog();
// writeToLog();
// writeToLog();

function writeToLogWithArguments(message) {
  console.log(message);
}

writeToLogWithArguments('Detta är ett meddelande via funktioners argument');
writeToLogWithArguments('Titta här!!!');

// Detta fungerar tack vare hoisting i JavaScript...
const result = sayHello('Kalle');
console.log(result);

// Funktioner som returnerar data...
function sayHello(name) {
  return 'Hej på dig ' + name;
}

console.log(sayHello('Jihi'));
console.log(sayHello('Alexander'));

/* 
  Function Expressions...
*/
// Anonyma funktioner...
const addMovie = function (title) {
  return 'Sparar filmen ' + title;
};

const addedMovie = addMovie('Juläventyr');
console.log(addedMovie);

/* 
  Arrow Functions...
  Dök i version ES6...
*/

const movies = ['Avatar', 'Batman', 'The Bucket List'];

const listMovies = () => {
  return movies;
};
// const listMovies = () => movies;
console.log(listMovies());

const getMovie = (index) => {
  return movies[index];
};

console.log(getMovie(1));
