import { movies } from './data/movies.js';
import { IMovie } from './models/IMovie.js';

const initApp = () => {
  findMovie();
};

const findMovie = (): void => {
  const id = location.search.split('=')[1];
  const movie = movies.find((m) => m.id === +id);

  console.log(movie);
  if (movie) {
    displayMovie(movie);
  } else {
    displayError();
  }
};

const displayMovie = (movie: IMovie) => {};

const displayError = () => {};

document.addEventListener('DOMContentLoaded', initApp);
