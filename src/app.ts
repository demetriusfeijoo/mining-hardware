import server from "./server";
import { PrismaClient } from "@prisma/client";

server.listen(process.env.PORT, () =>
  console.log(`running on port: ${process.env.PORT}`)
);

const prisma = new PrismaClient();
