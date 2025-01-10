import * as Storage from './storage.js';

// createButton är ett alias för createIconButton i dom.js
import createButton from './dom.js';

/*************************************************/
// Shopping List
/*************************************************/
const form = document.querySelector('#item-form');
const input = document.querySelector('#item-input');
const groceryList = document.querySelector('#item-list'); // UL elementet i index.html
const clearButton = document.querySelector('#clear');
const filterInput = document.querySelector('#filter');
const saveButton = form.querySelector('button');

let isInEditMode = false;

const initApp = () => {
  const groceries = Storage.getFromStorage();
  groceries.forEach((item) => addToDOM(item));
  updateUI();
};

const handleAddGrocery = (e) => {
  e.preventDefault();

  const grocery = input.value;

  if (grocery.trim().length === 0) {
    const errorMsg = createErrorMessage('Du måste ange vad du ska köpa!!!');
    document.querySelector('.message-container').appendChild(errorMsg);

    setTimeout(() => {
      document.querySelector('#error-message').remove();
    }, 2000);

    return;
  }

  if (isInEditMode) {
    const groceryToUpdate = groceryList.querySelector('.edit-mode');
    Storage.removeFromStorage(groceryToUpdate.textContent);
    groceryToUpdate.classList.remove('.edit-mode');
    groceryToUpdate.remove();
    isInEditMode = false;
  } else {
    if (checkIfGroceryExists(grocery)) {
      const errorMsg = createErrorMessage(`${grocery} finns redan i listan!`);
      document.querySelector('.message-container').appendChild(errorMsg);

      setTimeout(() => {
        document.querySelector('#error-message').remove();
      }, 2000);

      updateUI();
      return;
    }
  }

  addToDOM(grocery);
  Storage.addToStorage(grocery);
  updateUI();
};

const addToDOM = (grocery) => {
  const item = document.createElement('li');
  item.appendChild(document.createTextNode(grocery));
  item.appendChild(
    createButton('btn-link text-red', 'fa-regular fa-trash-can')
  );
  groceryList.appendChild(item);
};

const handleClickGrocery = (e) => {
  if (e.target.parentElement.classList.contains('btn-link')) {
    removeGrocery(e.target.parentElement.parentElement);
  } else {
    editGrocery(e.target);
  }
};

const editGrocery = (grocery) => {
  isInEditMode = true;
  groceryList
    .querySelectorAll('li')
    .forEach((item) => item.classList.remove('edit-mode'));

  grocery.classList.add('edit-mode');
  saveButton.classList.add('btn-edit');
  saveButton.innerHTML = '<i class="fa-light fa-pen"></i> Uppdatera';
  input.value = grocery.textContent;
};

const removeGrocery = (item) => {
  item.remove();
  Storage.removeFromStorage(item.textContent);
};

const handleClearList = () => {
  while (groceryList.firstChild)
    groceryList.removeChild(groceryList.firstChild);

  Storage.clearStorage('groceries');
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

const checkIfGroceryExists = (grocery) => {
  const fromStorage = Storage.getFromStorage();
  return fromStorage.includes(grocery);
};

const createErrorMessage = (message) => {
  const div = document.createElement('div');
  div.setAttribute('id', 'error-message');
  div.appendChild(document.createTextNode(message));
  div.classList.add('error-message');
  return div;
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

  saveButton.innerHTML = "<i class='fa-solid fa-plus'></i> Lägg till";
  saveButton.classList.remove('btn-edit');

  isInEditMode = false;
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleAddGrocery);
clearButton.addEventListener('click', handleClearList);
groceryList.addEventListener('click', handleClickGrocery);
filterInput.addEventListener('input', handleFilterGroceries);
