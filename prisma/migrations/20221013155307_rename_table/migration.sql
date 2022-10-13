/*
  Warnings:

  - You are about to drop the `shuffled_tiles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "shuffled_tiles";

-- CreateTable
CREATE TABLE "game" (
    "gameid" TEXT NOT NULL,
    "order" INTEGER[],
    "current" INTEGER,

    CONSTRAINT "game_pkey" PRIMARY KEY ("gameid")
);
