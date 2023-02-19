import debugMiddleware from './debug.middleware';
import jwtMiddleware from './jwt.middleware';

export default {
  debug: debugMiddleware,
  jwt: jwtMiddleware
};
