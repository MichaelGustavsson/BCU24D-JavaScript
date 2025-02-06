import { addToStorage } from './localstorage.js';

const addButton = document.querySelector('button');

let id = 0;
const initApp = () => {
  id = location.search.split('=')[1];
  console.log('Valt kurs id', id);
};

const handleBooking = () => {
  console.log('Bokar kursen...');
  location.href = 'booking.html?id=' + id;
};

document.addEventListener('DOMContentLoaded', initApp);
addButton.addEventListener('click', handleBooking);
