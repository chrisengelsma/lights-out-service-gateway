import jwt from 'jsonwebtoken';

/**
 * Decodes a JWT token.
 * @param token the jwt token.
 * @param secret the jwt secret.
 */
export function decodeJwt(token: string, secret: string) {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return null;
  }
};
