import { IMedia } from './models/IMedia.js';
import { IMovie } from './models/IMovie.js';
import { ResponseType } from './models/ResponseType.js';
import { listMovies, searchMovies } from './services/movies-services.js';
import {
  createMovieCard,
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

const initApp = async () => {
  let filter: string | null = '';

  if (document.referrer.includes('shows')) {
    localStorage.removeItem('filter');
  } else {
    filter = localStorage.getItem('filter');
  }

  if (filter) {
    loadMovies();
    document.querySelector<HTMLInputElement>('#searchInput')!.value = filter;
  } else {
    loadMovies();
  }
};

const loadMovies = async (page: number = 1) => {
  const filter = localStorage.getItem('filter');
  let response: ResponseType;

  if (filter) {
    response = await searchMovies(filter, page);
  } else {
    response = await listMovies(page);
  }

  displayMovies(response.results);
  updatePagination(response.totalPages, response.page);
};

const filterMovies = async () => {
  const filter: string =
    document.querySelector<HTMLInputElement>('#searchInput')!.value;

  localStorage.setItem('filter', filter);
  loadMovies();
};

const displayMovies = (movies: Array<IMedia>) => {
  const app = document.querySelector('#top-movies') as HTMLDivElement;
  app.innerHTML = '';

  if (movies.length === 0) {
    displayNotFoundMessage('Vi hittar ingen film med sökbegrepp:');
  } else {
    hideNotFoundMessage();
    for (let movie of movies) {
      app.appendChild(createMovieCard(movie));
    }
  }
};

const updatePagination = (pages: number, page: number) => {
  document.querySelector('#pageNo')!.innerHTML = page.toString();
  document.querySelector('#pages')!.innerHTML = pages.toString();
};

async function handleGotoFirstPage(): Promise<void> {
  await loadMovies(1);
}

async function handleGotoPrevPage(): Promise<void> {
  let page: number = +pageNumber!.innerHTML;
  page > 1 ? page-- : 1;
  await loadMovies(page);
}

async function handleGotoNextPage(): Promise<void> {
  const totalPages: number = +pages!.innerHTML;
  let page: number = +pageNumber!.innerHTML;

  page < totalPages ? page++ : 500;

  if (page > 500) {
    await loadMovies(500);
  } else {
    await loadMovies(page);
  }
}

async function handleGotoLastPage(): Promise<void> {
  if (+pages!.innerHTML < 501) {
    await loadMovies(+pages!.innerHTML);
  } else {
    await loadMovies(500);
  }
}

async function handleSearch(e: SubmitEvent) {
  e.preventDefault();
  await filterMovies();
}

document.addEventListener('DOMContentLoaded', initApp);
