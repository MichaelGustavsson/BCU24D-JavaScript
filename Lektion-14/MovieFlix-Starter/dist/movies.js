import { listMovies, searchMovies } from './services/movies-services.js';
import { createMovieCard, displayNotFoundMessage, hideNotFoundMessage, } from './utilities/dom.js';
document
    .querySelector('#searchForm')
    .addEventListener('submit', handleSearch);
const initApp = async () => {
    let filter = '';
    if (document.referrer.includes('shows')) {
        localStorage.removeItem('filter');
    }
    else {
        filter = localStorage.getItem('filter');
    }
    if (filter) {
        searchMovies(filter).then((movies) => displayMovies(movies));
        document.querySelector('#searchInput').value = filter;
    }
    else {
        listMovies().then((movies) => displayMovies(movies));
    }
};
const filterMovies = async () => {
    const filter = document.querySelector('#searchInput').value;
    localStorage.setItem('filter', filter);
    const movies = await searchMovies(filter);
    displayMovies(movies);
};
const displayMovies = (movies) => {
    const app = document.querySelector('#top-movies');
    app.innerHTML = '';
    if (movies.length === 0) {
        displayNotFoundMessage('Vi hittar ingen film med sökbegrepp:');
    }
    else {
        hideNotFoundMessage();
        for (let movie of movies) {
            app.appendChild(createMovieCard(movie));
        }
    }
};
async function handleSearch(e) {
    e.preventDefault();
    await filterMovies();
}
document.addEventListener('DOMContentLoaded', initApp);
