import { Router } from 'express';
import middleware from '../../middleware';
import { ping } from './ping';

const route = Router();

export default (app: Router) => {
  app.use('/health', middleware.debug, route);

  route.get('/ping', ping);
};
