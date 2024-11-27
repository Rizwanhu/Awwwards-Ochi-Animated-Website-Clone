import React, { useState } from 'react'
import { motion } from "framer-motion"


export const Featured = () => {
  const [isHoveringFyde, setHoveringFyde] = useState(false)
  const [isHoveringVice, setHoveringVice] = useState(false)
  return (
    <div data-scroll data-scroll-section className='bg-zinc-800 -z-10 w-full h-fit px-10 py-6 bg-white'>
      <div className='pt-10 border-b text-6xl pb-10'>
        <h2>Featured Projects</h2>
      </div>
      <div className='flex gap-5 mt-4'>
        <div className='w-1/2 pt-5'>
          <h4 className='text-[1.6vw]'>FYDE</h4>
          <div onMouseEnter={() => setHoveringFyde(true)} onMouseLeave={() => setHoveringFyde(false)} className='mt-2 relative'>
            <img  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
            <h1 className='absolute flex overflow-hidden z-10 text-6xl font-bold text-[#CDEA68] right-0  translate-x-1/2 top-1/2'>
              {'FYDE'.split(" ").map((item, index) => (
                <motion.span initial={{ y: "100%" }} animate={isHoveringFyde ? { y: "0" } : { y: "100%" }} transition={{ease: [0.33, 1, 0.68, 1], delay: index*.06}}>{item}</motion.span>
              ))}
            </h1>
          </div>
        </div>
        <div className='w-1/2 pt-5'>
          <h4 className='text-[1.6vw]'>VICE</h4>
          <div onMouseEnter={() => setHoveringVice(true)} onMouseLeave={() => setHoveringVice(false)} className='mt-2 relative'>
            <img  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
            <h1 className='absolute flex overflow-hidden text-6xl font-bold text-[#CDEA68]  -translate-x-1/2  top-1/2'>
              {'VISE'.split(" ").map((item, index) => (
                <motion.span initial={{ y: "100%" }} animate={isHoveringVice ? { y: "0" } : { y: "100%" }} transition={{ease: [0.33, 1, 0.68, 1], delay: index*.06}}>{item}</motion.span>
              ))}
            </h1>
          </div>
        </div>
      </div>
      <div className='mt-4 flex items-center justify-center '>
        <button className='px-4 py-2 bg-black text-white rounded-full' type="button">VIEW ALL CASE STUDIES</button>
      </div>
    </div>
  )
}

export default Featured