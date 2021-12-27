require("dotenv-flow").config();

import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import routes from "./routes";

const server: express.Express = express();

server.use(cors());
server.use(bodyparser.json());
server.use("/", routes);

export default server;
