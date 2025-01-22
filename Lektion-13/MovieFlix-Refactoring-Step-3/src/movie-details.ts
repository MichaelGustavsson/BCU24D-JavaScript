import { IMovieDetail } from './models/IMovieDetail.js';
import { findMovie } from './services/movies-services.js';
import { createMovieDetailsDisplay, createOverlay } from './utilities/dom.js';

const initApp = () => {
  const id = location.search.split('=')[1];
  findMovie(id).then((movie) => displayMovie(movie));
};

const displayMovie = (movie: IMovieDetail) => {
  const div = document.createElement('div');
  div.appendChild(createMovieDetailsDisplay(movie));
  document.querySelector('#details')?.appendChild(div);
  document
    .querySelector('#details')
    ?.appendChild(createOverlay(movie.backdrop_path));
};

const displayError = () => {};

document.addEventListener('DOMContentLoaded', initApp);
