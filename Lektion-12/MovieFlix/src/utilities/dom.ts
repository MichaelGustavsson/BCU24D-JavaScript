export const createOverlay = (backdrop_path: string): HTMLDivElement => {
  // const overlayDiv = document.querySelector('.overlay') as HTMLDivElement;

  // overlayDiv.style.background = backdrop_path
  //   ? `url(https://image.tmdb.org/t/p/original/${backdrop_path}) center center/cover`
  //   : '';
  // overlayDiv.style.display = 'block';

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
