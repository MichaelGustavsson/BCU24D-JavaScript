import { fetchData } from '../utilities/httpClient.js';
export const listShows = async () => {
    const response = await fetchData('discover/tv');
    return response.results;
};
export const searchShows = async (filter) => {
    if (filter) {
        const response = await fetchData(`search/tv?query=${filter}`);
        return response.results;
    }
    else {
        return listShows();
    }
};
export const findShow = async (id) => {
    return await fetchData(`tv/${id}`);
};
