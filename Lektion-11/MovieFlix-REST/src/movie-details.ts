import { IMovie } from './models/IMovie.js';
import { createOverlay } from './utilities/dom.js';

const initApp = () => {
  findMovie();
};

const findMovie = async (): Promise<void> => {
  let url = 'http://localhost:3000/movies/';
  const id = location.search.split('=')[1];

  url += id;

  const result = await fetch(url);

  if (result.ok) {
    const movie = (await result.json()) as IMovie;
    displayMovie(movie);
  }
};

const displayMovie = (movie: IMovie) => {
  const div = document.createElement('div');

  div.innerHTML = `
    <div class="details-top">
      <div>
        ${
          movie.poster_path
            ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>`
            : `<img src="../dist/assets/images/No-Image.jpg" alt="${movie.title}"`
        }
      </div>
      <div class="info">
        <h2>${movie.title}</h2>
        <p>
          <i class="fas fa-star rating"></i>
          ${movie.vote_average.toFixed(1)} / 10
        </p>
        <p class="text-muted">Premiär: ${movie.release_date}</p>
        <p>${movie.overview}</p>
      </div>
    </div>
  `;

  document.querySelector('#details')?.appendChild(div);
  document
    .querySelector('#details')
    ?.appendChild(createOverlay(movie.backdrop_path));
};

const displayError = () => {};

document.addEventListener('DOMContentLoaded', initApp);
