import { fetchData } from '../utilities/httpClient.js';
export const listMovies = async (page = 1) => {
    const response = await fetchData('discover/movie', page);
    return mapData(response);
};
export const searchMovies = async (filter, page = 1) => {
    if (filter) {
        const response = await fetchData('search/movie', page, filter);
        return mapData(response);
    }
    else {
        return listMovies();
    }
};
export const findMovie = async (id) => {
    return await fetchData(`movie/${id}`);
};
const mapData = (response) => {
    const result = {
        page: response.page,
        totalPages: response.total_pages,
        results: response.results.map((data) => {
            return {
                id: data.id,
                background: data.backdrop_path,
                language: data.original_language,
                title: data.title,
                poster: data.poster_path,
                overview: data.overview,
                releaseDate: data.release_date,
                rating: data.vote_average,
            };
        }),
    };
    return result;
};
