import { IProduct } from '../models/IProduct';

export const updateCart = (product: IProduct): void => {
  let products: IProduct[] = JSON.parse(localStorage.getItem('cart')!) ?? [];
  products.push(product);
  localStorage.setItem('cart', JSON.stringify(products));
  products = JSON.parse(localStorage.getItem('cart')!);
  document.querySelector('#cartItem')!.textContent = products.length.toString();
};

export const updateCartItems = (): void => {
  const products: IProduct[] = JSON.parse(localStorage.getItem('cart')!);
  if (products) {
    document.querySelector('#cartItem')!.textContent =
      products.length.toString();
  }
};

export const getCartItems = (): IProduct[] => {
  const products: IProduct[] = JSON.parse(localStorage.getItem('cart')!) ?? [];
  return products;
};

export const clearCartItem = () => {
  localStorage.removeItem('cart');
  document.querySelector('#cartItem')!.textContent = '0';
};
