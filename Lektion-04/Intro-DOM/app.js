/************************************************/
// Introduktion till DOM
/************************************************/

// Globala objektet, högst upp i hierarkin...
// console.log(window);
// window.alert('Hej på dig!');
// alert('Hej på dig!');
// prompt('Skriv in ditt namn');

// Dokumentet...
// console.log(document);

// - root elementet
// console.log(document.documentElement); // det äkta root objektet...

// console.log(document.head);
// console.log(document.head.children);
// console.log(document.head.children[4]);
// console.log(document.head.children[4].innerHTML);
// document.head.children[4].innerHTML = 'Intro DOM';
// console.log(document.head.children[4].innerHTML);

// console.log(document.links);
// console.log(document.links[0].href);

// FARLIGT!!!
// document.body.innerHTML = '<h2>JavaScript är skitkul!!!🎉</h2>';
// document.write('JavaScript kan allt!👍');

// console.log(document.all);
// document.links[1].className = 'link';

console.log(document.links);

// document.links.forEach((link) => console.log(link));

// Array.from()
const links = Array.from(document.links);
console.log(links);

links.forEach((link) => console.log(link));

for (let i = 0; i < links.length; i++) {
  console.log(links[i]);
}

for (let link of links) {
  console.log('for of', link);
}
