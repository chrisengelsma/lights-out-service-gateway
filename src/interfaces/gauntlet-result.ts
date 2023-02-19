import { IUser } from './user';

export interface IGauntletResult {
  _id?: string;
  clicks?: number;
  puzzleNo?: number;
  user?: IUser;
  createdAt?: Date;
}
