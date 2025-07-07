import { Request, Response } from 'express';
import express from 'express';
import {prisma} from './db';

export const app = express();

// Add middleware to parse JSON request bodies
app.use(express.json());

app.post("/sum", async (req: Request, res: Response) : Promise<any> => {
    const a = req.body.a;
    const b = req.body.b;

    const result = a + b;

    await prisma.request.create({
        data : {
            a: a,
            b: b,
            result,
        }
    })

    return res.json({ result });
});
