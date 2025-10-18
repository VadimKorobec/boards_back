import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

app.get('/boards', (req: Request, res: Response) => {
  console.log(req.url);
  console.log(req.method);
  res.send('<h2>Boards page</h2>');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
