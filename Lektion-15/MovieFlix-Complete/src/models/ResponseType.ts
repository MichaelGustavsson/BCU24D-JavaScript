import { IMedia } from './IMedia';

export type ResponseType = {
  page: number;
  totalPages: number;
  results: IMedia[];
};
