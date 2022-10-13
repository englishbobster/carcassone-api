import prisma from "./prisma";

export async function saveTileOrder(shuffled: number[]) {
  const game = await prisma.shuffled_tiles.create({
    data: {
      order: shuffled
    }
  })
  return game;
}
