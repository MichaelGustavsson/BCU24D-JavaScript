import { listMovies, searchMovies } from './services/movies-services.js';
import { createMovieCard } from './utilities/dom.js';
document
    .querySelector('#searchForm')
    .addEventListener('submit', handleSearch);
const initApp = async () => {
    listMovies().then((movies) => displayMovies(movies));
};
const filterMovies = async () => {
    const filter = document.querySelector('#searchInput').value;
    const movies = await searchMovies(filter);
    displayMovies(movies);
};
const displayMovies = (movies) => {
    const app = document.querySelector('#top-movies');
    app.innerHTML = '';
    for (let movie of movies) {
        // const div = createMovieCard(movie);
        // app.appendChild(div);
        app.appendChild(createMovieCard(movie));
    }
};
async function handleSearch(e) {
    e.preventDefault();
    await filterMovies();
}
document.addEventListener('DOMContentLoaded', initApp);
