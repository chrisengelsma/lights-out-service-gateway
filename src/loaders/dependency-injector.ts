import { Container } from 'typedi';
import LoggerInstance from './logger';

export default ({ models }: { models: { name: string; model: any }[] }) => {
  try {
    models.forEach(m => {
      Container.set(m.name, m.model);
      LoggerInstance.info(m.name + ' injected into container');
    });

    Container.set('logger', LoggerInstance);
    LoggerInstance.info('Logger injected into container');
  } catch (e) {
    LoggerInstance.error('Error on dependency injector loader: %o', e);
    throw e;
  }
};
