import React, { useEffect, useRef, useState } from 'react'

const StartProject = () => {

  
const [rotate, setrotate] = useState(0)
useEffect(()=>{
  window.addEventListener("mousemove",(e)=>{
      let mousex = e.clientX;
      let mousey = e.clientY;

      let deltaX = mousex - window.innerWidth/2;
      let deltay = mousey - window.innerHeight/2;

      var angle = Math.atan2(deltay,deltaX) * (180/Math.PI);
      setrotate(angle-180);
  })
})



  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.02" className='light-green pt-16 '>
      <div className='pr-5 pl-5  gap-1 text-9xl text-gray-900 font-bold flex flex-col justify-center items-center'>
        <h1>READY</h1>
        <h1>TO START</h1>
        <h1 className='flex justify-center items-center'>THE PROJECT?</h1>
      </div>


    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='-mt-10 pb-10 flex gap-10 justify-center items-center'>


      <div className='flex items-center justify-center rounded-full w-[15vw] h-[15vw] bg-zinc-100'>
        <div className='flex items-center justify-center bg-zinc-900 rounded-full w-2/3 h-2/3  '>
        <div style={{transform:`rotate(${rotate}deg)`}} className='w-16 h-16 rounded-full'>

        <div  className=' bg-zinc-100 w-1/2 h-1/2 rounded-full'></div>
        </div>
        </div>
        </div>

      <div className='flex items-center justify-center rounded-full w-[15vw] h-[15vw] bg-zinc-100'>
        <div className='flex items-center justify-center bg-zinc-900 rounded-full w-2/3 h-2/3  '>
        <div style={{transform:`rotate(${rotate}deg)`}} className='w-16 h-16 rounded-full'>

        <div  className=' bg-zinc-100 w-1/2 h-1/2 rounded-full'></div>
        </div>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default StartProject
