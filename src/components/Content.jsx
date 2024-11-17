"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import rocket from "../../public/rocket.svg";
import Game from './Game';
import { motion } from "framer-motion";

const animations = {
  animate: {
    y: [0, -20, 0], // Moves up and down
    rotate: [0, 50, 0], // Rotates
  },
};

const Content = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="h-[74vh] bg-cats-blue-100 flex items-center text-white">
      <div className="grid grid-cols-2 px-[10vw] py-[6vh] gap-[10vw]">
        <div>
          <Game score={score} setScore={setScore} />
        </div>
        <div className='grid grid-rows-2'>
          <div className='grid grid-cols-2 gap-[4vw]'>
            <div>
              <div className='p-1 border-2 rounded-2xl border-cats-purple-300'>
                <div className='flex flex-row border-4 border-cats-purple-300 rounded-2xl p-2'>
                  <p>
                    LITTER <br/> CLEANED: 
                  </p>
                  <div className='text-2xl self-center ml-16'>
                    {score}
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <p className='-translate-y-8'>HELP PICK UP THE DEBRIS FROM THIS ROCKET!</p>
              <Image src={rocket} alt={rocket} className='w-[6vw] -translate-y-6'/>
          </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="-translate-y-8">HELP PICK UP THE DEBRIS FROM THIS ROCKET!</p>
              <motion.div
                variants={animations}
                animate="animate"
                transition={{
                  duration: 8, // Duration of each cycle
                  repeat: Infinity, // Loop infinitely
                  ease: "easeInOut", // Smooth easing
                }}
              >
                <Image
                  src={rocket}
                  alt="Rocket"
                  className="w-[6vw] -translate-y-6 rotate-45"
                />
              </motion.div>
            </div>
          </div>
          <div className="text-sm">
            <p>
              WHAT IS R’CAT’S GOAL ?
              <br />
              <br />
              Planet Earth is not the only place with a litter issue. Beyond our atmosphere, 
              in the expanse of the Milky Way Galaxy, there is already a significant amount of 
              space waste or space debris. These space debris are fragments from rockets, satellites, 
              and other creations that have been sent to space. The large issue with this, however, 
              is that there have been instances of debris falling back through the atmosphere colliding 
              into the ground. R’Cat aims to spread awareness about this pressing issue in hopes of 
              inspiring people to take action, to prevent potential damage and larger issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
