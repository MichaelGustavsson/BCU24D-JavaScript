import Movie from './Movie.js';

// Ärver ifrån Movie klassen...
// MyMovie = barnklass, härled(derived)klasse
// Movie = Basklass, Förälderklass, super klassen
class MyMovie extends Movie {
  constructor(title, releaseYear, genre) {
    super(title, releaseYear);
    this.genre = genre;
  }

  stop() {
    console.log(`Stannar filmen ${this.movieTitle}`);
  }

  // Åsidosätter Movie klassens play metod med vår egen...
  play() {
    return 'Detta gör jag bättre';
  }
}

class SuperMovie extends MyMovie {
  constructor(title, releaseYear, genre) {
    super(title, releaseYear, genre);
  }

  // Åsidosätter MyMovie klassens play metod med vår egen...
  play() {
    return 'Detta gör jag super mycket bättre';
  }
}

const avatar = new MyMovie('Avatar', 2009, 'Adventure');
avatar.director = 'James Cameron';
avatar.length = '2tim 40min';

console.log(avatar);
console.log(avatar.play());

const batman = new SuperMovie('Batman', 2005, 'Action');
console.log(batman);
console.log(batman.play());
