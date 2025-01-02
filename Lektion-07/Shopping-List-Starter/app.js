export const createErrorMessage = (message) => {
  const div = document.createElement('div');
  div.setAttribute('id', 'error-message');
  div.appendChild(document.createTextNode(message));
  div.classList.add('error-message');
  document.querySelector('.message-container').appendChild(div);
};
