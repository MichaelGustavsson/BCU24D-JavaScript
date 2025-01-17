import { IMovie } from './models/IMovie.js';

// Här hämtas referense till html element...
document
  .querySelector<HTMLFormElement>('#searchForm')!
  .addEventListener('submit', handleSearch);

const initApp = () => {
  listMovies();
};

const listMovies = async (): Promise<void> => {
  const key = 'c225640b9109317dc84c9f661f0ca0ba';
  const url = `https://api.themoviedb.org/3/discover/movie?page=1&api_key=${key}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const body = await response.json(); //json() hämtar hela body paketet i http response paketet
      const movies = body.results as IMovie[];
      displayMovies(movies);
    } else {
      throw new Error('Det gick galet!');
    }
  } catch (error) {
    console.log(error);
  }
};

const searchMovies = async (): Promise<void> => {
  const filter: string =
    document.querySelector<HTMLInputElement>('#searchInput')!.value;

  if (filter) {
    const key = 'c225640b9109317dc84c9f661f0ca0ba';
    const url = `https://api.themoviedb.org/3/search/movie?query=${filter}&api_key=${key}`;

    try {
      const response = await fetch(url);

      if (response.ok) {
        const body = await response.json();
        const movies = body.results as IMovie[];
        displayMovies(movies);
      } else {
        throw new Error('Det gick galet!');
      }
    } catch (error) {
      console.log(error);
      listMovies();
    }
  } else {
    listMovies();
  }
};

const displayMovies = (movies: Array<IMovie>) => {
  // Hämta en referens till placeholdern i html filen...
  const app = document.querySelector('#top-movies') as HTMLDivElement;
  app.innerHTML = '';

  for (let movie of movies) {
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
    imageAnchor.href = `./movie-details.html?id=${movie.id}`;
    image.alt = `${movie.title}`;
    image.src = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : `../dist/assets/images/No-Image.jpg`;

    // Sätt ihop html element i rätt ordning...
    // Länk och bilden...
    imageAnchor.appendChild(image);
    div.appendChild(imageAnchor);

    // cardBody och heading för att sätta rubrik på filmen...
    cardBody.classList.add('card-body');
    heading.classList.add('card-title');
    heading.textContent = movie.title;

    // Hantera information för premiär datum...
    p.classList.add('card-text');
    p.classList.add('text-muted');
    small.textContent = `Premiär datum: ${movie.release_date}`;
    p.appendChild(small);

    cardBody.appendChild(heading);
    cardBody.appendChild(p);

    div.appendChild(cardBody);

    app.appendChild(div);
  }
};

async function handleSearch(e: SubmitEvent) {
  e.preventDefault();
  await searchMovies();
}

document.addEventListener('DOMContentLoaded', initApp);
