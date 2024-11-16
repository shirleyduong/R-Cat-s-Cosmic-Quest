import React, { useState } from 'react';

const worldData = [
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
    const [rCat, setRCat] = useState({ x: 1, y: 1 });
    const [score, setScore] = useState(0);
  
    const displayWorld = () => {
      return worldData.map((row, i) => (
        <div key={i} className="flex">
          {row.map((cell, j) => {
            let cellClass = '';
            switch (cell) {
              case 0:
                cellClass = '/catClosed.png';
                break;
              case 1:
                cellClass = '/starOpen.png';
                break;
              case 2:
                cellClass = '✦';
                break;
              case 3:
                cellClass = 'bg-purple-300';
                break;
              case 4:
                cellClass = '/rocket7.png';
                break;
              case 5:
                cellClass = '/rocket1.png';
                break;
              case 6:
                cellClass = '/rocket2.png';
                break;
              case 7:
                cellClass = '/rocket3.png';
                break;
              case 8:
                cellClass = '/rocket4.png';
                break;
              case 9:
                cellClass = '/rocket5.png';
                break;
              case 10:
                cellClass = '/rocket6.png';
                break;                
              case 11:
                cellClass = '/asteroid.png';
                break;
              default:
                break;
            }
            return <div key={j} className={`w-5 h-5 ${cellClass}`}></div>;
          })}
        </div>
      ));
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-3xl font-bold mb-4">RCat Cosmic Quest</h1>
        <div id="world" className="grid gap-1">
          {displayWorld()}
        </div>
        <div
          id="rCat"
          className="absolute bg-pink-500 w-5 h-5"
          style={{
            top: rCat.y * 20,
            left: rCat.x * 20,
          }}
        ></div>
        <div id="score" className="mt-4 text-xl">
          Score: {score}
        </div>
        <div className="mt-4">
          <button
            onClick={() => setScore(score + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Increment Score
          </button>
          <button
            onClick={() => setRCat({ x: 1, y: 1 })}
            className="px-4 py-2 bg-green-500 text-white rounded ml-4"
          >
            Reset Position
          </button>
        </div>
      </div>
    );
  };
  
  export default Game;