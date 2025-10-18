import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import boardsRouter from './routes/api/boards';

interface AppError extends Error {
  status?: number;
}

const app: Application = express();
const PORT: number = 5000;

app.use(cors());

app.use('/api/boards', boardsRouter);

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
