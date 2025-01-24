import { IMedia } from '../models/IMedia';
import { IShow } from '../models/IShow';
import { IShowDetail } from '../models/IShowDetail';
import { ResponseType } from '../models/ResponseType';
import { fetchData } from '../utilities/httpClient.js';

export const listShows = async (page: number = 1): Promise<ResponseType> => {
  const response = await fetchData('discover/tv', page);
  return mapData(response);
};

export const searchShows = async (
  filter: string,
  page: number = 1
): Promise<ResponseType> => {
  if (filter) {
    const response = await fetchData('search/tv', page, filter);
    return mapData(response);
  } else {
    return listShows();
  }
};

export const findShow = async (id: string): Promise<IShowDetail> => {
  return await fetchData(`tv/${id}`);
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
        title: data.name,
        poster: data.poster_path,
        overview: data.overview,
        releaseDate: data.first_air_date,
        rating: data.vote_average,
      } as IMedia;
    }),
  };

  return result;
};
