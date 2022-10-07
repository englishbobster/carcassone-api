import React from "react";

type TileProps ={
  imageName: string
}

export const Tile = ({imageName}: TileProps) =>
    <div>
      <button>
        <img src={imageName}/>
      </button>
    </div>
