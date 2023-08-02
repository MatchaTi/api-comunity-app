import app from './app';
import http, { Server } from 'http';
import { socketInitServer } from './config/socket';
import { Server as socketServer } from 'socket.io';
import { socketInitialize } from './controller/socket/socketController';
import { dbConnect } from './databases/connection';
import dotenv from 'dotenv';

const server: Server = http.createServer(app);

const port = process.env.PORT || 5000;
const io: socketServer = socketInitServer(server);

dotenv.config();

//connect db
dbConnect();

//socket server
socketInitialize(io);

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
