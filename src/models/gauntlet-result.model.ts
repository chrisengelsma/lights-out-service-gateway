import mongoose from 'mongoose';
import { IGauntletResult } from '../interfaces';

const GauntletResultModel = new mongoose.Schema(
  {
    clicks: Number,
    puzzleNo: Number,
    startDate: Date,
    endDate: Date,
    userId: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: { createdAt: true, updatedAt: false }, }
);

GauntletResultModel.index({ date: 1 });

export default mongoose.model<IGauntletResult & mongoose.Document>('GauntletResult', GauntletResultModel);
