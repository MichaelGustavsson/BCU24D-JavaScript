/************************************************/
// Array.map()
/************************************************/
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);

// const number1 = numbers.map((number) => number * 2);
// console.log(number1);

console.log(vehicles);

let vehicleList = vehicles.map(function (vehicle) {
  return {
    companyName: vehicle.manufacturer,
    model: vehicle.model,
    modelYear: vehicle.modelYear,
    mileage: vehicle.mileage,
  };
});

vehicleList = vehicles.map((vehicle) => {
  return {
    companyName: vehicle.manufacturer,
    model: vehicle.model,
    modelYear: vehicle.modelYear,
    mileage: vehicle.mileage,
  };
});

console.log(vehicleList);

const vehicleNames = vehicles.map((vehicle) => {
  return {
    vehicleName: `${vehicle.manufacturer} ${vehicle.model} ${vehicle.modelYear}`,
  };
});

console.log(vehicleNames);
