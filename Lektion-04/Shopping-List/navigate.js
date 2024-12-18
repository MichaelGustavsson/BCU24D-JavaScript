/***********************************************/
// Navigera DOM...
/***********************************************/
// Hämta in ul elementet
const items = document.querySelector('ul');
// console.log(items.children);
// console.log(items.children[0].innerText);
// console.log(items.children[1].innerText);
// console.log(items.children[2].innerText);
// console.log(items.children[3].innerText);

// Vad är det för typ av element som returneras...
// console.log(items.children[0].nodeType);
// console.log(items.children[0].nodeName);

items.children[0].innerText = 'Pepparkakshus';
items.children[0].innerHTML = '<h4>Pepparkakshus!!!</h4>';

items.firstElementChild.style.color = '#00ff00';
items.lastElementChild.style.color = '#00ff00';

const item = document.querySelector('li:nth-child(3)');
// console.log(item);

// console.log(item.nextElementSibling);
item.nextElementSibling.innerText = 'Sluta tjata!';

item.previousElementSibling.innerText = 'Nu är det snart slut!!!';

// Gå till förälder elementet...
const parent = item.parentElement;
// console.log(parent);

parent.style.border = 'solid 1px #00ff00';
parent.style.padding = '1rem';

// Arbeta med noder...
console.log(items.childNodes);
console.log(items.childNodes[0]);
console.log(items.childNodes[0].nodeName);
console.log(items.childNodes[0].nodeType);
// console.log(items.childNodes[1].textContent);
// console.log(items.childNodes[1].nodeName);
// console.log(items.childNodes[1].nodeType);
// console.log(items.childNodes[5].innerHTML);
// console.log(items.childNodes[5].outerHTML);
