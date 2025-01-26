import { HttpClient } from '../utilities/HttpClient.js';
export const listAllProducts = async () => {
    const http = new HttpClient('http://localhost:3000/products');
    const response = await http.Get();
    return response;
};
export const getProduct = async (itemNumber) => {
    const http = new HttpClient(`http://localhost:3000/products?itemNumber=${itemNumber}`);
    const response = await http.Get();
    return response[0];
};
