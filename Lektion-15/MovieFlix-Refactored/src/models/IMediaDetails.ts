import { IMedia } from './IMedia';

export interface IMediaDetails extends IMedia {
  genres: [{ name: string }];
  duration: number;
}
