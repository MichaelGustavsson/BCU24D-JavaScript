export const createErrorMessage = (message) => {
  const div = document.createElement('div');
  div.setAttribute('id', 'error-message');
  div.appendChild(document.createTextNode(message));
  div.classList.add('error-message');
  document.querySelector('.message-container').appendChild(div);
};

export const updateUI = () => {
  const input = document.querySelector('#item-input');
  const clearButton = document.querySelector('#clear');
  const filterInput = document.querySelector('#filter');

  input.value = '';

  const groceries = document.querySelectorAll('li');

  if (groceries.length === 0) {
    clearButton.style.display = 'none';
    filterInput.style.display = 'none';
  } else {
    clearButton.style.display = 'block';
    filterInput.style.display = 'block';
  }
};
