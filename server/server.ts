import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const PORT = 8080;

app.get('/api/home', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});