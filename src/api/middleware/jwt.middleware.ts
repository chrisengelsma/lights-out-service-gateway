import jwt from 'jsonwebtoken';
import { Logger } from 'winston';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import config from '../../config';

const jwtMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const logger: Logger = Container.get('logger');
  try {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = await jwt.verify(token, config.jwt.secret);
      Container.set('authHeader', { 'Authorization': req.headers.authorization });
      if (decoded) {
        req.decoded = decoded;
        return next();
      } else {
        return res.status(401).send({ error: 'Invalid token' });
      }
    } else {
      return res.status(401).send({ error: 'No auth token provided' });
    }
  } catch (e) {
    logger.error(e);
    return next(e);
  }
};

export default jwtMiddleware;

