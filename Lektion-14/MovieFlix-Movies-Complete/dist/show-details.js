import { findShow } from './services/shows-services.js';
import { createOverlay, createShowDetailsDisplay } from './utilities/dom.js';
const initApp = () => {
    const id = location.search.split('=')[1];
    findShow(id).then((show) => displayShow(show));
    ``;
};
const displayShow = (show) => {
    document
        .querySelector('#details')
        ?.appendChild(createShowDetailsDisplay(show));
    document
        .querySelector('#details')
        ?.appendChild(createOverlay(show.backdrop_path));
};
document.addEventListener('DOMContentLoaded', initApp);
