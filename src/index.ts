import express, { Express, Request, Response } from 'express';
import http, { Server } from 'http';
import { Server as socketServer } from 'socket.io';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnect } from './databases/connection';
import indexRoutes from './routes/index';
import path from 'path';

dotenv.config();

const app: Express = express();
const server: Server = http.createServer(app);
const io: socketServer = new socketServer(server);
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
// app.use('/api/v1', indexRoutes);

//io server
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log(msg);
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome To API Community App');
});

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
