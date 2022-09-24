// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Tile = {
  id: number,
  rotation: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tile>
) {
  res.status(200).json({
    id: 1,
    rotation: 0
  })
}
