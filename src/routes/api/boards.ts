import express, { Request, Response, Router } from 'express';
const router: Router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  res.send({ message: 'All boards' });
});

router.get('/:id', (req: Request, res: Response): void => {
  res.send({ message: 'Board on Id' });
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
