const form = document.querySelector('#transaction-form');
const fromInput = document.querySelector('#from');
const toInput = document.querySelector('#to');
const valueInput = document.querySelector('#value');

let client = undefined;

const initApp = () => {};

const createTransaction = async (e) => {
  e.preventDefault();
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', createTransaction);
