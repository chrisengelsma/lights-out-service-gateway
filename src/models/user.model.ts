import mongoose from 'mongoose';
import { IUser } from '../interfaces';

const UserModel = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    displayName: String,
    passwordHash: { type: String, required: true },
    gauntletResults: [ {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'GauntletResult'
    } ],
    lastLoginAt: Date,
    createdAt: Date,
    updatedAt: Date,
  },
  { timestamps: true }
);

UserModel.index({ createdAt: 1 });
UserModel.index({ updatedAt: 1 });
UserModel.index({ email: 1 });

export default mongoose.model<IUser & mongoose.Document>('User', UserModel);
