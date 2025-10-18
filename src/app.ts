import express, { Application } from 'express';
import cors from 'cors';

import boardsRouter from './routes/api/boards';

const app: Application = express();
const PORT: number = 5000;

app.use(cors());

app.use('/api/boards', boardsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
