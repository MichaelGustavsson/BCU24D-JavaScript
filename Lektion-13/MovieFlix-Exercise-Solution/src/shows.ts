import { IShow } from './models/IShow';
import { listShows, searchShows } from './services/shows-services.js';
import {
  createShowCard,
  displayNotFoundMessage,
  hideNotFoundMessage,
} from './utilities/dom.js';

document
  .querySelector<HTMLFormElement>('#searchForm')!
  .addEventListener('submit', handleSearch);

const initApp = () => {
  let filter: string | null = '';

  if (document.referrer.includes('movie')) {
    localStorage.removeItem('filter');
  } else {
    filter = localStorage.getItem('filter');
  }

  if (filter) {
    searchShows(filter).then((shows) => displayShows(shows));
    document.querySelector<HTMLInputElement>('#searchInput')!.value = filter;
  } else {
    listShows().then((shows) => displayShows(shows));
  }
};

const filterShows = async () => {
  const filter: string =
    document.querySelector<HTMLInputElement>('#searchInput')!.value;

  localStorage.setItem('filter', filter);

  const shows = await searchShows(filter);
  displayShows(shows);
};

const displayShows = (shows: Array<IShow>) => {
  const app = document.querySelector('#top-series') as HTMLDivElement;

  app.innerHTML = '';

  if (shows.length === 0) {
    displayNotFoundMessage('Vi hittar ingen TV-serie med sökbegrepp:');
  } else {
    hideNotFoundMessage();
    for (let show of shows) {
      app.appendChild(createShowCard(show));
    }
  }
};

async function handleSearch(e: SubmitEvent) {
  e.preventDefault();
  await filterShows();
}

document.addEventListener('DOMContentLoaded', initApp);
