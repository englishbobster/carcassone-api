-- CreateTable
CREATE TABLE "tile" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "tile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game" (
    "game_id" TEXT NOT NULL,
    "order" INTEGER[],
    "current" INTEGER,

    CONSTRAINT "game_pkey" PRIMARY KEY ("game_id")
);

-- CreateTable
CREATE TABLE "played" (
    "game_id" TEXT NOT NULL,
    "card_id" INTEGER NOT NULL,
    "rotation" INTEGER NOT NULL,

    CONSTRAINT "played_pkey" PRIMARY KEY ("game_id","card_id")
);
