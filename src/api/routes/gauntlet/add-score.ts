import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Logger } from 'winston';

export const addScore = async (req: Request, res: Response, next: NextFunction) => {
  const logger: Logger = Container.get('logger');
  const gauntletResultModel: Models.GauntletResultModel = Container.get('gauntletResultModel');
  const userModel: Models.UserModel = Container.get('userModel');

  try {
    const { userId } = req.decoded;

    const gauntletResult: any = await gauntletResultModel.create({ ...req.body, userId });
    await userModel.findByIdAndUpdate(userId, { $push: { gauntletResults: gauntletResult._id }})

    return res.status(201).send(gauntletResult);
  } catch (e) {
    logger.error(e);
    next(e);
  }
};
