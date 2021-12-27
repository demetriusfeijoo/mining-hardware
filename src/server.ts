import express, { Request, Response } from "express";
import cors from "cors";
import bodyparser from "body-parser";

require("dotenv-flow").config();

const server: express.Express = express();

server.use(cors());
server.use(bodyparser.json());

server.get("/status", (req: Request, res: Response) => res.send("running"));

export default server;
