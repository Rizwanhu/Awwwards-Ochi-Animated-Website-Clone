import { motion } from 'framer-motion';
import React from 'react'

const Landingpage = () => {

  const phrases = ['WE CREATE', 'EYE-OPENING', 'PRESENTATIONS'];
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-[31rem]  pt-14 mb-5 '>

<div className="founder pb-32 px-10">
      {phrases.map((phrase, index) => (
        <div className='flex'>

          {index === 1 &&  (
             <motion.div initial={{width:0}} animate={{width:"8.625vw"}} transition={{ease:[0.76,0,0.24,1], duration:1 }} className=" flex w-24 ml-2 h-16 rounded-md mr-5 relative top-2  bg-red-400">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                alt="Image description"
               
              />
            </motion.div>)}
          <h1 key={index} className="text-8xl leading-[4.75rem] ">
            {phrase}
          </h1>
        </div>
        
      ))}
    </div>


      <div className='mt-7'>
      <hr className="w-full bg-gray-200 border-0 h-px" />
      <div className=' flex justify-between px-5 pt-3'>
        <h1>For public and private companies</h1>
        <h1>From the first pitch to IPO</h1>
        <button className='border-[1.5px] border-white rounded-full bg-gray-700 text-white px-5 py-1 hover:bg-white hover:text-black hover:font-medium '>START THE PROJECT</button>
      </div>
      </div>



    </div>
  )
}

export default Landingpage
