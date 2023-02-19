import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { generateHash, generateJwt } from '../../../utils';
import config from '../../../config';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const logger: Logger = Container.get('logger');
  const userModel: Models.UserModel = Container.get('userModel');
  try {

    const { email, password } = req.body;

    const exists = await userModel.exists({ email });

    if (exists) {
      return res.status(304).send('User already exists');
    }

    const passwordHash = await generateHash(password);
    const lastLoginAt = new Date();

    const user: any = await userModel
      .create({
        email,
        password,
        passwordHash,
        lastLoginAt
      });

    delete user._doc.passwordHash;

    const token = generateJwt(user, config.jwt.secret);

    // @ts-ignore
    delete user._doc.passwordHash;
    user.gauntletResults = [];

    return res.status(201).send({ user, token });
  } catch (e) {
    logger.error(e);
    next(e);
  }
};
