import { listShows, searchShows } from './services/shows-services.js';
import { createShowCard, displayNotFoundMessage, hideNotFoundMessage, } from './utilities/dom.js';
document
    .querySelector('#searchForm')
    .addEventListener('submit', handleSearch);
const initApp = () => {
    let filter = '';
    if (document.referrer.includes('movie')) {
        localStorage.removeItem('filter');
    }
    else {
        filter = localStorage.getItem('filter');
    }
    if (filter) {
        searchShows(filter).then((shows) => displayShows(shows));
        document.querySelector('#searchInput').value = filter;
    }
    else {
        listShows().then((shows) => displayShows(shows));
    }
};
const filterShows = async () => {
    const filter = document.querySelector('#searchInput').value;
    localStorage.setItem('filter', filter);
    const shows = await searchShows(filter);
    displayShows(shows);
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
            app.appendChild(createShowCard(show));
        }
    }
};
async function handleSearch(e) {
    e.preventDefault();
    await filterShows();
}
document.addEventListener('DOMContentLoaded', initApp);
