export const updateCart = (product) => {
    let products = JSON.parse(localStorage.getItem('cart')) ?? [];
    products.push(product);
    localStorage.setItem('cart', JSON.stringify(products));
    products = JSON.parse(localStorage.getItem('cart'));
    document.querySelector('#cartItem').textContent = products.length.toString();
};
export const updateCartItems = () => {
    const products = JSON.parse(localStorage.getItem('cart'));
    if (products) {
        document.querySelector('#cartItem').textContent =
            products.length.toString();
    }
};
export const getCartItems = () => {
    const products = JSON.parse(localStorage.getItem('cart')) ?? [];
    return products;
};
export const clearCartItem = () => {
    localStorage.removeItem('cart');
    document.querySelector('#cartItem').textContent = '0';
};
