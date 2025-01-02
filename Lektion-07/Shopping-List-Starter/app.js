/*************************************************/
// Shopping List
/*************************************************/
const form = document.querySelector('#item-form');
const input = document.querySelector('#item-input');
const groceryList = document.querySelector('#item-list'); // UL elementet i index.html
const clearButton = document.querySelector('#clear');
const filterInput = document.querySelector('#filter');

const initApp = () => {
  updateUI();
};

const handleAddGrocery = (e) => {
  e.preventDefault();

  const grocery = input.value;

  if (grocery.trim().length === 0) {
    if (!document.querySelector('#error-message')) {
      createErrorMessage('Du måste ange vad du ska köpa!!!');
    }
    input.value = '';
    return;
  }

  if (document.querySelector('#error-message')) {
    document.querySelector('#error-message').remove();
  }

  addToDOM(grocery);
  updateUI();
};

/******************************************************************/
// REFACTORED KOD separera ansvaret för tillverkning av element...
/******************************************************************/
const addToDOM = (grocery) => {
  const item = document.createElement('li');
  item.appendChild(document.createTextNode(grocery));
  item.appendChild(
    createIconButton('btn-link text-red', 'fa-regular fa-trash-can')
  );
  groceryList.appendChild(item);
};

const createIconButton = (buttonClasses, iconClasses) => {
  const button = document.createElement('button');
  const classList = buttonClasses.split(' ');

  classList.forEach((c) => button.classList.add(c));

  const icon = createIcon(iconClasses);
  button.appendChild(icon);
  return button;
};

const createIcon = (classes) => {
  const icon = document.createElement('i');
  const classList = classes.split(' ');

  classList.forEach((c) => icon.classList.add(c));

  return icon;
};

const handleClickGrocery = (e) => {
  if (e.target.parentElement.classList.contains('btn-link')) {
    removeGrocery(e.target.parentElement.parentElement);
  }

  updateUI();
};

const removeGrocery = (item) => {
  console.log(item);
  item.remove();
};

const handleClearList = () => {
  while (groceryList.firstChild)
    groceryList.removeChild(groceryList.firstChild);

  updateUI();
};

const handleFilterGroceries = (e) => {
  const groceries = document.querySelectorAll('li');
  const value = e.target.value.toLowerCase();

  groceries.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(value) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
};

const createErrorMessage = (message) => {
  const div = document.createElement('div');
  div.setAttribute('id', 'error-message');
  div.appendChild(document.createTextNode(message));
  div.classList.add('error-message');
  document.querySelector('.message-container').appendChild(div);
};

const updateUI = () => {
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

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleAddGrocery);
clearButton.addEventListener('click', handleClearList);
groceryList.addEventListener('click', handleClickGrocery);
filterInput.addEventListener('input', handleFilterGroceries);
