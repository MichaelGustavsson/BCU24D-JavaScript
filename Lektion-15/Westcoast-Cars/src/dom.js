export const createVehicleDisplay = (vehicles) => {
  let html = '';

  vehicles.forEach((vehicle) => {
    html += `
      <div class="vehicle-image">
        <img src="../src/assets/images/${vehicle.imageUrl}" id="${vehicle.id}"/>
        <p>${vehicle.manufacturer} ${vehicle.model}</p>
      </div>
    `;
  });

  return html;
};
