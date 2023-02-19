import { Router } from 'express';
import middleware from '../../middleware';
import { addScore } from './add-score';
import { getScores } from './get-scores';

const route = Router();

export default (app: Router) => {
  app.use('/gauntlet', middleware.debug, middleware.jwt, route);

  route.post('/', addScore);
  route.get('/', getScores);
};
