import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';

/**
 * Generates a JWT token for a user.
 * @param user   the user this token is for.
 * @param secret the secret for this token.
 */
export function generateJwt(user: IUser, secret: string) {
  try {
    const payload = {
      userId: user._id,
      email: user.email
    };
    return jwt.sign(payload, secret);
  } catch (e) {
    return e;
  }
};
