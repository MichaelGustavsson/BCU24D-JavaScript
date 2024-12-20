/*************************************************/
// Shopping List Steg 1
/*************************************************/
// Hämta in referenser till elementen...
const form = document.querySelector('#item-form');
const input = document.querySelector('#item-input');
const groceryList = document.querySelector('#item-list'); // UL elementet i index.html

// Skapar händelsefunktioner (event listeners)
const handleAddGrocery = (e) => {
  // 1. Förhindra att formuläret skickas iväg...
  e.preventDefault();

  // 2. Hämta vad som står i textrutan...
  const grocery = input.value;

  // Validera/kontrollera att det finns något i textrutan...
  if (grocery.trim().length === 0) {
    alert('Du måste ange vad du ska handla!');
    input.value = '';
    return;
  }

  console.log(grocery);

  // 3. Skapa ett <li> element
  const item = document.createElement('li');
  // 3.1  Lägg till text i li elementet...
  // INTE REKOMMENDERAT!!!
  // item.innerText = grocery;
  item.appendChild(document.createTextNode(grocery));

  // 3.2  Skapa knappen med en ikon...

  // const button = document.createElement('button');
  // button.classList.add('btn-link', 'text-red');
  // const icon = document.createElement('i');
  // icon.classList.add('fa-regular', 'fa-trash-can');

  const button = createIconButton(
    'btn-link text-red',
    'fa-regular fa-trash-can'
  );
  // const icon = createIcon('fa-regular fa-trash-can');
  // Addera ikonen som ett barn till knappen...
  // button.appendChild(icon);

  // 3.3  Addera knappen till vårt nya li element...
  item.appendChild(button);

  // 4. Slutligen lägg till li elementet till ul elementet <ul><li>Ost</li></ul>
  groceryList.appendChild(item);

  // Rensar textrutan...
  input.value = '';
};

/******************************************************************/
// REFACTORED KOD separera ansvaret för tillverkning av element...
/******************************************************************/

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

// Koppla händelser som jag är intresserad...
form.addEventListener('submit', handleAddGrocery);
