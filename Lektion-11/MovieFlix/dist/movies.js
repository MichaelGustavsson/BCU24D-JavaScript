import { movies } from './data/movies.js';
const initApp = () => {
    listMovies();
};
const listMovies = () => {
    displayMovies(movies);
};
const displayMovies = (movies) => {
    console.log(movies);
};
document.addEventListener('DOMContentLoaded', initApp);
