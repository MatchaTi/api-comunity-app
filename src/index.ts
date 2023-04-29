import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnect } from './databases/connection';
import indexRoutes from './routes/index';
import multer from 'multer';
import { fileFilter, fileStorage } from './config/multer';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

//connect db
dbConnect();

//set cors
app.use(cors());

//set parse to json
app.use(express.json());

//set multer config
app.use('/images', express.static(path.join('images')));

//set template engine
app.set('view engine', 'ejs');

//set route
app.use('/api/v1', indexRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome To API Community App');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
