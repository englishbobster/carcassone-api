export {}

type coord = {
  x: number;
  y: number;
}

type tile =  {
  image: string;
  coordinate: coord;
  rotation: number;
}

type player = {
  tileInHand: tile;
  tilesPlayed: tile[];
}

type board = {
  placedTiles: tile[];
  availablePlacements: coord[];
}

type game = {
  currentTiles: number[];
  currentTurn: number;
  players: player[];
  board: board;
}
