import { Request, Response } from 'express';
import express from 'express';

export const app = express();

// Add middleware to parse JSON request bodies
app.use(express.json());

app.post("/sum", (req: Request, res: Response) : any => {
    const a = req.body.a;
    const b = req.body.b;

    return res.status(200).json({ result: a + b });
});
