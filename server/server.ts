import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';

const dummyLetters = [
    {
        id: 1,
        publicId: "550e8400-e29b-41d4-a716-446655440000",
        writeDate: new Date("2026-09-10"),
        openDate: new Date("2027-09-10"),
        letter: "I hope you are still making things you love.",
    },
    {
        id: 2,
        publicId: "a8e92f34-124c-45aa-9871-23ae532cb531",
        writeDate: new Date("2026-08-21"),
        openDate: new Date("2030-01-01"),
        letter: "Please remember how excited you were about the future.",
    },
    {
        id: 3,
        publicId: crypto.randomUUID(),
        writeDate: new Date("2026-07-03"),
        openDate: new Date("2026-09-01"),
        letter: "Did everything work out the way you imagined?",
    },
    {
        id: 4,
        publicId: crypto.randomUUID(),
        writeDate: new Date("2025-12-24"),
        openDate: new Date("2026-12-24"),
        letter: "I hope this year was kinder to you.",
    },
];

const app: Express = express();
const PORT = 8080;

app.use(cors());

app.get('/api/home', (req: Request, res: Response) => {
  res.json({message: "Hello World!"})
});

app.get('/api/letters/:publicId', (req: Request, res: Response) => {
  const { publicId } = req.params;

  const letter = dummyLetters.find((letter) => letter.publicId === publicId);

  if (!letter) {
    return res.status(404).json({
      error: "Letter not found",
    });
  }
  
  console.log(`Letter requested with public id ${publicId}`);
  res.json(letter);
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});