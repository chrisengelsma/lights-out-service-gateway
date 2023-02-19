import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Logger } from 'winston';

export const getScores = async (req: Request, res: Response, next: NextFunction) => {
  const logger: Logger = Container.get('logger');
  const gauntletResultModel: Models.GauntletResultModel = Container.get('gauntletResultModel');
  try {
    const { userId } = req.decoded;
    const results = await gauntletResultModel.find({ userId }, {}, { sort: { createdAt: -1 } });
    return res.status(200).send(results);
  } catch (e) {
    logger.error(e);
    next(e);
  }
};
