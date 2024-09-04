/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "confirmedMeasure" (
    "measure_uuid" TEXT NOT NULL,
    "confirmed_value" INTEGER NOT NULL,

    CONSTRAINT "confirmedMeasure_pkey" PRIMARY KEY ("measure_uuid")
);
