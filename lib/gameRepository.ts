import prisma from "./prisma";
import {game} from '@prisma/client';

export async function saveTileOrder(shuffled: number[]) {
  const game: game = await prisma.game.create({
    data: {
      order: shuffled
    }
  })
  return game;
}
