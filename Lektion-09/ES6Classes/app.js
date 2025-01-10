/*****************************************/
// ES6 klasser...
/*****************************************/
class Movie {
  constructor(title, releaseYear) {
    // Egenskaper...
    this.movieTitle = title;
    this.releaseYear = releaseYear;
    this.length = '';
    this.director = '';
    // console.log('Nu kör konstruktorn');
  }
  // Skapa metoder...
  play() {
    return `Spelar upp filmen ${this.movieTitle}`;
  }
  pause() {
    return `Fika time ifrån filmen ${this.movieTitle}`;
  }
}

const batman = new Movie('Batman', 2005);

console.log(batman);
// Åtkomst till egenskapers värde
// Via punkt notation...
console.log(batman.movieTitle);
// Via indexer, anger namnet på egenskapen som värde...
console.log(batman['movieTitle']);

console.log(batman.play());
console.log(batman.pause());

// DON'T DO THIS!!!
// Movie.prototype.genre = '';
// Movie.prototype.stop = function () {
//   console.log('Stoppar uppspelning');
// };
// console.log(batman);
// batman.stop();
