import { ResponseType } from '../models/ResponseType';
import { fetchData } from '../utilities/httpClient.js';
import { IMedia } from '../models/IMedia';
import { IMediaDetails } from '../models/IMediaDetails';

export const listMovies = async (page: number = 1): Promise<ResponseType> => {
  const response = await fetchData('discover/movie', page);
  return mapData(response);
};

export const searchMovies = async (
  filter: string,
  page: number = 1
): Promise<ResponseType> => {
  if (filter) {
    const response = await fetchData('search/movie', page, filter);
    return mapData(response);
  } else {
    return listMovies();
  }
};

export const findMovie = async (id: string): Promise<IMediaDetails> => {
  const response = await fetchData(`movie/${id}`);

  const details: IMediaDetails = {
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

const mapData = (response: any): ResponseType => {
  const result: ResponseType = {
    page: response.page,
    totalPages: response.total_pages,
    results: response.results.map((data: any) => {
      return {
        id: data.id,
        background: data.backdrop_path,
        language: data.original_language,
        title: data.title,
        poster: data.poster_path,
        overview: data.overview,
        releaseDate: data.release_date,
        rating: data.vote_average,
      } as IMedia;
    }),
  };

  return result;
};
