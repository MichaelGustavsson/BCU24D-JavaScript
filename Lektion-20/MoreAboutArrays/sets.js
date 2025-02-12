/*****************************************************************/
//  Datastruktur Sets...
/*****************************************************************/

const manufacturers = new Set([
  'Volvo',
  'Fiat',
  'Ford',
  'BMW',
  'KIA',
  'Mercedes',
  'Volvo',
  'Fiat',
  'Ford',
  'BMW',
  'KIA',
  'Mercedes',
  'Volvo',
  'Fiat',
  'Ford',
  'BMW',
  'KIA',
  'Mercedes',
  'Volvo',
  'Fiat',
  'Ford',
  'BMW',
  'KIA',
  'Mercedes',
  'Mercedes',
  'Mercedes',
  'Mercedes',
  'Mercedes',
  'Mercedes',
  'Mercedes',
  'Mercedes',
  'Mercedes',
]);

console.log(manufacturers);
console.log(manufacturers.size);
console.log(manufacturers.has('Fiat'));
console.log(manufacturers.has('Volkswagen'));

// Lägg till Volkswagen...
manufacturers.add('Volkswagen');
manufacturers.add('Volkswagen');
manufacturers.add('Volkswagen');
console.log(manufacturers);
console.log(manufacturers.has('Volkswagen'));

// Ta bort ett element...
manufacturers.delete('Fiat');
console.log(manufacturers);
console.log(manufacturers.size);
console.log(manufacturers.has('Fiat'));

for (let make of manufacturers) {
  console.log(make);
}

// Massivt antal dupletter i en array...
const duplicates = [
  'Volvo',
  'Fiat',
  'Ford',
  'BMW',
  'KIA',
  'Mercedes',
  'Volvo',
  'Fiat',
  'Ford',
  'BMW',
  'KIA',
  'Mercedes',
  'Volvo',
  'Fiat',
  'Ford',
  'BMW',
  'KIA',
  'Mercedes',
  'Volvo',
  'Fiat',
  'Ford',
  'BMW',
  'KIA',
  'Mercedes',
  'Mercedes',
  'Mercedes',
  'Mercedes',
  'Mercedes',
  'Mercedes',
  'Mercedes',
  'Mercedes',
  'Mercedes',
];

console.log(duplicates);

const cleanArray = new Set(duplicates);
console.log(cleanArray);

const cleanManufacturers = [...cleanArray];
console.log('Uppstädad Array', cleanManufacturers);

console.log(cleanManufacturers.includes('Ford', 0));
console.log(cleanManufacturers.length);
console.log(cleanManufacturers.reverse());
console.log(cleanManufacturers[1]);
console.log(cleanManufacturers.at(-1));
