/************************************************/
// PROTOTYPING
/************************************************/
function Movie(title, releaseYear) {
  // Skapa egenskaper som går att manipulera ifrån ett objekt...
  // Vårt tillstånd, vår information som lagras i varje objekt...
  this.movieTitle = title;
  this.releaseYear = releaseYear;
  this.length = '';
  this.director = '';
}

// BEST PRACTICE!!!
// Jag vill utöka Movie(Funktionen) med en ny metod...
// Movie.prototype.play = function () {
//   console.log(`Spelar upp filmen ${this.movieTitle}`);
// };

// Movie.prototype.genre = '';

// Movie.prototype.pause = function () {
//   console.log(`Fika time ${this.movieTitle}`);
// };

// const uncharted = new Movie('uncharted', 2021);
// uncharted.genre = 'Adventure';
// console.log(uncharted);
// uncharted.play();
// uncharted.pause();

// const batman = new Movie('Batman', 2005);
// batman.genre = 'Action';
// console.log(batman);
// batman.play();
// batman.pause();

/************************************************/
// Alternativt sätt att göra ovanstående...
/************************************************/
// BAD PRACTICE!!!
const moviePrototype = {
  play: function () {
    console.log(`Spelar upp filmen ${this.movieTitle}`);
  },
  pause: function () {
    console.log(`Fika time ${this.movieTitle}`);
  },
};

// Factory metod...
function createMovie(title, releaseYear) {
  return Object.create(moviePrototype, {
    movieTitle: {
      value: title,
    },
    releaseYear: {
      value: releaseYear,
    },
  });
}

const uncharted = createMovie('Uncharted', 2021);
console.log(uncharted);
uncharted.play();
uncharted.pause();
