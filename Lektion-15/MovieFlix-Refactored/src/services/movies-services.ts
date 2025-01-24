import { ResponseType } from '../models/ResponseType';
import { IMovie } from '../models/IMovie';
import { IMovieDetail } from '../models/IMovieDetail';
import { fetchData } from '../utilities/httpClient.js';
import { IMedia } from '../models/IMedia';

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

export const findMovie = async (id: string): Promise<IMovieDetail> => {
  return await fetchData(`movie/${id}`);
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
