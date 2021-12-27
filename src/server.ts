import express from "express";

const server: express.Express = express();

server.listen(5002, () => console.log("running"));

export default server;
