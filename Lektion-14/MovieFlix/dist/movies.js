import { listMovies, searchMovies } from './services/movies-services.js';
import { createMovieCard, displayNotFoundMessage, hideNotFoundMessage, } from './utilities/dom.js';
document
    .querySelector('#searchForm')
    .addEventListener('submit', handleSearch);
document
    .querySelector('#gotoFirst')
    .addEventListener('click', handleGotoFirstPage);
document
    .querySelector('#gotoPrevious')
    .addEventListener('click', handleGotoPrevPage);
document
    .querySelector('#gotoNext')
    .addEventListener('click', handleGotoNextPage);
document
    .querySelector('#gotoLast')
    .addEventListener('click', handleGotoLastPage);
const pageNumber = document.querySelector('#pageNo');
const pages = document.querySelector('#pages');
const initApp = async () => {
    let filter = '';
    if (document.referrer.includes('shows')) {
        localStorage.removeItem('filter');
    }
    else {
        filter = localStorage.getItem('filter');
    }
    if (filter) {
        searchMovies(filter).then((response) => {
            displayMovies(response.results);
            updatePagination(response.totalPages, response.page);
        });
        document.querySelector('#searchInput').value = filter;
    }
    else {
        listMovies().then((response) => {
            displayMovies(response.results);
            updatePagination(response.totalPages, response.page);
        });
    }
};
const filterMovies = async () => {
    const filter = document.querySelector('#searchInput').value;
    localStorage.setItem('filter', filter);
    const response = await searchMovies(filter);
    displayMovies(response.results);
    updatePagination(response.totalPages, response.page);
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
const updatePagination = (pages, page) => {
    document.querySelector('#pageNo').innerHTML = page.toString();
    document.querySelector('#pages').innerHTML = pages.toString();
};
async function handleGotoFirstPage() {
    console.log('Går till första sidan');
}
async function handleGotoPrevPage() {
    console.log('Går till föregående sida');
}
async function handleGotoNextPage() {
    console.log('Går till nästa sida');
}
async function handleGotoLastPage() {
    console.log('Går till sista sidan');
}
async function handleSearch(e) {
    e.preventDefault();
    await filterMovies();
}
document.addEventListener('DOMContentLoaded', initApp);
