import { createVehicleDisplay } from './dom.js';

const list = document.querySelector('#vehicles');
const form = document.querySelector('#new-vehicle');
const deleteBtn = document.querySelector('#delete');
const updateBtn = document.querySelector('#update');

const initApp = () => {
  loadVehicles();
};

const loadVehicles = async () => {
  const url = 'http://localhost:3000/vehicles';
  const response = await fetch(url); //GET ANROP...

  if (response.ok) {
    const vehicles = await response.json(); //Hämta ut data ur body...
    displayVehicles(vehicles);
  }
};

const displayVehicles = (vehicles) => {
  list.innerHTML = '';
  list.insertAdjacentHTML('beforeend', createVehicleDisplay(vehicles));
};

const handleSaveVehicle = async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  data.append('imageUrl', 'car10.jpg');
  // Object.fromEntries gör om data till ett JavaScript objekt...
  const body = Object.fromEntries(data);

  try {
    const response = await fetch('http://localhost:3000/vehicles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log(await response.json());
    await loadVehicles();
  } catch (error) {
    console.error(error);
  }
};

const handleDeleteVehicle = async (e) => {
  e.preventDefault();

  const url = 'http://localhost:3000/vehicles/c632';

  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });

    await loadVehicles();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const handleUpdateVehicle = async (e) => {
  e.preventDefault();

  const url = 'http://localhost:3000/vehicles/63d1';

  const vehicle = {
    manufacturer: 'KIA',
    model: 'EV6',
    modelYear: '2022',
    mileage: '25000',
    imageUrl: 'car12.jpg',
  };

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vehicle),
    });

    await loadVehicles();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSaveVehicle);
deleteBtn.addEventListener('click', handleDeleteVehicle);
updateBtn.addEventListener('click', handleUpdateVehicle);
