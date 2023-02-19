import mongoose, { Mongoose } from 'mongoose';
import config from '../config';

export default async (): Promise<any> => {
  const url = config.db.uri;

  const connection: Mongoose = await mongoose.connect(url);
  return connection.connection.db;
};
