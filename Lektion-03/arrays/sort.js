/***********************************************/
// Egen implementering av metoden sort()...
/***********************************************/
const transactions = [3000, -250, 200, 400, -50, 2000, 1000];
console.log(transactions);
console.log(transactions.sort());

// Vi skapa en egen sorteringsalgoritm(comparer)
// som åsidosätter den inbyggda funktionen
// en sorteringsfunktion tar två argument(ALLTID)...
// funktion(a,b)
// om funktionens värde är mindre än 0 (value < 0)
// a kommer före b
// värdet är större än 0 (value > 0)
// då kommmer b före a...

// Sortering i stigande ordning(ascending)
// transactions.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

transactions.sort((a, b) => a - b);
console.log(transactions);

// Sortering i fallande ordning(descending)
// transactions.sort((a, b) => {
//   if (a < b) return 1;
//   if (a > b) return -1;
// });

transactions.sort((a, b) => b - a);

console.log(transactions);
