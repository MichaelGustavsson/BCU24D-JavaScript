import { IMovie } from './IMovie';
import { IShow } from './IShow';

export type ResponseType = {
  page: number;
  totalPages: number;
  results: IMovie[] | IShow[];
};
