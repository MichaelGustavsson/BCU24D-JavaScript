import { IMedia } from '../models/IMedia.js';
import { IMediaDetails } from '../models/IMediaDetails.js';

export const createOverlay = (backdrop_path: string): HTMLDivElement => {
  const overlayDiv = document.createElement('div');

  overlayDiv.style.backgroundImage = backdrop_path
    ? `url(https://image.tmdb.org/t/p/original/${backdrop_path})`
    : '';
  overlayDiv.style.backgroundSize = 'cover';
  overlayDiv.style.backgroundPosition = 'center';
  overlayDiv.style.backgroundRepeat = 'no-repeat';
  overlayDiv.style.height = '100vh';
  overlayDiv.style.width = '100vw';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.zIndex = '-1';
  overlayDiv.style.opacity = '0.3';

  return overlayDiv;
};

export const createDisplayCard = (
  movie: IMedia,
  href: string
): HTMLDivElement => {
  const div = document.createElement('div');
  const imageAnchor = document.createElement('a');
  const image = document.createElement('img');
  const cardBody = document.createElement('div');
  const heading = document.createElement('h5');
  const p = document.createElement('p');
  const small = document.createElement('small');

  div.classList.add('card');
  imageAnchor.href = `./${href}?id=${movie.id}`;
  image.alt = `${movie.title}`;
  image.src = movie.poster
    ? `https://image.tmdb.org/t/p/w500${movie.poster}`
    : `../../dist/assets/images/No-Image.jpg`;

  imageAnchor.appendChild(image);
  div.appendChild(imageAnchor);

  cardBody.classList.add('card-body');
  heading.classList.add('card-title');
  heading.textContent = movie.title;

  p.classList.add('card-text');
  p.classList.add('text-muted');
  small.textContent = `Premiär datum: ${movie.releaseDate}`;
  p.appendChild(small);

  cardBody.appendChild(heading);
  cardBody.appendChild(p);

  div.appendChild(cardBody);

  return div;
};

export const createDetailsDisplay = (movie: IMediaDetails): HTMLDivElement => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="details-top">
      <div>
        ${
          movie.poster
            ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster}" alt="${movie.title}"/>`
            : `<img src="../dist/assets/images/No-Image.jpg" alt="${movie.title}"`
        }
      </div>
      <div class="info">
        <h2>${movie.title}</h2>
        <p>
          <i class="fas fa-star rating"></i>
          ${movie.rating.toFixed(1)} / 10
        </p>
        <p class="text-muted">Premiär: ${movie.releaseDate}</p>
        <p>${movie.overview}</p>
        <ul>
          ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
        </ul>
        <p class="text-muted">Längd ${Math.floor(movie.duration / 60)} tim ${
    movie.duration % 60
  } min</p>
      </div>
    </div>
  `;

  return div;
};

export const displayNotFoundMessage = (message: string) => {
  const messageContainer = document.querySelector<HTMLDivElement>('#message');
  const header = document.querySelector('h2') as HTMLHeadElement;
  const filterInputValue =
    document.querySelector<HTMLInputElement>('#searchInput')!.value;

  messageContainer!.innerHTML = `<p>${message} ${filterInputValue}</p>`;
  messageContainer!.style.display = 'block';
  messageContainer!.style.paddingTop = '1rem';
  messageContainer!.style.paddingBottom = '1rem';
  header.style.display = 'none';
};

export const hideNotFoundMessage = () => {
  const messageContainer = document.querySelector<HTMLDivElement>('#message');
  const header = document.querySelector('h2') as HTMLHeadElement;

  messageContainer!.style.display = 'none';
  header.style.display = 'block';
};
