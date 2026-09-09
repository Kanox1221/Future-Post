import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';

const app: Express = express();
const PORT = 8080;

app.use(cors());

app.get('/api/home', (req: Request, res: Response) => {
  res.json({message: "Hello World!"})
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});