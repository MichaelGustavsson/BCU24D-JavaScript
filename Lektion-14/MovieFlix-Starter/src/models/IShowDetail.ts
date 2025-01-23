import { IShow } from './IShow';

export interface IShowDetail extends IShow {
  genres: [{ name: string }];
  number_of_episodes: number;
}
