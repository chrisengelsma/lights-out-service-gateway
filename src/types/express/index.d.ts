import { Document, Model } from 'mongoose';

import { IGauntletResult, IUser } from '../../interfaces';

declare global {

  namespace Express {
    export interface Request {
      decoded?: {
        userId?: string;
        email?: string;
      };
    }
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type GauntletResultModel = Model<IGauntletResult & Document>;
  }
}
