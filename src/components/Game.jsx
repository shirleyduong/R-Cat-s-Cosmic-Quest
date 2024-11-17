"use client";
import { useState, useEffect } from "react";
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
    [3,12,2,1,3,2,1,1,2,1,1,1,2,11,1,1,1,3,2,1,1,3],
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

const Game = ({ score, setScore }) => {
  const [world, setWorld] = useState(initialWorld);
  const [rCat, setRCat] = useState({ x: 1, y: 1 });
  const [gameOver, setGameOver] = useState(false);

  const tileMap = {
    1: star1,
    2: star2,
    4: rocket1,
    5: rocket2,
    6: rocket3,
    7: rocket4,
    8: rocket5,
    9: rocket6,
    10: rocket7,
    11: asteroid,
    12: catOpen,
    13: catClosed,
  };

  const handleKeyPress = (event) => {
    if (gameOver) return;

    const { x, y } = rCat;
    let newX = x;
    let newY = y;

    if (event.key === "ArrowUp") newY = Math.max(0, y - 1); // Move up
    if (event.key === "ArrowDown") newY = Math.min(world.length - 1, y + 1); // Move down
    if (event.key === "ArrowLeft") newX = Math.max(0, x - 1); // Move left
    if (event.key === "ArrowRight") newX = Math.min(world[0].length - 1, x + 1); // Move right

    const tile = world[newY][newX];
    
    if (tile === 11) {
      setGameOver(true);
      return;
    }

    if (tile !== 3) {
      world[y][x] = 0;
      world[newY][newX] = 12;

      setRCat({ x: newX, y: newY });

      if(tile === 1 || tile === 2){
        setScore(score + 10);
      }

      if (tile >= 4 && tile <= 10) {
        setScore(score + 30);
      }
    }
  };

  useEffect(() => {
    const onKeyDown = (event) => handleKeyPress(event);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [rCat, world, gameOver]);

  const renderTile = (tile, rowIndex, colIndex) => {
    if (tile === 3) {
        if(rowIndex === 0 && colIndex === 0){
            return (
                <div key={`${rowIndex}-${colIndex}`} className="w-[1.5rem] h-[1.5rem] bg-cats-purple-300 rounded-tl" />
            );
        }else if(rowIndex === 0 && colIndex === 21){
            return (
                <div key={`${rowIndex}-${colIndex}`} className="w-[1.5rem] h-[1.5rem] bg-cats-purple-300 rounded-tr" />
            );
        }else if(rowIndex === 20 && colIndex === 0){
            return (
                <div key={`${rowIndex}-${colIndex}`} className="w-[1.5rem] h-[1.5rem] bg-cats-purple-300 rounded-bl" />
            );
        }else if(rowIndex === 20 && colIndex === 21){
            return (
                <div key={`${rowIndex}-${colIndex}`} className="w-[1.5rem] h-[1.5rem] bg-cats-purple-300 rounded-br" />
            );
        }
        else{
            return (
                <div key={`${rowIndex}-${colIndex}`} className="w-[1.5rem] h-[1.5rem] bg-cats-purple-300" />
              );
        }
    }

    const tileImage = tileMap[tile];
    return (
      <div key={`${rowIndex}-${colIndex}`} className="w-[1.5rem] h-[1.5rem] flex items-center justify-center">
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
      <div id="world">
        {renderWorld()}
      </div>
    </div>
  );
};

export default Game;