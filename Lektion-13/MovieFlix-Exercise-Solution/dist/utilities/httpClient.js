import { config } from '../config/config.js';
export const fetchData = async (endpoint) => {
    const API_URL = config.url.baseUrl;
    const API_KEY = config.api.key;
    let url = '';
    if (endpoint.includes('?', 0)) {
        url = `${API_URL}/${endpoint}&api_key=${API_KEY}`;
    }
    else {
        url = `${API_URL}/${endpoint}?api_key=${API_KEY}`;
    }
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
        else {
            throw new Error(`${response.status} - ${url}`);
        }
    }
    catch (error) {
        throw new Error(error);
    }
};
