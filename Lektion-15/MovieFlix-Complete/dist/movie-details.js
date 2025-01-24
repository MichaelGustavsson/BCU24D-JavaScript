import { findMovie } from './services/movies-services.js';
import { createDetailsDisplay, createOverlay } from './utilities/dom.js';
const initApp = () => {
    const id = location.search.split('=')[1];
    findMovie(id).then((movie) => displayMovie(movie));
};
const displayMovie = (movie) => {
    document.querySelector('#details')?.appendChild(createDetailsDisplay(movie));
    document
        .querySelector('#details')
        ?.appendChild(createOverlay(movie.background));
};
const displayError = () => { };
document.addEventListener('DOMContentLoaded', initApp);
