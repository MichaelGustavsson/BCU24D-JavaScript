import { getProduct } from './services/product-services.js';
import { createPageHeader, createText } from './utilities/dom.js';
import { updateCartItems, updateCart } from './utilities/utilities.js';
const addToCartButton = document.querySelector('#addToCart');
let product;
const initApp = () => {
    updateCartItems();
    const itemNumber = location.search.split('=')[1];
    findProduct(itemNumber);
};
const findProduct = async (itemNumber) => {
    product = await getProduct(itemNumber);
    console.log(product);
    generateHtml(product);
};
const addToCart = () => {
    updateCart(product);
};
const generateHtml = (product) => {
    // Create H1...
    const pageHeader = createPageHeader(product.productName);
    pageHeader.classList.add('page-title');
    document
        .querySelector('main')
        ?.insertAdjacentElement('afterbegin', pageHeader);
    // Create details section...
    // Get the section form html page...
    const details = document.querySelector('.details');
    details.appendChild(createText(`Artikelnr: ${product.itemNumber}`));
    details.appendChild(createText(`Produktnamn: ${product.productName}`));
    details.appendChild(createText(`Pris: ${product.price.toFixed(2)}`));
    details.appendChild(createText('Beskrivning:'));
    details.appendChild(createText(product.description));
};
document.addEventListener('DOMContentLoaded', initApp);
addToCartButton?.addEventListener('click', addToCart);
