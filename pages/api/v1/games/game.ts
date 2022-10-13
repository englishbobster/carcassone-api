import type {NextApiRequest, NextApiResponse} from 'next'
import {countAvailableTiles} from "../../../../lib/tileRepository";
import {saveTileOrder} from "../../../../lib/gameRepository";

type Game = {
  gameId: string
}

const shuffleArray = (nrOfTiles: number) => {
  let availableTiles = Array.from(Array(nrOfTiles).keys()).map( i => i + 1 )
  for (let i = availableTiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = availableTiles[i];
    availableTiles[i] = availableTiles[j];
    availableTiles[j] = temp;
  }
  return availableTiles;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Game>
) {
  const tileCount = await countAvailableTiles();

  const shuffled = shuffleArray(tileCount);

  const game = await saveTileOrder(shuffled);
  return res.status(200).json({gameId: game.gameid});
}
