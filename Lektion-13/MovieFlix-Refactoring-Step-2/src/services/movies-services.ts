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
  const key = 'c225640b9109317dc84c9f661f0ca0ba';
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const body = await response.json();
      const movie = body as IMovieDetail;
      return movie;
    } else {
      throw new Error(response.status.toString());
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
