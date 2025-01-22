export const createOverlay = (backdrop_path) => {
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
export const createMovieCard = (movie) => {
    const div = document.createElement('div');
    const imageAnchor = document.createElement('a');
    const image = document.createElement('img');
    const cardBody = document.createElement('div');
    const heading = document.createElement('h5');
    const p = document.createElement('p');
    const small = document.createElement('small');
    div.classList.add('card');
    imageAnchor.href = `./movie-details.html?id=${movie.id}`;
    image.alt = `${movie.title}`;
    image.src = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : `../../dist/assets/images/No-Image.jpg`;
    imageAnchor.appendChild(image);
    div.appendChild(imageAnchor);
    cardBody.classList.add('card-body');
    heading.classList.add('card-title');
    heading.textContent = movie.title;
    p.classList.add('card-text');
    p.classList.add('text-muted');
    small.textContent = `Premiär datum: ${movie.release_date}`;
    p.appendChild(small);
    cardBody.appendChild(heading);
    cardBody.appendChild(p);
    div.appendChild(cardBody);
    return div;
};
export const createMovieDetailsDisplay = (movie) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="details-top">
      <div>
        ${movie.poster_path
        ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>`
        : `<img src="../dist/assets/images/No-Image.jpg" alt="${movie.title}"`}
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
        <p class="text-muted">Längd ${Math.floor(movie.runtime / 60)} tim ${movie.runtime % 60} min</p>
      </div>
    </div>
  `;
    return div;
};
