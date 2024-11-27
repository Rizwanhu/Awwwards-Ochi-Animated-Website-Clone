import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-fit px-10 py-12'>
        {/* <h2 className='text-6xl'>Our Clients</h2> */}
        <div className='flex gap-5 mt-4'>
        <div className='w-1/2 bg-[#004D43] h-[60vh] rounded-lg flex justify-center items-center'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        </div>
        <div className='w-1/2 h-[50vh] flex gap-5'>
            <div className='w-1/2 bg-[#212121] h-[60vh] rounded-lg flex justify-center items-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            </div>
            <div className='w-1/2 bg-[#212121] h-[60vh] rounded-lg flex justify-center items-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Cards