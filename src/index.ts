import express, { Express, Request, Response } from 'express';
import http, { Server } from 'http';
import { Server as socketServer } from 'socket.io';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnect } from './databases/connection';
import rootRoute from './routes/rootRoute';
import path from 'path';
import { socketInitServer } from './config/socket';
import { socketInitialize } from './controller/socket/socketController';

dotenv.config();

const app: Express = express();
const server: Server = http.createServer(app);

const port = process.env.PORT || 5000;
const io: socketServer = socketInitServer(server);

//connect db
dbConnect();

//set cors
app.use(cors());

//set parse to json
app.use(express.json());

//set url
app.use(express.urlencoded({ extended: true }));

//set multer config
app.use('/images', express.static(path.join('images')));

//set template engine
app.set('view engine', 'ejs');

//set route
app.use('/api/v1', rootRoute);

//socket server
socketInitialize(io);

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
