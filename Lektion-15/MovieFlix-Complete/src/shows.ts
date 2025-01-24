import { IMedia } from './models/IMedia';
import { ResponseType } from './models/ResponseType';
import { listShows, searchShows } from './services/shows-services.js';
import {
  createDisplayCard,
  displayNotFoundMessage,
  hideNotFoundMessage,
} from './utilities/dom.js';

document
  .querySelector<HTMLFormElement>('#searchForm')!
  .addEventListener('submit', handleSearch);

document
  .querySelector<HTMLSpanElement>('#gotoFirst')!
  .addEventListener('click', handleGotoFirstPage);

document
  .querySelector<HTMLSpanElement>('#gotoPrevious')!
  .addEventListener('click', handleGotoPrevPage);

document
  .querySelector<HTMLSpanElement>('#gotoNext')!
  .addEventListener('click', handleGotoNextPage);

document
  .querySelector<HTMLSpanElement>('#gotoLast')!
  .addEventListener('click', handleGotoLastPage);

const pageNumber = document.querySelector<HTMLSpanElement>('#pageNo');
const pages = document.querySelector<HTMLSpanElement>('#pages');

const initApp = () => {
  let filter: string | null = '';

  if (document.referrer.includes('movie')) {
    localStorage.removeItem('filter');
  } else {
    filter = localStorage.getItem('filter');
  }

  if (filter) {
    loadShows();
    document.querySelector<HTMLInputElement>('#searchInput')!.value = filter;
  } else {
    loadShows();
  }
};

const loadShows = async (page: number = 1) => {
  const filter = localStorage.getItem('filter');
  let response: ResponseType;

  if (filter) {
    response = await searchShows(filter, page);
  } else {
    response = await listShows(page);
  }

  displayShows(response.results);
  updatePagination(response.totalPages, response.page);
};

const filterShows = async () => {
  const filter: string =
    document.querySelector<HTMLInputElement>('#searchInput')!.value;

  localStorage.setItem('filter', filter);
  loadShows();
};

const displayShows = (shows: Array<IMedia>) => {
  const app = document.querySelector('#top-series') as HTMLDivElement;

  app.innerHTML = '';

  if (shows.length === 0) {
    displayNotFoundMessage('Vi hittar ingen TV-serie med sökbegrepp:');
  } else {
    hideNotFoundMessage();
    for (let show of shows) {
      app.appendChild(createDisplayCard(show, 'show-details.html'));
    }
  }
};

const updatePagination = (pages: number, page: number) => {
  document.querySelector('#pageNo')!.innerHTML = page.toString();
  document.querySelector('#pages')!.innerHTML = pages.toString();
};

async function handleGotoFirstPage(): Promise<void> {
  await loadShows(1);
}

async function handleGotoPrevPage(): Promise<void> {
  let page: number = +pageNumber!.innerHTML;
  page > 1 ? page-- : 1;
  await loadShows(page);
}

async function handleGotoNextPage(): Promise<void> {
  const totalPages: number = +pages!.innerHTML;
  let page: number = +pageNumber!.innerHTML;

  page < totalPages ? page++ : 500;

  if (page > 500) {
    await loadShows(500);
  } else {
    await loadShows(page);
  }
}

async function handleGotoLastPage(): Promise<void> {
  if (+pages!.innerHTML < 501) {
    await loadShows(+pages!.innerHTML);
  } else {
    await loadShows(500);
  }
}

async function handleSearch(e: SubmitEvent) {
  e.preventDefault();
  await filterShows();
}

document.addEventListener('DOMContentLoaded', initApp);
