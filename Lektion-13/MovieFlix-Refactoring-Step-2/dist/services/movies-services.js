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
    const key = 'c225640b9109317dc84c9f661f0ca0ba';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const body = await response.json();
            const movie = body;
            return movie;
        }
        else {
            throw new Error(response.status.toString());
        }
    }
    catch (error) {
        throw new Error(error);
    }
};
