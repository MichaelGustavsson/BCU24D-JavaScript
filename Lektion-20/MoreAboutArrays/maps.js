/*****************************************************************/
//  Datastruktur Maps...
/*****************************************************************/

const movies = new Map();
// Map består av ett nyckelvärde och värdet som vi vill komma åt...
// Dictionary
movies.set('title', 'Avatar');
console.log(movies);

movies.set('categories', ['Adventure', 'Horror', 'Drama', 'Action']);
console.log(movies);

movies.set(true, 'Jurassic World');
console.log(movies);

movies.set(1, 'Rating 6.0');
console.log(movies);

const horrorMovies = ['Exorcisten', 'Halloween'];
movies.set(horrorMovies, 'Horror');
console.log(movies);

// Hämta ut ifrån en Map...
console.log(movies.get('title'));
console.log(movies.get('categories'));
console.log(movies.get(true));
console.log(movies.get(horrorMovies));

// Kontrollera om en nyckel existerar...
console.log(movies.has('title'));
console.log(movies.has(true));
console.log(movies.has(false));

// Ett mer verklighetstroget exempel...
const vehicles = new Map();
vehicles.set('ABC123', {
  manufacturer: 'Volvo',
  model: 'XC60',
  modelYear: 2020,
});
vehicles.set('EFG456', {
  manufacturer: 'Ford',
  model: 'MACH-E',
  modelYear: 2022,
});
vehicles.set('HIJ789', { manufacturer: 'KIA', model: 'EV-6', modelYear: 2023 });

console.log(vehicles);

const vehicle = vehicles.get('EFG456');
console.log(vehicle);

// Funker ej!!!
// for (let vehicle of vehicles) {
//   console.log(vehicle);
// }

vehicles.forEach((vehicle) => console.log(vehicle.model));

console.log(vehicles.keys());
console.log(vehicles.entries());
console.log(vehicles.values());

// Omvandla en Map till en Array...
// const vehiclesArray = [...vehicles];
// console.log(vehiclesArray);
// console.log(vehiclesArray[1]);

const vehiclesArray = Array.from(vehicles);
console.log(vehiclesArray);

for (let vehicle of vehiclesArray) {
  console.log(vehicle[0]);
  console.log(vehicle[1]);
  console.log(vehicle[1].model, vehicle[1].manufacturer);
}
