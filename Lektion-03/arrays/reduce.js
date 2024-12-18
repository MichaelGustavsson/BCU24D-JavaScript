/**********************************************/
// Array.reduce()
/**********************************************/
// Vi använder funktionen för att ackumulera värden som
// finns i en array(lista)...

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Väldigt dåligt exempel...
function calculateTotal() {
  let acc = 0;
  for (let currentValue of numbers) {
    acc += currentValue;
  }
  return acc;
}

// Anropa min dåliga lösning...
const totalSum = calculateTotal();
console.log(totalSum);

// Ett mycket bättre och moderna sätt att göra det på
// är att använda array.reduce metoden...
const totalValue = numbers.reduce(
  (accValue, currentValue) => accValue + currentValue
);
console.log(totalValue);

// Skapa en kundvagn i en e-handel...
const cart = [
  { id: 1, product: 'Bosh cirkelsåg', price: 2995, quantity: 1 },
  { id: 2, product: 'Polermaskin', price: 2450, quantity: 1 },
  { id: 3, product: 'Rubbing, flytande', price: 179, quantity: 3 },
  { id: 4, product: 'Slippapper', price: 25, quantity: 10 },
];

console.log(cart);

const cartTotal = cart.reduce((acc, product) => {
  return (acc += product.price);
}, 0);

console.log(cartTotal);

const cartQuantity = cart.reduce((acc, product) => {
  return (acc += product.quantity);
}, 0);

console.log(cartQuantity);
