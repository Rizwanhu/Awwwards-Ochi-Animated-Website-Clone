import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Reviews = () => {
  return (
    <div>
      <h1 className='text-5xl m-10 pt-10'>Clients’ reviews</h1>

      <hr className='border border-gray-400' />
      <div className=' mt-14 flex justify-between mr-5 ml-5 pr-5 pl-5'>
        <h1>Karman Ventures</h1>
        <h1>Services:</h1>
        <h1>William Barnes</h1>
        <h1 className=' text-gray-300 text-xl'>READ</h1>
      </div>

    <div className='pt-14 flex justify-center items-center '>

      <div className=''>

        <div className='h-80 w-96 flex flex-col'>
            {/* <button className='rounded-xl w-10 bg-red-700 capitalize uppercase'>investor deck</button> */}
            <div className="start-the-project  flex items-center gap-5 mb-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">
            INVESTOR DECK
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-zinc-500 flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
              {/* <GoArrowUpRight /> */}

            </span>
          </div>
        </div>
            {/* <button className='bg-pink-400'>sales deck</button> */}
            <div className=' w-96 flex gap-5'>
            <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">
            SALES DECK
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-zinc-500 flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
              {/* <GoArrowUpRight /> */}

            </span>
          </div>
          </div>
      </div>
        </div>

        <div className='w-96'>
            <img className='rounded-xl w-32 mb-5' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
            <h1>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</h1>
        </div>
    </div>

    <hr className='mt-14 border border-gray-400'/>

    <div>
      <div></div>
    </div>



    </div>
  )
}

export default Reviews
