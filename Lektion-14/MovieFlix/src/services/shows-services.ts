import { IShow } from '../models/IShow';
import { IShowDetail } from '../models/IShowDetail';
import { fetchData } from '../utilities/httpClient.js';

export const listShows = async (): Promise<IShow[]> => {
  const response = await fetchData('discover/tv');
  return response.results as IShow[];
};

export const searchShows = async (filter: string): Promise<IShow[]> => {
  if (filter) {
    const response = await fetchData(`search/tv?query=${filter}`);
    return response.results as IShow[];
  } else {
    return listShows();
  }
};

export const findShow = async (id: string): Promise<IShowDetail> => {
  return await fetchData(`tv/${id}`);
};
