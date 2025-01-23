import { IMovie } from '../models/IMovie';
import { IMovieDetail } from '../models/IMovieDetail';
import { fetchData } from '../utilities/httpClient.js';

export const listMovies = async (): Promise<IMovie[]> => {
  const response = await fetchData('discover/movie');
  return response.results as IMovie[];
};

export const searchMovies = async (filter: string): Promise<IMovie[]> => {
  if (filter) {
    const response = await fetchData(`search/movie?query=${filter}`);
    return response.results as IMovie[];
  } else {
    return listMovies();
  }
};

export const findMovie = async (id: string): Promise<IMovieDetail> => {
  // const response = await fetchData(`movie/${id}`);
  // return response;
  return await fetchData(`movie/${id}`);
};
