import { fetchData } from '../utilities/httpClient.js';
export const listMovies = async () => {
    const response = await fetchData('discover/movie');
    return response.results;
};
export const searchMovies = async (filter) => {
    if (filter) {
        const response = await fetchData(`search/movie?query=${filter}`);
        return response.results;
    }
    else {
        return listMovies();
    }
};
export const findMovie = async (id) => {
    // const response = await fetchData(`movie/${id}`);
    // return response;
    return await fetchData(`movie/${id}`);
};
