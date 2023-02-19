import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Logger } from 'winston';

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const logger: Logger = Container.get('logger');
  const userModel: Models.UserModel = Container.get('userModel');
  try {

    const { userId } = req.decoded;

    const user: any = await userModel.findById(userId)
                                     .populate('gauntletResults')
                                     .exec();

    if (!user) {
      return res.status(404).send('User not found');
    }

    delete user._doc.passwordHash;

    return res.status(200).send(user);
  } catch (e) {
    logger.error(e);
    next(e);
  }
};
