import React, { useEffect, useRef, useState } from 'react'

const Eyes = () => {
const [rotate, setrotate] = useState(0)
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
        let mousex = e.clientX;
        let mousey = e.clientY;

        let deltaX = mousex - window.innerWidth/2;
        let deltay = mousey - window.innerHeight/2;

        var angle = Math.atan2(deltay,deltaX) * (180/Math.PI);
        setrotate(angle-220);
    })
  })


  return (
    <div className='w-full h-screen'>
      <div data-scroll data-scroll-speed="-.09" className="relative bg-center bg-cover w-full h-screen bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] ">
        <div className='gap-7 flex top-1/2 left-1/2 absolute w-1/2 h-96  -translate-x-[50%] -translate-y-[50%] justify-center items-center'>
        <div className='flex items-center justify-center rounded-full w-[15vw] h-[15vw] bg-zinc-100'>
          <div className="flex items-center justify-center bg-zinc-900 rounded-full w-2/3 h-2/3  ">
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

    </div>
  )
}


export default Eyes
