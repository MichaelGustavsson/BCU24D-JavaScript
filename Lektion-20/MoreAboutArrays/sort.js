/*****************************************************************/
//  Custom sort...
/*****************************************************************/
const transactions = [3000, -250, 200, 450, -50, -1000, 2000];
console.log(transactions);
console.log(transactions.sort());

/* 
  En anpassad sorteringsalgoritm(comparer)
  som ersätter den inbyggda som finns i typen array.

  test(a, b)...

  Om värdet är mindre(<) än 0 så kommer a att komma före b
  Om värdet är större(>) än 0 så kommer b att komma före a
  
*/

// Ascending sort(stigande ordning)
transactions.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log('Ascending', transactions);

// Descending sort(fallande ordning)
transactions.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
});

console.log('Descending', transactions);

// Mycket fränare syntax...
// Ascending...
transactions.sort((a, b) => a - b);
console.log(transactions);

// Descending...
transactions.sort((a, b) => b - a);
console.log(transactions);
