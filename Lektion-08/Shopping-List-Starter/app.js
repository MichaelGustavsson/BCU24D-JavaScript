/*************************************************/
// Shopping List Steg 1
/*************************************************/
// Hämta in referenser till elementen...
const form = document.querySelector('#item-form');
const input = document.querySelector('#item-input');
const groceryList = document.querySelector('#item-list'); // UL elementet i index.html
const clearButton = document.querySelector('#clear');
const filterInput = document.querySelector('#filter');

// Initieringskod för applikationen...
const initApp = () => {
  updateUI();
};

// Skapar händelsefunktioner (event listeners)
const handleAddGrocery = (e) => {
  // 1. Förhindra att formuläret skickas iväg...
  e.preventDefault();

  // 2. Hämta vad som står i textrutan...
  const grocery = input.value;

  // Validera/kontrollera att det finns något i textrutan...
  if (grocery.trim().length === 0) {
    // alert('Du måste ange vad du ska handla!');
    const errorMsg = createErrorMessage('Du måste ange vad du ska köpa!!!');

    document.querySelector('.message-container').appendChild(errorMsg);

    input.value = '';

    return;
  }

  // Ta bort felmeddelandet...
  // Vi kontrollerar om element med id #error-message finns
  // i så fall tar vi bort det...
  if (document.querySelector('#error-message')) {
    document.querySelector('#error-message').remove();
  }

  addToDOM(grocery);
  updateUI();
};

/******************************************************************/
// REFACTORED KOD separera ansvaret för tillverkning av element...
/******************************************************************/
// Att placera vårt valda inköpsalternativ i DOM
const addToDOM = (grocery) => {
  const item = document.createElement('li');
  item.appendChild(document.createTextNode(grocery));
  item.appendChild(
    createIconButton('btn-link text-red', 'fa-regular fa-trash-can')
  );
  groceryList.appendChild(item);
};

// Skapa en funktion som skapar en knapp...
const createIconButton = (buttonClasses, iconClasses) => {
  const button = document.createElement('button');
  const classList = buttonClasses.split(' ');

  classList.forEach((c) => button.classList.add(c));

  const icon = createIcon(iconClasses);
  button.appendChild(icon);
  // Returnera vår nya knapp...
  return button;
};

// Skapa en funktion som skapar ett element som har en ikon...
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
  // På något måste iterera igenom groceryList och ta bort varje li element
  while (groceryList.firstChild)
    groceryList.removeChild(groceryList.firstChild);

  updateUI();
};

const handleFilterGroceries = (e) => {
  const groceries = document.querySelectorAll('li');
  const value = e.target.value.toLowerCase();

  // loopa igenom groceries listan
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
  // 1. Vi behöver skapa ett element och vi behöver sätta ett id på elementet
  // 2. samt skapa en textnode för felmeddelandet
  // 3. Lägga på rätt css klass för att indikera att det är ett fel.
  const div = document.createElement('div');
  div.setAttribute('id', 'error-message');
  // const textContent = document.createTextNode(message);
  // div.appendChild(textContent);
  div.appendChild(document.createTextNode(message));
  div.classList.add('error-message');
  return div;
};

const updateUI = () => {
  // Rensar textrutan...
  input.value = '';

  // Hämtar alla li element om det finns några...
  const groceries = document.querySelectorAll('li');

  // Kontrollera om det inte finns några li element
  if (groceries.length === 0) {
    // Gömma filter textrutan och töm allt knappen...
    clearButton.style.display = 'none';
    filterInput.style.display = 'none';
  } else {
    // Annars visa filter textrutan och töm allt knappen...
    clearButton.style.display = 'block';
    filterInput.style.display = 'block';
  }
};

// Koppla händelser som jag är intresserad...
// Händelse som körs när DOM är laddat och klart!!!
document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleAddGrocery);
clearButton.addEventListener('click', handleClearList);
groceryList.addEventListener('click', handleClickGrocery);
filterInput.addEventListener('input', handleFilterGroceries);
