import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();
const PORT: number = 5000;

app.use(cors());

app.get('/', (req: Request, res: Response): void => {
  res.send({ message: "Miley, what's good?" });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
