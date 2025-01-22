import { IMovieDetail } from './models/IMovieDetail.js';
import { findMovie } from './services/movies-services.js';
import { createOverlay } from './utilities/dom.js';

const initApp = () => {
  const id = location.search.split('=')[1];
  findMovie(id).then((movie) => displayMovie(movie));
};

const displayMovie = (movie: IMovieDetail) => {
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
        <ul>
          ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
        </ul>
        <p class="text-muted">Längd ${Math.floor(movie.runtime / 60)} tim ${
    movie.runtime % 60
  } min</p>
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
