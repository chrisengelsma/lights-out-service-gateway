import { Router } from 'express';
import health from './routes/health';
import user from './routes/user';
import gauntlet from './routes/gauntlet';

export default () => {
  const app = Router();

  health(app);
  user(app);
  gauntlet(app);

  return app;
};
