import { IShowDetail } from './models/IShowDetail.js';
import { findShow } from './services/shows-services.js';
import { createOverlay } from './utilities/dom.js';

const initApp = () => {
  const id = location.search.split('=')[1];
  findShow(id).then((show) => displayShow(show));
  ``;
};

const displayShow = (show: IShowDetail) => {
  const div = document.createElement('div');

  div.innerHTML = `
    <div class="details-top">
      <div>
        ${
          show.poster_path
            ? `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}"/>`
            : `<img src="../../dist/assets/images/No-Image.jpg" alt="${show.name}"`
        }
      </div>
      <div class="info">
        <h2>${show.name}</h2>
        <p>
          <i class="fas fa-star rating"></i>
          ${show.vote_average.toFixed(1)} / 10
        </p>
        <p class="text-muted">Premiär: ${show.first_air_date}</p>
        <p>${show.overview}</p>
        <ul>
          ${show.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  document.querySelector('#details')?.appendChild(div);
  document
    .querySelector('#details')
    ?.appendChild(createOverlay(show.backdrop_path));
};

document.addEventListener('DOMContentLoaded', initApp);
