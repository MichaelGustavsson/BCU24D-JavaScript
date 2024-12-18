/****************************************************/
// DOM Selectors (Lokalisera eller hitta) element...
/****************************************************/

// Det gamla omorderna sättet...
// const pageTitle = document.getElementById('app-title');
// console.log(pageTitle);

// const elem = document.getElementsByTagName('div');
// console.log(elem);

// const container = document.getElementsByClassName('container');
// console.log(container);

// const formControl = document.getElementsByClassName('form-control');
// console.log(formControl);

// Läsa attribut i ett hämtat element...
// Är icke rekommenderat
// console.log(pageTitle.id);
// console.log(pageTitle.className);

// Best practice!!!
// Läsa ut attributens värden...
// console.log(pageTitle.getAttribute('id'));
// console.log(pageTitle.getAttribute('class'));

// Skriva nya värden på attributen
// Vi kan också skapa nya attribut vid behov
// pageTitle.setAttribute('title', 'Min inköpslista');
// pageTitle.setAttribute('michaels-attribute', 'va bra');

// Läsa ut innehållet ifrån ett element...
// console.log(pageTitle.innerHTML);
// console.log(pageTitle.innerText);

// Ändra innehållet i ett element...
// pageTitle.innerText = 'Ändrat titeln!!!';
// pageTitle.innerHTML = '<strong>Viktigt!!!</strong>';

// Manipulera stilen på valt element...
// Detta är heller inte det bästa sättet...
// pageTitle.style.color = '#ff00ff';
// pageTitle.style.backgroundColor = '#ddd';
// pageTitle.style.background = '#ffff00';
// pageTitle.style.borderRadius = '0.8rem';
// pageTitle.style.border = 'solid 1px orange';
// pageTitle.style.padding = '0.4rem 1rem';

// Hämta alla li element...
/*
const listItems = document.getElementsByTagName('li');
console.log(listItems);

const items = Array.from(listItems);
console.log(items);

items.forEach((item) => {
  item.style.color = '#ff0000';
  item.style.fontWeight = '600';
  item.style.fontStyle = 'italic';
});
*/

/****************************************************/
// Ett mer modernt och BEST PRACTICE sätt att
// lokalisera element...
/****************************************************/

// Hitta förekomster av element...
// const testTitle = document.querySelector('elementtyp, id, classnamn...');
// Söker efter första förekomsten av elementet <h1>
// const testTitle = document.querySelector('h1');
// console.log(testTitle);
// Sök efter element på dess id...
// const input = document.querySelector('#item-input');
// console.log(input);

// Sök efter element med dess class...
// const div = document.querySelector('.container');
// console.log(div);

// Avancerad sökningar efter element...
// const input = document.querySelector('input[type="text"]');
// console.log(input);

const list = document.querySelector('ul');
console.log(list);

const listItems = document.querySelectorAll('ul li');
console.log(listItems);

console.log(document.querySelectorAll('ul#item-list'));
console.log(document.querySelectorAll('ul.items'));

listItems.forEach((item) => {
  console.log(item.querySelectorAll('button'));
});

console.log(document.querySelector('li:first-child'));
console.log(document.querySelector('li:last-child'));
console.log(document.querySelector('li:nth-child(1)'));

const foundItem = document.querySelector('li:nth-child(2)');
console.log(foundItem.innerText);
foundItem.style.color = '#ff0000';
foundItem.innerText = 'Gurka';
