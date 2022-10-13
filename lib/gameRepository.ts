import prisma from "./prisma";

export async function saveTileOrder(shuffled: number[]) {
  const game = await prisma.game.create({
    data: {
      order: shuffled
    }
  })
  return game;
}
