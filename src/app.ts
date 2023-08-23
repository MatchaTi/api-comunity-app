import express, { Express, Response, Request } from 'express';
import cors from 'cors';
import rootRoute from './routes/rootRoute';
import path from 'path';
import cookieParser from 'cookie-parser';
import limiter from './config/rateLimiter';

const app: Express = express();

//set cors
app.use(cors());

//set limiter
app.use(limiter);

//set cookie
app.use(cookieParser());

//set parse to json
app.use(express.json());

//set url
app.use(express.urlencoded({ extended: true }));

//set multer config
app.use('/api/v1/images', express.static(path.join('api/v1/images')));

//set template engine
app.set('view engine', 'ejs');

//set route
app.use('/api/v1', rootRoute);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ data: 'hello world' });
});

export default app;
