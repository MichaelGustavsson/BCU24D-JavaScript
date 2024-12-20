/*************************************************/
// Shopping List Steg 1
/*************************************************/
// Hämta in referenser till elementen...
const form = document.querySelector('#item-form');
const input = document.querySelector('#item-input');
const groceryList = document.querySelector('#item-list'); // UL elementet i index.html
const clearButton = document.querySelector('#clear');

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
    const error = document.querySelector('#error-message');

    console.log('FINNS ERROR?', error);
    return;
  }

  // Ta bort felmeddelandet...
  document.querySelector('#error-message').remove();

  const error = document.querySelector('#error-message');

  console.log('FINNS ERROR?', error);

  addToDOM(grocery);

  // Rensar textrutan...
  input.value = '';
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

const handleClearList = () => {
  // På något måste iterera igenom groceryList och ta bort varje li element
  while (groceryList.firstChild)
    groceryList.removeChild(groceryList.firstChild);
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

// Koppla händelser som jag är intresserad...
form.addEventListener('submit', handleAddGrocery);
clearButton.addEventListener('click', handleClearList);
