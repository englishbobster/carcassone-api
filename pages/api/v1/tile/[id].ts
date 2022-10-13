import type { NextApiRequest, NextApiResponse } from 'next'
import {findTileById} from "../../../../lib/tileRepository";

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
  const tileWithId = await findTileById(id as string);
  console.log(tileWithId)
  return res.status(200).json(tileWithId as Tile || {});
}

