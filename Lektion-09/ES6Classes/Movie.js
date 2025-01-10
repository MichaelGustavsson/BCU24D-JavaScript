export default class Movie {
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
