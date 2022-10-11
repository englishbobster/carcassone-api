import React, {useState} from "react";

type TileRotations = 0 | 90 | 180 | 270 | 360
type TileProps = {
  imageName: string
  startRotation: TileRotations
}

export const Tile = (tileProps: TileProps) => {

  const [rotation, setRotation] = useState(tileProps.startRotation)

  function rotateTile() {
    let currentRotation:TileRotations = (rotation%360 + 90) as TileRotations;
    return () => setRotation(currentRotation);
  }

  let imageStyle = {transform: `rotate(${rotation}deg)`};

  return (
      <div>
          <img src={tileProps.imageName} className="tile" style={imageStyle} onClick={rotateTile()} alt={"TILE"}/>
      </div>
  );
}

