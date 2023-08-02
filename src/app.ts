import express, { Express, Response, Request } from 'express';
// import http, { Server } from 'http';
// import { Server as socketServer } from 'socket.io';
// import dotenv from 'dotenv';
import cors from 'cors';
// import { dbConnect } from './databases/connection';
import rootRoute from './routes/rootRoute';
import path from 'path';
// import { socketInitServer } from './config/socket';
// import { socketInitialize } from './controller/socket/socketController';

// dotenv.config();

const app: Express = express();

// //connect db
// dbConnect();

//set cors
app.use(cors());

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

//socket server
// socketInitialize(io);

// server.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });

export default app;
