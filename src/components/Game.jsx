import React from 'react'
import Image from 'next/image'
import temp from "../../public/temp.svg"
const Game = () => {
  return (
    <div className='h-[74vh] bg-black flex items-center text-white'>
      <div className='grid grid-cols-2 px-[10vw] py-[6vh] gap-[10vw]'>
        <div>
            <Image src={temp} alt={temp} className='w-[30vw]'/>
        </div>
        <div className='grid grid-rows-2'>
            <div className='grid grid-cols-2 gap-[2vh]'>
                <div>
                    <div className='p-1 border-2 rounded-2xl border-cats-purple-300'>
                        <div className='border-4 border-cats-purple-300 rounded-2xl p-2'>
                            LITTER <br/> CLEANED:
                        </div>
                    </div>
                    <div className=' flex justify-center items-center px-4 py-2 mt-4 rounded-full border-4 border-cats-purple-300'>
                        PLAY AGAIN
                    </div>
                </div>
                </div>
                
        </div>
      </div>
    </div>
  )
}

export default Game
