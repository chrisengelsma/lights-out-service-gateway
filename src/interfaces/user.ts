import { IGauntletResult } from './gauntlet-result';

export interface IUser {
  _id?: string;
  displayName?: string;
  email?: string;
  passwordHash?: string;
  gauntletResults?: IGauntletResult[];
  createdOn?: Date;
  modifiedOn?: Date;
}
