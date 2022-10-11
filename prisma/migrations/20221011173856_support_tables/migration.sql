-- CreateTable
CREATE TABLE "shuffled_tiles" (
    "gameid" TEXT NOT NULL,
    "order" INTEGER[],
    "current" INTEGER NOT NULL,

    CONSTRAINT "shuffled_tiles_pkey" PRIMARY KEY ("gameid")
);

-- CreateTable
CREATE TABLE "played_cards" (
    "gameid" TEXT NOT NULL,
    "cardid" INTEGER NOT NULL,
    "rotation" INTEGER NOT NULL,

    CONSTRAINT "played_cards_pkey" PRIMARY KEY ("gameid","cardid")
);
