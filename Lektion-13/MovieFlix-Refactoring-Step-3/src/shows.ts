import { IShow } from './models/IShow';
import { listShows, searchShows } from './services/shows-services.js';

// Här hämtas referense till html element...
document
  .querySelector<HTMLFormElement>('#searchForm')!
  .addEventListener('submit', handleSearch);

const initApp = () => {
  listShows().then((shows) => displayShows(shows));
};

const filterShows = async () => {
  const filter: string =
    document.querySelector<HTMLInputElement>('#searchInput')!.value;

  const shows = await searchShows(filter);
  displayShows(shows);
};

const displayShows = (shows: Array<IShow>) => {
  const app = document.querySelector('#top-series') as HTMLDivElement;
  app.innerHTML = '';

  for (let show of shows) {
    // Skapa alla element som vi behöver för att skapa utseendet...
    const div = document.createElement('div');
    const imageAnchor = document.createElement('a');
    const image = document.createElement('img');
    const cardBody = document.createElement('div');
    const heading = document.createElement('h5');
    const p = document.createElement('p');
    const small = document.createElement('small');

    // Sätta klasser och data på elementen...
    div.classList.add('card');
    imageAnchor.href = `./show-details.html?id=${show.id}`;
    image.alt = `${show.name}`;
    image.src = show.poster_path
      ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
      : `../../dist/assets/images/No-Image.jpg`;

    // Sätt ihop html element i rätt ordning...
    // Länk och bilden...
    imageAnchor.appendChild(image);
    div.appendChild(imageAnchor);

    // cardBody och heading för att sätta rubrik på filmen...
    cardBody.classList.add('card-body');
    heading.classList.add('card-title');
    heading.textContent = show.name;

    // Hantera information för premiär datum...
    p.classList.add('card-text');
    p.classList.add('text-muted');
    small.textContent = `Premiär datum: ${show.first_air_date}`;
    p.appendChild(small);

    cardBody.appendChild(heading);
    cardBody.appendChild(p);

    div.appendChild(cardBody);

    app.appendChild(div);
  }
};

async function handleSearch(e: SubmitEvent) {
  e.preventDefault();
  await filterShows();
}

document.addEventListener('DOMContentLoaded', initApp);
