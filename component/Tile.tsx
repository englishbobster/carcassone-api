import React, {useState} from "react";

type TileProps = {
  imageName: string
}

export const Tile = (tileProps: TileProps) => {

  const [rotation, setRotation] = useState(0)

  function rotateTile() {
    let currentRotation = rotation%360 + 90;
    return () => setRotation(currentRotation);
  }

  return (
      <div>
        <button>
          <img src={tileProps.imageName} style={{transform: `rotate(${ rotation }deg)` }} onClick={rotateTile()}/>
        </button>
      </div>
  );
}
