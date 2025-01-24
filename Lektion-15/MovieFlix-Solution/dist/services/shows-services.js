import { fetchData } from '../utilities/httpClient.js';
export const listShows = async (page = 1) => {
    const response = await fetchData('discover/tv', page);
    return mapData(response);
};
export const searchShows = async (filter, page = 1) => {
    if (filter) {
        const response = await fetchData('search/tv', page, filter);
        return mapData(response);
    }
    else {
        return listShows();
    }
};
export const findShow = async (id) => {
    return await fetchData(`tv/${id}`);
};
const mapData = (response) => {
    const result = {
        page: response.page,
        totalPages: response.total_pages,
        results: response.results,
    };
    return result;
};
