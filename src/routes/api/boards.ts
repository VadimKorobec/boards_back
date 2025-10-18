import express, { NextFunction, Request, Response, Router } from 'express';
import HttpError from '../../helpers/HttpError';

const router: Router = express.Router();

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

router.post('/', (req: Request, res: Response): void => {
  res.send({ message: 'Board on Id' });
});

router.put('/:id', (req: Request, res: Response): void => {
  res.send({ message: 'Board on Id' });
});

router.delete('/:id', (req: Request, res: Response): void => {
  res.send({ message: 'Board on Id' });
});

export default router;
