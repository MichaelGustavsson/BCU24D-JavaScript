// Här hämtas referense till html element...
document
    .querySelector('#searchForm')
    .addEventListener('submit', handleSearch);
const initApp = () => {
    listShows();
};
const listShows = async () => {
    const key = 'c225640b9109317dc84c9f661f0ca0ba';
    const url = `https://api.themoviedb.org/3/discover/tv?page=1&api_key=${key}`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const body = await response.json();
            const shows = body.results;
            displayShows(shows);
        }
    }
    catch (error) {
        console.log(error);
    }
};
const searchShows = async () => {
    const filter = document.querySelector('#searchInput').value;
    if (filter) {
        const key = 'c225640b9109317dc84c9f661f0ca0ba';
        const url = `https://api.themoviedb.org/3/search/tv?query=${filter}&api_key=${key}`;
        try {
            const response = await fetch(url);
            if (response.ok) {
                const body = await response.json();
                const movies = body.results;
                displayShows(movies);
            }
            else {
                throw new Error('Det gick galet!');
            }
        }
        catch (error) {
            console.log(error);
            listShows();
        }
    }
    else {
        listShows();
    }
};
const displayShows = (shows) => {
    const app = document.querySelector('#top-series');
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
async function handleSearch(e) {
    e.preventDefault();
    await searchShows();
}
document.addEventListener('DOMContentLoaded', initApp);
export {};
