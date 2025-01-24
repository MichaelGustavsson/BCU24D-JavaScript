import { findMovie } from './services/movies-services.js';
import { createMovieDetailsDisplay, createOverlay } from './utilities/dom.js';
const initApp = () => {
    const id = location.search.split('=')[1];
    findMovie(id).then((movie) => displayMovie(movie));
};
const displayMovie = (movie) => {
    document
        .querySelector('#details')
        ?.appendChild(createMovieDetailsDisplay(movie));
    document
        .querySelector('#details')
        ?.appendChild(createOverlay(movie.backdrop_path));
};
const displayError = () => { };
document.addEventListener('DOMContentLoaded', initApp);
