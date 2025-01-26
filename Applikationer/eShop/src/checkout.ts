import { ICustomer } from './models/ICustomer';
import { IOrder } from './models/IOrder';
import { IProduct } from './models/IProduct';
import { createRow, createRowItem } from './utilities/dom.js';
import {
  clearCartItem,
  getCartItems,
  updateCartItems,
} from './utilities/utilities.js';

const productList = document.querySelector('#products');
const checkoutForm = document.querySelector<HTMLFormElement>('#form');

let products: IProduct[];

const initApp = () => {
  loadOrders();
};

const loadOrders = () => {
  updateCartItems();
  products = getCartItems();
  createProductListDisplay(products);
};

const checkout = async (e: any) => {
  e.preventDefault();

  if (checkoutForm === null) return;

  const data = new FormData(checkoutForm);
  const formData = Object.fromEntries(data);

  formData.id = crypto.randomUUID();

  const customer: ICustomer = {
    id: formData.id,
    firstName: formData.firstName.toString(),
    lastName: formData.lastName.toString(),
    email: formData.email.toString(),
  };

  const order: IOrder = {
    id: crypto.randomUUID(),
    orderDate: new Date().toLocaleDateString('sv-SE'),
    customer: customer,
    orderItems: products,
  };

  try {
    await fetch('http://localhost:3000/customerOrders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    clearCartItem();
    updateCartItems();
    location.href = './confirmation.html';
  } catch (error) {
    console.log(error);
  }
};

const createProductListDisplay = (products: IProduct[]): void => {
  productList!.innerHTML = '';

  if (products.length === 0) {
    productList!.innerHTML =
      '<h2 style="text-align:center">Du har inget i kundvagnen än</h2>';
  }

  products.forEach((product) => {
    const row = createRow('row');
    row.appendChild(
      createRowItem({
        text: 'Artikelnr: ' + product.itemNumber,
      })
    );
    row.appendChild(createRowItem({ text: product.productName }));
    row.appendChild(createRowItem({ text: product.price.toFixed(2) }));

    productList!.appendChild(row);
  });
};
document.addEventListener('DOMContentLoaded', initApp);
checkoutForm?.addEventListener('submit', checkout);
