import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
  return res.status(200).send('pong');
};
