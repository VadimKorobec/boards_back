import express, { NextFunction, Request, Response, Router } from 'express';
import Joi from 'joi';
import HttpError from '../../helpers/HttpError';

const router: Router = express.Router();

const addSchema = Joi.object({
  title: Joi.string().required(),
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await boards.getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await boards.getById(id);
    if (!result) {
      throw HttpError(404, 'Not found');
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post('/', (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const result = await boards.add(req.body);
    // res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', (req: Request, res: Response): void => {
  res.send({ message: 'Board on Id' });
});

export default router;
