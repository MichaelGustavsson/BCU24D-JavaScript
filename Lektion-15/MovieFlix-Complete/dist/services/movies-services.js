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
    const response = await fetchData(`movie/${id}`);
    const details = {
        id: response.id,
        background: response.backdrop_path,
        language: response.original_language,
        title: response.title,
        poster: response.poster_path,
        overview: response.overview,
        releaseDate: response.release_date,
        rating: response.vote_average,
        genres: response.genres,
        duration: response.runtime,
    };
    return details;
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
