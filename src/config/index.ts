import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const jwtSecret = process.env.JWT_SECRET || 'LightsOut2023';

const envFound = dotenv.config();
if (!envFound) {
  // This should crash the whole process.
  throw new Error('Could not find a .env file');
}

export default {
  /// Port
  port: parseInt(process.env.PORT, 10),

  /// Mongo
  db: {
    uri: process.env.MONGODB_URI
  },

  /// Winston logger
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  /// Api
  api: {
    prefix: '/api',
  },

  jwt: {
    secret: jwtSecret
  }
};
