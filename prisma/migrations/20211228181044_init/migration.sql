-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'M2M');

-- CreateTable
CREATE TABLE "User" (
    "id" VARCHAR(36) NOT NULL,
    "firstName" VARCHAR(120) NOT NULL,
    "lastName" VARCHAR(120) NOT NULL,
    "email" VARCHAR(120) NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'USER',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
