import { ResponseType } from '../models/ResponseType';
import { IMovie } from '../models/IMovie';
import { IMovieDetail } from '../models/IMovieDetail';
import { fetchData } from '../utilities/httpClient.js';

export const listMovies = async (): Promise<ResponseType> => {
  const response = await fetchData('discover/movie');
  return mapData(response);
};

export const searchMovies = async (filter: string): Promise<ResponseType> => {
  if (filter) {
    const response = await fetchData(`search/movie?query=${filter}`);
    return mapData(response);
  } else {
    return listMovies();
  }
};

export const findMovie = async (id: string): Promise<IMovieDetail> => {
  return await fetchData(`movie/${id}`);
};

const mapData = (response: any): ResponseType => {
  const result: ResponseType = {
    page: response.page,
    totalPages: response.total_pages,
    results: response.results as IMovie[],
  };

  return result;
};
