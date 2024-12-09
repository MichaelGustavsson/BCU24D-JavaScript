/*
console.log('Här kommer ett nytt meddelande');
console.warn('Här kommer en varning');
console.error('Här kommer ett fel!!!');

console.log({ make: 'Volvo', model: 'V60' });
console.table({ make: 'Volvo', model: 'V60' });
console.dir({ make: 'Volvo', model: 'V60' });
*/

// Skapa en variabel och sedan ger vi den ett värde...
// var firstName;❗️
/*
let firstName = 'Michael';
console.log(firstName);
console.log(typeof firstName);
firstName = true;
console.log(firstName);
console.log(typeof firstName);
firstName = 32;
console.log(firstName);

const lastName = 'Olsson';
console.log(lastName);
*/

// lastName = 'Persson';
// console.log(lastName);

// console.log(window);

/*
  Vi har 3 olika sätt att deklarera variabler i JavaScript...

  1.  var = deklarerar en variabel som hamnar i
      globala namnutrymmet i Windows objektet
      ANVÄND ALDRIG!!!
  2.  let = deklarerar en variabel i ett blocked scope(mutable).
  3.  const deklarerar och initierar(sätter värder vid deklaration)
      blocked scoped (immutabel), går inte att ändra efter initiering...

      VAD SKA JAG ANVÄNDA???
      Börja alltid med const, senare kan vi göra om den till en let om
      vi behöver manipulera värdet...
*/

const isActive = true;

if (isActive === true) {
  let firstName = 'Pelle';
  console.log(firstName);
}

// Den skapar en ny variabel som innehåller värdet Eva...
// Se upp med detta!!!
firstName = 'Eva';
console.log(firstName);
const age = 34;
const price = '12.95';
console.log(typeof price);
const address = 'Gatan 1';
console.log(address);
