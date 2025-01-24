import { listShows, searchShows } from './services/shows-services.js';
import { createDisplayCard, displayNotFoundMessage, hideNotFoundMessage, } from './utilities/dom.js';
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
const initApp = () => {
    let filter = '';
    if (document.referrer.includes('movie')) {
        localStorage.removeItem('filter');
    }
    else {
        filter = localStorage.getItem('filter');
    }
    if (filter) {
        loadShows();
        document.querySelector('#searchInput').value = filter;
    }
    else {
        loadShows();
    }
};
const loadShows = async (page = 1) => {
    const filter = localStorage.getItem('filter');
    let response;
    if (filter) {
        response = await searchShows(filter, page);
    }
    else {
        response = await listShows(page);
    }
    displayShows(response.results);
    updatePagination(response.totalPages, response.page);
};
const filterShows = async () => {
    const filter = document.querySelector('#searchInput').value;
    localStorage.setItem('filter', filter);
    loadShows();
};
const displayShows = (shows) => {
    const app = document.querySelector('#top-series');
    app.innerHTML = '';
    if (shows.length === 0) {
        displayNotFoundMessage('Vi hittar ingen TV-serie med sökbegrepp:');
    }
    else {
        hideNotFoundMessage();
        for (let show of shows) {
            app.appendChild(createDisplayCard(show, 'show-details.html'));
        }
    }
};
const updatePagination = (pages, page) => {
    document.querySelector('#pageNo').innerHTML = page.toString();
    document.querySelector('#pages').innerHTML = pages.toString();
};
async function handleGotoFirstPage() {
    await loadShows(1);
}
async function handleGotoPrevPage() {
    let page = +pageNumber.innerHTML;
    page > 1 ? page-- : 1;
    await loadShows(page);
}
async function handleGotoNextPage() {
    const totalPages = +pages.innerHTML;
    let page = +pageNumber.innerHTML;
    page < totalPages ? page++ : 500;
    if (page > 500) {
        await loadShows(500);
    }
    else {
        await loadShows(page);
    }
}
async function handleGotoLastPage() {
    if (+pages.innerHTML < 501) {
        await loadShows(+pages.innerHTML);
    }
    else {
        await loadShows(500);
    }
}
async function handleSearch(e) {
    e.preventDefault();
    await filterShows();
}
document.addEventListener('DOMContentLoaded', initApp);
