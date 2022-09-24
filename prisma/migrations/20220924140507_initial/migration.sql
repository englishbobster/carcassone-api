-- CreateTable
CREATE TABLE "tile" (
    "id" SERIAL NOT NULL,
    "rotation" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "tile_pkey" PRIMARY KEY ("id")
);
