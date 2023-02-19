import { Router } from 'express';
import middleware from '../../middleware';
import { login } from './login';
import { register } from './register';
import { celebrate, Joi } from 'celebrate';
import { getUser } from './get-user';

const route = Router();

export default (app: Router) => {
  app.use('/user', middleware.debug, route);

  route.get('/', middleware.jwt, getUser);

  route.post('/login',
    celebrate({
      body: {
        email: Joi.string().required(),
        password: Joi.string().required(),
      }
    }),
    login);

  route.post('/register',
    celebrate({
      body: {
        email: Joi.string().required(),
        password: Joi.string().required(),
      }
    }),
    register);
};
