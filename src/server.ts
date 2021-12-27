import express from "express";

require("dotenv-flow").config();

const server: express.Express = express();

server.listen(process.env.PORT, () =>
  console.log(`running on port: ${process.env.PORT}`)
);

export default server;
