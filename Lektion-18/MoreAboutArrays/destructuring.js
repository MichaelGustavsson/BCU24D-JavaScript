import { vehicles } from './vehicles.js';

// document.querySelector('button').addEventListener('click', handleGetVehicle);
const button = document.querySelector('button');

// const displayVehicle = (vehicle) => {
const displayVehicle = ({ id, manufacturer, model, modelYear }) => {
  // console.log(vehicle);
  // Destructuring...
  // const { manufacturer, model, modelYear } = vehicle;
  console.log(id, manufacturer, model, modelYear);
};

const handleGetVehicle = () => {
  // console.log('Get Vehicles');
  // console.log(vehicles);
  displayVehicle(vehicles.at(-1));
};

button.addEventListener('click', handleGetVehicle);
