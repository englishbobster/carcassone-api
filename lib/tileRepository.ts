import prisma from "./prisma";
import {tile} from '@prisma/client';


export async function findTileById(id: string | string[]) {
  const tileWithId: tile|null = await prisma.tile.findUnique({
    where: {
      id: parseInt(id as string)
    }
  });
  return tileWithId;
}

export async function countAvailableTiles() {
  const {_all: tileCount} = await prisma.tile.count({
    select: {
      _all: true
    }
  });
  return tileCount;
}
