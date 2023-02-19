import { Container } from 'typedi';
import { Logger } from 'winston';
import { NextFunction, Request, Response } from 'express';

const debugMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const logger: Logger = Container.get('logger');
  try {
    logger.debug(`[${req.method}] ${req.originalUrl}`);
    next();
  } catch (e) {
    logger.error(e);
    return next(e);
  }
};

export default debugMiddleware;
