// function fn() {
//   if (/*Base case*/) {
//     return ???
//   } else {
//     fn();
//   }
// }

const initApp = () => {
  // 4! = 4 * 3 * 2 * 1
  console.log(fakulteten(4));
};

// Exempel skicka 4
function fakulteten(number) {
  // if(number === 1)
  if (number <= 2) {
    return number;
  } else {
    return number * fakulteten(number - 1);
  }
}

document.addEventListener('DOMContentLoaded', initApp);
