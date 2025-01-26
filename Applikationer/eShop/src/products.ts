import { IProduct } from './models/IProduct.js';
import { listAllProducts } from './services/product-services.js';
import { createRow, createRowItem } from './utilities/dom.js';
import { updateCartItems } from './utilities/utilities.js';

const productList = document.querySelector('#products');

const initApp = () => {
  loadProducts();
  updateCartItems();
};

const loadProducts = async () => {
  const products = await listAllProducts();
  console.log(products);
  createProductListDisplay(products);
};

const displayProductDetails = (e: any) => {
  console.log(e.currentTarget.id);
  const itemNumber = e.currentTarget.id;
  location.href = `./productDetails.html?id=${itemNumber}`;
};

const createProductListDisplay = (products: IProduct[]): void => {
  productList!.innerHTML = '';

  products.forEach((product) => {
    const row = createRow('row');
    row.appendChild(
      createRowItem({
        text: 'Artikelnr: ' + product.itemNumber,
      })
    );
    row.appendChild(createRowItem({ text: product.productName }));
    row.appendChild(createRowItem({ text: product.price.toFixed(2) }));

    row.id = product.itemNumber;
    row.addEventListener('click', displayProductDetails);

    productList!.appendChild(row);
  });
};

document.addEventListener('DOMContentLoaded', initApp);
