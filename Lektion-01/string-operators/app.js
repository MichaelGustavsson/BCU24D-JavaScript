/***************************************/
// Slå ihop strängar...
/***************************************/
/*
const manufacturer = 'Ford';
const model = 'Ford MACH-E';
const modelYear = 2022;

// The bad way...
const vehicle =
  'Tillverkare ' +
  manufacturer +
  ' Modell ' +
  model +
  ' Årsmodell ' +
  modelYear;

console.log(vehicle);

// The right way ✅...
const ford = `Tillverkare ${manufacturer} Modell ${model} Årsmodell ${modelYear}`;
console.log(ford);

// Ytterligare sätt att slå samman strängare
// method concat som finns på string objektet
const bil = '';
const concatenedString = bil.concat(
  'Tillverkare ',
  manufacturer,
  ' Modell ',
  model,
  ' Årsmodell ',
  modelYear
);

console.log(concatenedString);
*/

/***************************************/
// Egenskaper på strängar...
/***************************************/
// const vehicle = 'Volvo V40 2017';
// console.log(vehicle.length);

/***************************************/
//  Metoder på strängar...
//  Hur kan vi manipulera en sträng...
/***************************************/
const firstName = 'Elisabeth';
// Plocka ut enskilda tecken ur en sträng...
/*
console.log(firstName.length);
// Det gamla sättet...
console.log(firstName[0]);
console.log(firstName[2]);
// Det gamla sättet...
console.log(firstName[8]);

const index = firstName.length - 1;

console.log(firstName[index]);

// Det gamla men coola sättet att göra det på😁.
console.log(firstName[firstName.length - 1]);
*/
// Moderna sätt i JavaScript ✅
/*
// Hämta ut första tecknet, då har vi fått en ny metod .at().
console.log(firstName.at(0));
// Hämta ut sista tecknet med .at().
console.log(firstName.at(-1));
// Hämta ut tredje tecknet
console.log(firstName.at(2));
*/

/*
// Hämta ut första tecknet, då har vi fått en ny metod .charAt().
console.log(firstName.charAt(0));
// Hämta ut sista tecknet med .charAt().
console.log(firstName.charAt(-1));
// Hämta ut tredje tecknet
console.log(firstName.charAt(2));
*/
/*
// Hämta ut flera tecken ur en sträng...
// string.slice...
console.log(firstName, firstName.slice2), firstName);
console.log(firstName, firstName.slice(2, 8), firstName);
console.log(firstName, firstName.slice(-4, -2), firstName);

// string.substring()...
// Ett mycket trevligare sätt att göra ovanstående på😁
console.log(firstName, firstName.substring(2), firstName);
console.log(firstName, firstName.substring(2, 3), firstName);
// console.log(firstName, firstName.substring(-4, -2), firstName); //Funkar inte ännu!
// console.log(firstName, firstName.reverse(), firstName);
*/

// Kontrollera om en sträng börjar eller slutar med en sekvens av tecken...
// startsWith()
console.log(firstName, firstName.startsWith('e'));
console.log(firstName, firstName.startsWith('E'));
console.log(firstName, firstName.startsWith('Elis'));

// endsWith kontrollerar om en sträng slutar med en sekvens av tecken...
console.log(firstName, firstName.endsWith('h'));
console.log(firstName, firstName.endsWith('eth'));

// Justera små och stora bokstäver...
// string.toUpperCase();
console.log(firstName, firstName.toUpperCase());

// string.toLowerCase();
console.log(firstName, firstName.toLowerCase());

// Kombinera metoder, kedja(chaining) ihop metoder...
console.log(firstName, firstName.toLowerCase().startsWith('e'));
console.log(firstName, firstName.toUpperCase().startsWith('E'));

// Städa bort mellanslag/tomma tecken ifrån början respektive slutet på en sträng...
const address = ' Strandvägen 1 ';
console.log('X', address, 'X');
console.log('X', address.trim(), 'X');
console.log('X', address.trimStart(), 'X');
console.log('X', address.trimEnd(), 'X');

// Ersätta tecken...
const title = 'JavaScript är fantastiskt att jobba med';
console.log(title, title.length);
console.log(title, title.replaceAll(' ', ''), title.replaceAll(' ', '').length);
console.log(title, title.replace('fantastiskt', 'FANTASTISKT'), title);

// Reguljära uttryck...
const regex = /JavaScript/i;
console.log(title.replace(regex, 'React'));

// Repetera ord eller bokstäver...
const test = 'snabb';
console.log(test, test.repeat(10));
