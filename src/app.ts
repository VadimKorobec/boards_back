import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import boardsRouter from './routes/api/boards';

interface AppError extends Error {
  status?: number;
}

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/boards', boardsRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

export default app;
