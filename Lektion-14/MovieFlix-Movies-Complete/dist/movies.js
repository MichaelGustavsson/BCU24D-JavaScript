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
        loadMovies();
        document.querySelector('#searchInput').value = filter;
    }
    else {
        loadMovies();
    }
};
const loadMovies = async (page = 1) => {
    const filter = localStorage.getItem('filter');
    let response;
    if (filter) {
        response = await searchMovies(filter, page);
    }
    else {
        response = await listMovies(page);
    }
    displayMovies(response.results);
    updatePagination(response.totalPages, response.page);
};
const filterMovies = async () => {
    const filter = document.querySelector('#searchInput').value;
    localStorage.setItem('filter', filter);
    loadMovies();
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
    await loadMovies(1);
}
async function handleGotoPrevPage() {
    let page = +pageNumber.innerHTML;
    page > 1 ? page-- : 1;
    await loadMovies(page);
}
async function handleGotoNextPage() {
    const totalPages = +pages.innerHTML;
    let page = +pageNumber.innerHTML;
    page < totalPages ? page++ : 500;
    if (page > 500) {
        await loadMovies(500);
    }
    else {
        await loadMovies(page);
    }
}
async function handleGotoLastPage() {
    if (+pages.innerHTML < 501) {
        await loadMovies(+pages.innerHTML);
    }
    else {
        await loadMovies(500);
    }
}
async function handleSearch(e) {
    e.preventDefault();
    await filterMovies();
}
document.addEventListener('DOMContentLoaded', initApp);
