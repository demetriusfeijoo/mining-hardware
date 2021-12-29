import { PrismaClient } from "@prisma/client";

export class Prisma {
  private static instance: PrismaClient;

  private constructor() {}

  static getInstance() {
    Prisma.instance = Prisma.instance ?? new PrismaClient();

    return Prisma.instance;
  }
}
