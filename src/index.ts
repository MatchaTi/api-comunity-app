import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnect } from "./databases/connection";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

dbConnect();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To API Community App");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
