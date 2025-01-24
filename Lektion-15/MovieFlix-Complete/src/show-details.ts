import { IMediaDetails } from './models/IMediaDetails.js';
import { findShow } from './services/shows-services.js';
import { createOverlay, createDetailsDisplay } from './utilities/dom.js';

const initApp = () => {
  const id = location.search.split('=')[1];
  findShow(id).then((show) => displayShow(show));
  ``;
};

const displayShow = (show: IMediaDetails) => {
  document.querySelector('#details')?.appendChild(createDetailsDisplay(show));
  document
    .querySelector('#details')
    ?.appendChild(createOverlay(show.background));
};

document.addEventListener('DOMContentLoaded', initApp);
