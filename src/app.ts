import server from "./server";

server.listen(process.env.PORT, () =>
  console.log(`running on port: ${process.env.PORT}`)
);
