require("dotenv-flow").config();

import express, { Request, Response } from "express";
import cors from "cors";
import bodyparser from "body-parser";
import auth from "./routes/auth";
import { authorize } from "./middlewares/authorize";

const server: express.Express = express();

server.use(cors());
server.use(bodyparser.json());
server.use("/status", authorize, (req: Request, res: Response) =>
  res.send("up")
);
server.use("/", auth);

export default server;
