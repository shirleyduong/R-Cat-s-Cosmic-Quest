"use client";
import { useState } from "react";
import Image from "next/image";
import asteroid from "../../public/asteroid.png"
import catClosed from "../../public/catClosed.png"
import catOpen from "../../public/catOpen.png"
import rocket1 from "../../public/rocket1.png"
import rocket2 from "../../public/rocket2.png"
import rocket3 from "../../public/rocket3.png"
import rocket4 from "../../public/rocket4.png"
import rocket5 from "../../public/rocket5.png"
import rocket6 from "../../public/rocket6.png"
import rocket7 from "../../public/rocket7.png"
import star1 from "../../public/star1.svg"
import star2 from "../../public/star2.svg"

const initialWorld = [
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,0,2,1,3,2,1,1,2,1,1,1,2,11,1,1,1,3,2,1,1,3],
    [3,1,3,1,3,1,3,3,3,3,1,1,3,3,3,3,1,3,1,3,1,3],
    [3,1,1,2,1,1,1,1,3,1,1,2,1,3,1,1,2,1,1,1,2,3],
    [3,3,3,1,3,1,3,1,3,1,3,3,1,3,1,3,1,3,1,3,3,3],
    [3,11,1,1,3,2,3,2,1,1,2,1,1,1,2,3,1,3,2,1,1,3],
    [3,1,3,2,3,1,3,1,3,3,3,3,3,3,1,3,11,3,1,3,1,3],
    [3,2,1,1,3,4,3,1,1,2,5,1,1,1,1,3,2,3,1,2,1,3],
    [3,3,3,3,3,11,3,1,3,1,3,3,1,3,1,3,1,3,3,3,3,3],
    [3,1,1,2,1,1,3,2,3,1,1,11,1,3,2,3,6,1,1,2,1,3],
    [3,2,3,3,3,3,3,1,3,1,3,3,1,3,1,3,3,3,3,3,1,3],
    [3,1,1,2,1,1,2,1,3,2,3,3,1,3,1,1,2,1,1,1,2,3],
    [3,1,3,3,3,3,3,1,3,1,1,1,2,3,2,3,3,3,3,3,1,3],
    [3,2,1,1,1,2,3,1,3,3,3,3,3,3,1,3,1,1,2,1,1,3],
    [3,3,3,3,3,1,3,1,7,11,1,1,1,1,1,3,2,3,3,3,3,3],
    [3,1,2,1,1,1,3,2,1,1,3,3,1,1,2,3,1,8,1,1,1,3],
    [3,1,3,1,3,2,3,1,3,1,1,2,1,3,1,3,1,3,11,3,2,3],
    [3,1,3,2,3,1,3,1,3,1,3,3,1,3,1,3,2,3,1,3,1,3],
    [3,9,3,1,3,1,3,1,3,2,3,3,1,3,10,3,1,3,2,3,1,3],
    [3,11,1,1,3,1,1,2,3,1,1,1,2,3,1,1,1,3,1,1,2,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
];

const Game = () => {
    const [world, setWorld] = useState(initialWorld);
    const [rCat, setRCat] = useState({ x: 1, y: 1 });
    const [score, setScore] = useState(0);
  
    const renderTile = (tile, rowIndex, colIndex) => {
      const tileMap = {
        1: star2,
        2: catClosed,
        4: rocket1,
        5: rocket2,
        6: rocket3,
        7: rocket4,
        8: rocket5,
        9: rocket6,
        10: rocket7,
        11: asteroid,
      };
  
      if (tile === 3) {
        return (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="w-4 h-4 bg-cats-purple-300"
          />
        );
      }
  
      const tileImage = tileMap[tile];
  
      return (
        <div key={`${rowIndex}-${colIndex}`} className="w-4 h-3">
          {tileImage && (
            <Image
              src={tileImage}
              alt={`Tile ${tile}`}
              className="w-[10px] h-[10px]"
            />
          )}
        </div>
      );
    };
  
    const renderWorld = () =>
      world.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((tile, colIndex) => renderTile(tile, rowIndex, colIndex))}
        </div>
      ));
  
    return (
      <div className="flex flex-col items-center space-y-4">
        <div id="world" className="grid gap-1">
          {renderWorld()}
        </div>
        <div
          id="rCat"
          className="absolute"
          style={{
            top: `${rCat.y * 20}px`,
            left: `${rCat.x * 20}px`,
            width: "20px",
            height: "20px",
          }}
        >
          <Image src={catOpen} alt="RCat" className="w-full h-full" />
        </div>
      </div>
    );
  };
  
  export default Game;