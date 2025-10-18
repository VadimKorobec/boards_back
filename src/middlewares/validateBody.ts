import { Request, Response, NextFunction } from 'express';
import type { ObjectSchema } from 'joi';
import HttpError from '../helpers/HttpError';

export const validateBody = (schema: ObjectSchema) => {
  const func = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};
