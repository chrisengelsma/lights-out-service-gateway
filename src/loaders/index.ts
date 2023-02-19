import expressLoader from './express';
import dependencyInjectorLoader from './dependency-injector';
import mongooseLoader from './mongoose';
import modelsLoader from './models';
import Logger from './logger';

export default async ({ expressApp }) => {
  await mongooseLoader();
  Logger.info('DB loaded and connected');

  await dependencyInjectorLoader({
    models: modelsLoader(),
  });
  Logger.info('Dependency injector loaded');

  await expressLoader({ app: expressApp });
  Logger.info('Express loaded');
}

