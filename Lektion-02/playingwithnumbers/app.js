/*******************************/
// Arbeta med numeriska värden...
/*******************************/

// Egenskaper som ger oss högsta och lägsta möjliga värden
// för number typen...
/*
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Testa om värdet är ett heltal...
console.log(Number.isInteger(2.56789));
console.log(Number.isInteger(2));

// Omvandla(Konvertera) sträng till numeriska värden...
// Omvandla sträng till flyttal
console.log(Number.parseFloat('2.56789'), '2.56789');
console.log(Number.parseFloat('Kalle')); //Not a Number...
console.log(parseFloat('2.56789'), '2.56789');
console.log(parseFloat('Kalle')); //Not a Number...

// Omvandla till heltal...
console.log(Number.parseInt('2.56789'), '2.56789');
console.log(Number.parseInt('Kalle')); //Not a Number...
console.log(parseInt('2.56789'), '2.56789');
console.log(parseInt('Kalle')); //Not a Number...
*/

/*
// Hantera antalet decimaler
console.log(parseFloat('2897.587'));
console.log(parseFloat('2897.587').toFixed(2));
console.log(parseFloat('2897.587').toFixed(4));
console.log(parseFloat('2897.587').toFixed(1));

// Hantera ten-base, hexidecima & octalt
let y = 255;
console.log(y.toString(16));
console.log(y.toString(10));
console.log(y.toString(8));
console.log(y.toString(2));
*/

/*
let payment = 2500000.75;
console.log(payment.toString());
console.log(payment.toLocaleString());
console.log(payment.toLocaleString('sv-SE'));
console.log(payment.toLocaleString('en-US'));
console.log(payment.toLocaleString('en-GB'));
console.log(payment.toLocaleString('fr-FR'));

// bigint är extremt stora tal
// för att representera en bigint måste vi ange ett litet n på slutet.
let veryBigNumber = 9999999999999999999999999n;
console.log(veryBigNumber);
*/

/*****************************************************/
// Matematiska funktioner/metoder...
/*****************************************************/

/*
let number = 1.5456789;
// Math
console.log(Math.ceil(number));
console.log(Math.floor(number));
console.log(Math.round(number));

// Räkna ut antalet timmar och antalet minuter på en tidslängd...
let length = 79;
let hours = Math.floor(length / 60);
console.log('Timmar', hours);
let minutes = length % 60;
console.log('Minuter', minutes);
*/

/*****************************************************/
// Slumptal...
/*****************************************************/
/*
let rnd = Math.random();
console.log('Random 1', rnd);

rnd = Math.random() * 5;
console.log('Random 2', rnd);

rnd = Math.floor(Math.random() * 5);
console.log('Random 3', rnd);

const min = Math.ceil(10000);
const max = Math.floor(200000);
console.log('min', min, 'max', max);

rnd = Math.floor(Math.random() * (max - min) + min);
console.log('Random 4', rnd);
*/

/*****************************************************/
// Boolean och dess användning...
/*****************************************************/
// Syftet är att förstå bang operatorn (!)...
let isActive = true;
console.log('Vad är värdet på isActive', isActive);

isActive = !isActive;
console.log('Vad är värdet på isActive', isActive);

isActive = !isActive;
console.log('Vad är värdet på isActive', isActive);
