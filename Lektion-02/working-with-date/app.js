/******************************************/
// JavaScript Date...
/******************************************/
// Date representerar antalet millisekunder som har passerat
// sedan startdatumer för JavaScripts tidsmätning(epoch)
// 1970-01-01 00:00:00

/*
// Skapa en instans av ett nytt Date object...
let currentDate = new Date();
console.log('Aktuellt datum', currentDate);

// 1990-11-17
let birthDate = new Date('1990-11-17');
console.log('BirthDate', birthDate);

birthDate = new Date('1990-11-17 22:15:00');
console.log('BirthDate', birthDate);

birthDate = new Date('november 17 1990');
console.log('BirthDate', birthDate);

birthDate = new Date('november 17 1990 22:15:00');
console.log('BirthDate', birthDate);

birthDate = new Date(1990, 11, 17);
console.log('BirthDate', birthDate);

birthDate = new Date(1990, 11, 17, 22, 15, 0, 0);
console.log('BirthDate', birthDate);

birthDate = new Date(1990, 10, 17);
console.log('BirthDate', birthDate);

birthDate = new Date(1990, 10, 17, 22, 15, 0, 0);
console.log('BirthDate', birthDate);
*/

/******************************************/
// Manipulera JavaScript Date typen...
/******************************************/
let currentDate = new Date();
console.log('Aktuell datum och tid', Date.now());
console.log('Aktuell datum och tid', Date.parse('2024-12-11'));

console.log(currentDate);
// Plocka ut året...
console.log(currentDate.getFullYear());

// Plocka ut månaden...
// Januari är månad 0 i JavaScript...
console.log(currentDate.getMonth());
console.log(currentDate.getMonth() + 1);

// Plocka ut dagen ur datumet...
console.log(currentDate.getDate());

// Plocka ut veckodagen ur datumet...
console.log(currentDate.getDay());

// Plocka ut tid zonens värde...
console.log(currentDate.getTimezoneOffset());

// Plocka timme
console.log(currentDate.getHours());
// Plocka minuter
console.log(currentDate.getMinutes());
// Plocka sekunder
console.log(currentDate.getSeconds());

// epoch tiden
console.log(new Date(0));

// Manipulera datum
const invoiceDate = new Date();
console.log('Faktura datum', invoiceDate);

const dueDate = new Date();
dueDate.setDate(invoiceDate.getDate() + 29);
console.log('Förfallodatum:', dueDate);
