import { IMovie } from './IMovie';

export interface IMovieDetail extends IMovie {
  genres: [{ name: string }];
}
