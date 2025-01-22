import { IMovie } from './models/IMovie.js';
import { listMovies, searchMovies } from './services/movies-services.js';
import { createMovieCard } from './utilities/dom.js';

document
  .querySelector<HTMLFormElement>('#searchForm')!
  .addEventListener('submit', handleSearch);

const initApp = async () => {
  listMovies().then((movies) => displayMovies(movies));
};

const filterMovies = async () => {
  const filter: string =
    document.querySelector<HTMLInputElement>('#searchInput')!.value;

  const movies = await searchMovies(filter);

  displayMovies(movies);
};

const displayMovies = (movies: Array<IMovie>) => {
  const app = document.querySelector('#top-movies') as HTMLDivElement;
  app.innerHTML = '';

  for (let movie of movies) {
    // const div = createMovieCard(movie);
    // app.appendChild(div);
    app.appendChild(createMovieCard(movie));
  }
};

async function handleSearch(e: SubmitEvent) {
  e.preventDefault();
  await filterMovies();
}

document.addEventListener('DOMContentLoaded', initApp);
