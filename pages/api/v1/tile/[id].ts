import type { NextApiRequest, NextApiResponse } from 'next'
import {findTileById} from "../../../../lib/tileRepository";
import {tile} from "@prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<tile | {}>
) {
  const {id} = req.query;
  const tileWithId: tile|null = await findTileById(id as string);
  return res.status(200).json(tileWithId || {});
}

