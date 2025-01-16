import { movies } from './data/movies.js';
const initApp = () => {
    listMovies();
};
const listMovies = () => {
    displayMovies(movies);
};
const displayMovies = (movies) => {
    // Hämta en referens till placeholdern i html filen...
    const app = document.querySelector('#top-movies');
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
document.addEventListener('DOMContentLoaded', initApp);
