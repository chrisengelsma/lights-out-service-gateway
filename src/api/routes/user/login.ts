import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { generateJwt, verifyHash } from '../../../utils';
import config from '../../../config';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const logger: Logger = Container.get('logger');
  const userModel: Models.UserModel = Container.get('userModel');
  try {

    const { email, password } = req.body;

    const _user: any = await userModel.findOne({ email });

    if (_user) {
      if (await verifyHash(password, _user.passwordHash)) {

        const token = generateJwt(_user, config.jwt.secret);
        const lastLoginAt = new Date();

        const user: any = await userModel.findOneAndUpdate({ email }, { $set: { lastLoginAt } }, { new: true })
                                         .populate('gauntletResults')
                                         .exec();

        delete user._doc.passwordHash;

        return res.status(200).send({ user, token });
      }
    }

    return res.status(500).send('No user found with that email / password combination.');
  } catch (e) {
    logger.error(e);
    next(e);
  }
};
