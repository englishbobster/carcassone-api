import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/prisma';

type Tile = {
  id: number,
  rotation: number,
  image: string,
  description: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Tile>
) {
  const {id} = req.query;
  const tileWithId = await prisma.tile.findUnique({
    where: {
      id: parseInt(id as string)
    }
  });
  console.log(tileWithId)
  return res.status(200).json(tileWithId as Tile || {});
}

