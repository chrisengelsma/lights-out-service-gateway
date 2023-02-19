import 'reflect-metadata'; // To use @ decorators
import config from './config';
import express from 'express';
import Logger from './loaders/logger';

async function startServer() {
  const app = express();

  await require('./loaders').default({ expressApp: app });

  app.listen(config.port, '0.0.0.0', err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
    }
    Logger.info(`gateway-server listening on port ${config.port}`);
  });
}

startServer();
