import { movies } from './data/movies.js';
const initApp = () => {
    findMovie();
};
const findMovie = () => {
    const id = location.search.split('=')[1];
    const movie = movies.find((m) => m.id === +id);
    console.log(movie);
    if (movie) {
        displayMovie(movie);
    }
    else {
        displayError();
    }
};
const displayMovie = (movie) => { };
const displayError = () => { };
document.addEventListener('DOMContentLoaded', initApp);
