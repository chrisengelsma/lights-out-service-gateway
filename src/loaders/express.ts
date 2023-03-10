import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../api';
import config from '../config';
import methodOverride from 'method-override';

export default ({ app }: { app: express.Application }) => {
  app.enable('trust proxy');

  const corsOptions: any = {
    origin: [
      'http://localhost:8080',
      'http://127.0.0.1:8080',
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'https://lights-out.app',
    ],
    credentials: true,
  };

  app.use(cors(corsOptions));

  app.use(methodOverride());
  app.use(bodyParser.json());

  app.use(config.api.prefix, routes());

  app.use((req, res, next) => {
    const err = new Error('Not found');
    err['status'] = 404;
    next(err);
  });

  // Error handlers
  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: { message: err.message }
    });
  });

}
