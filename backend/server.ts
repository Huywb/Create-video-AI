import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from "cors";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhook from './controller/clerk.js';
import  userRouter from './routes/user.Routes.js';
import  projectRouter from './routes/project.Routes.js';
dotenv.config();

const app = express();


app.use(cors())

app.post('/api/clerk',express.raw({ type: 'application/json' }),clerkWebhook)

app.use(express.json());
app.use(clerkMiddleware())
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.use('/api/v1/user', userRouter)
app.use('/api/v1/project', projectRouter)


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});