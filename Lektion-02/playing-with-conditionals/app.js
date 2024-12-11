/***************************************************/
// Villkorshantering
/***************************************************/
// Truthy respektive Falsy
/*
  Truthy(sanna uttryck)
    skiljt ifrån 0
    'Michael'
    {}

  Falsy(osanna uttryck)
    0
    ''
    undefined
    null
    NaN
*/
/*
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean('Michael'));
console.log(Boolean({}));
*/
// if och else
/*
// Constraint = regler
const maxCarAge = 5;
const maxMileage = 100000;

const vehicle = {
  manufacturer: 'Fiat',
  model: 'Uno',
  modelYear: 2017,
  mileage: 99950,
};

// Villkorsberäkning:
const currentYear = new Date().getFullYear();
const carAge = currentYear - vehicle.modelYear;
console.log('Bilens ålder', carAge);
// if(villkor){kod block(kod kropp)}
if (carAge < maxCarAge) {
  console.log('Bilen är intressant');
} else {
  // Här hamnar vi om if inte är sant...
  console.log('Bilen är inte intressant, den är för gammal');
}

// One liners, var försiktiga...
// if (carAge < maxCarAge) console.log('Bilen är intressant');

// En bättre if one-liner...
var result =
  carAge < maxCarAge
    ? 'Bilen är intressant'
    : 'Bilen är inte intressant, den är för gammal';

console.log(result);

// Logiska operator och || eller
// ||(OR) &&(AND)
if (carAge < maxCarAge || vehicle.mileage < maxMileage) {
  console.log('Bilen är intressant');
} else {
  // Här hamnar vi om if inte är sant...
  console.log('Bilen är inte intressant, den är för gammal');
}

if (carAge < maxCarAge && vehicle.mileage < maxMileage) {
  console.log('Bilen är intressant');
} else {
  // Här hamnar vi om if inte är sant...
  console.log(
    'Bilen är inte intressant, den är för gammal och har för många mil under huven'
  );
}

var result =
  carAge < maxCarAge && vehicle.mileage < maxMileage
    ? 'Bilen är intressant'
    : 'Bilen är inte intressant, den är för gammal';

console.log(result);

*/

// const day = 'Lördag';

/*
if (day == 'Måndag') {
  console.log('Veckans jobbigaste dag, hoppas den går fort');
} else if (day == 'Tisdag') {
  console.log('Fortfarande jobbigt');
} else if (day == 'Onsdag') {
  console.log('Lille lördag, det börjar arta sig!');
} else if (day == 'Torsdag') {
  console.log('Snart helg.');
} else if (day == 'Fredag') {
  console.log('Nu tar vi helg');
} else {
  console.log('Nu vet jag inte vilken dag det är, hjälp!!!');
}
  */
/*
const day = 'Lördag';
// Switch case satsen som KAN göra en lång if sats enklare att läsa.
switch (day) {
  case 'Måndag':
    console.log('Veckans jobbigaste dag, hoppas den går fort');
    break;
  case 'Tisdag':
    console.log('Veckans jobbigaste dag, hoppas den går fort');
    break;
  case 'Onsdag':
    console.log('Lille lördag, det börjar arta sig!');
    break;
  case 'Torsdag':
    console.log('Veckans jobbigaste dag, hoppas den går fort');
    break;
  case 'Fredag':
    console.log('Nu tar vi helg');
    break;
  default:
    console.log('Har ingen aning om vilken dag det är!!!😳');
}
*/
