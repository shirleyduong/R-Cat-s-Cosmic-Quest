"use client";
import React, { useState } from "react";
import Image from "next/image";
import rocket from "../../public/rocket.svg";
import space from "../../public/space.svg";
import starss from "../../public/starss.svg";
import Game from "./Game";
import { motion } from "framer-motion";

const animations = {
  animate: {
    y: [0, -20, 0], // Moves up and down
  },
};

const Content = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);


  return (
    <div className="relative h-[70vh] bg-cats-blue-100 flex items-center text-white">
      {/* Background Images */}
      <Image
        src={space}
        alt="Background Space Illustration"
        className="absolute right-0 bottom-0 w-[60%] overflow-hidden"
      />
      <Image
        src={starss}
        alt="Background Stars Illustration"
        className="absolute opacity-60 right-0 bottom-0 w-screen overflow-hidden z-0"
      />

      {/* Main Content */}
      <div className="grid grid-cols-2 px-[10vw] py-[6vh] gap-[10vw] z-10">
        {/* Game Component */}
        <div>
          <Game score={score} setScore={setScore} gameOver={gameOver} setGameOver={setGameOver} />
        </div>

        {/* Information Section */}
        <div className="grid grid-rows-2">
          {/* Score and Rocket Section */}
          <div className="grid grid-cols-2 gap-[4vw]">
            {/* Score Display */}
            <div>
              <div className="p-1 border-2 rounded-2xl border-cats-purple-300">
                <div className="flex flex-row border-4 border-cats-purple-300 rounded-2xl p-2">
                  <p>
                    LITTER <br /> CLEANED:
                  </p>
                  <div className="text-2xl self-center ml-16">{score}</div>
                </div>
              </div>
            </div>

            {/* Rocket Animation */}
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-sm -translate-y-4">
                HELP PICK UP THE DEBRIS FROM THIS ROCKET!
              </p>
              <motion.div
                variants={animations}
                animate="animate"
                transition={{
                  duration: 2, // Duration of each cycle
                  repeat: Infinity, // Loop infinitely
                  ease: "easeInOut", // Smooth easing
                }}
              >
                <Image
                  src={rocket}
                  alt="Rocket Illustration"
                  className="w-[6vw] translate-y-8"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="relative bg-white rounded-lg text-center px-8 py-6 shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Game Over</h2>
            <p className="text-gray-700 mb-6">
              Oh no! You weren&apos;t able to collect all the debris.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
