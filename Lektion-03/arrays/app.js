/*********************************************/
// Arrays = listor (collection)
// Sekventiell lagring av information
// 1,2,3,4,5,6,7
/*********************************************/
/*
// 1.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

// 2. Deklarera en array manuellt
const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(numbers2);

// 3. Skapa en tom array...
const numbers3 = [];

// Egenskaper för listor...
const length = numbers.length;
console.log(length);

// Plocka ut element ur en lista...
const firstElement = numbers[0];
console.log(firstElement);

// Plocka ut det sista elementet ur en lista...
const lastElement = numbers[numbers.length - 1];
console.log(lastElement);

// Ett mer modernt JavaScript sätt att hämta ut sista elementet.
console.log(numbers.at(-1));

// Addera element till en lista...
numbers.push(10);
console.log(numbers);

// Vi gör normalt inte på detta sättet...
// numbers[numbers.length] = 11;
// console.log(numbers);

numbers3.push(25);
console.log(numbers3);

// Vi kan lagra vad vi vill i en lista...
const strings = ['Oscar', 'Eva', 'Kalle'];
console.log(strings);

strings.push('Emma');
console.log(strings);

/************************************/
// GÖR INTE SÅ HÄR...
// strings.push(45);
// console.log(strings);

// strings.push(true);
// console.log(strings);

// strings.push({ id: 1, name: 'Kanelbulle', price: 33 });
// console.log(strings);

// console.log(typeof strings.at(4));
/*
const vehicles = [
  {
    manufacturer: 'BMW',
    model: 'X3e',
    modelYear: 2023,
    mileage: 10000,
    electricSeats: false,
  },
  {
    manufacturer: 'KIA',
    model: 'EV6',
    modelYear: 2021,
    mileage: 25000,
    electricSeats: true,
  },
];

console.log(vehicles);

vehicles.push({
  manufacturer: 'Volvo',
  model: 'XC60',
  modelYear: 2021,
  mileage: 25000,
  electricSeats: false,
});

console.log(vehicles);
*/

/****************************************************/
// GRUNDLÄGGANDE METODER FÖR ATT MANIPULERA LISTOR...
/****************************************************/
const movies = ['Avatar', 'Batman', 'The Bucket List'];
// console.log(movies);

// 1. Lägga till en ny film i listan...
//    push lägger alltid till ett element sist i listan...
movies.push('Carry On');
// console.log(movies);

// 2. Lägg till en ny film först i listan...
// movies.unshift('Wakanda Forever');
// console.log(movies);

// 3. Ta bort sista elementet
// movies.pop();
// console.log(movies);

// 4. Ta bort första elementet
// movies.shift();
// console.log(movies);

// 5. Ändra ordningen på listans innehåll...
// movies.reverse();
// console.log(movies);

// 6. Kontrollera om ett element existerar i listan...
// const exists = movies.includes('Avatar');
// console.log(exists);
// 7. Få tag i positionen(index) av ett element...
// const index = movies.indexOf('The Bucket List');
// console.log(index);
// console.log(movies[index]);

// 8. Skapa en ny array ifrån en befintlig med endast utvalda filmer...
// console.log(movies);

// let newList = movies.slice(3);
// console.log('Ny lista', newList);
// console.log('Original listan', movies);

// newList = movies.slice(1, 3); // end argumentet EXCLUDERAR sista elementet
// console.log('Ny lista', newList);

// 9. Ta bort ett element ur listan movies...
// const deletedMovies = movies.splice(1, 2);
// console.log('Borttagna', deletedMovies);
// console.log('Original listan', movies);

/***********************************************************/
// Kombinera de olika metoderna
/***********************************************************/
console.log(movies);

// 10.  Hämta ut alla elementen och ändra ordningen på dem...
let list = movies.splice(1, 2).reverse();
console.log(list);
console.log(movies);

// 11. Slå samman två listor till en lista
let allMovies = movies.concat(list);
console.log(allMovies);

// 12.  Skapa en komma separerad lista av allMovies
let separatedList = allMovies.sort().join(', ');
console.log(separatedList);

// separatedList = allMovies.sort();
// console.log(separatedList);
