import { movies } from './data/movies.js';
import { IMovie } from './models/IMovie.js';

const initApp = () => {
  listMovies();
};

const listMovies = (): void => {
  displayMovies(movies);
};

const displayMovies = (movies: Array<IMovie>) => {
  console.log(movies);
};

document.addEventListener('DOMContentLoaded', initApp);
