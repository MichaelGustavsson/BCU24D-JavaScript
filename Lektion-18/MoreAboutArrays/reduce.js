/**********************************************/
// Array.reduce()
/**********************************************/
// Reduce används för att summera/ackumulera värden i en array...
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// The old way😀
function calculateTotal() {
  let acc = 0;
  for (let currValue of numbers) {
    acc += currValue;
    // console.log(currValue, acc);
  }
}

calculateTotal();

// Det mer moderna sättet...
const totalValue = numbers.reduce((acc, currValue) => acc + currValue);
// console.log(totalValue);

// Mer verklighetstroget exempel...
const cart = [
  { id: 1, productName: 'Slip papper', price: 50, quantity: 2 },
  { id: 2, productName: 'Polermaskin', price: 2450, quantity: 1 },
  { id: 3, productName: 'Rubbing flytande', price: 179, quantity: 2 },
  { id: 4, productName: 'Startbatteri', price: 2800, quantity: 1 },
];

console.log(cart);

const cartTotal = cart.reduce((sum, product) => {
  return sum + product.price;
}, 0);

const cartQuantity = cart.reduce((quantity, product) => {
  return quantity + product.quantity;
}, 0);

console.log(cartTotal);
console.log(cartQuantity);
