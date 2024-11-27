import React from 'react'

const Footer = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className=' w-full h-screen px-10 mt-16'>
      <div className='flex mt-4'>
        <div className='w-1/2 text-[6vw] font-semibold'>
          <h2>EYE-</h2>
          <h2 className='-mt-6'>OPENING</h2>
        </div>
        <div className='w-1/2 '>
          <h2 className='text-[6vw] font-semibold'>PRESENTATIONS</h2>
          <div className='flex gap-10 py-5'>
            <div className='w-1/2 font-thin text-[1.2vw]'>
              <div className='flex flex-col pt-5'>
                <h6>S:</h6>
                <a href="">Instagram</a><a href="">Behance</a><a href="">Facebook</a><a href="">Linkedin</a>
              </div>
              <div className='flex flex-col pt-5'>
                <h6>L:</h6>
                <a href="#">202-1965 W 4th Ave</a><a href="">Vancouver, Canada</a><a href="">30 Chukarina St</a><a href="">Lviv, Ukraine</a>
              </div>
              <div className='flex flex-col pt-5'>
                <h6>E:</h6>
                <a href="#">hello@ochi.design</a>
              </div>
            </div>
            <div className='w-1/2 font-thin'>
              <div className='flex flex-col pt-5 text-[1.2vw]'>
                <h6>M:</h6>
                <a href="">Home</a><a href="">services</a><a href="">Our Work</a><a href="">About Us</a><a href="">Insights</a><a href="">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-6'>
        <h4 className='w-1/2 text-[2vw] font-semibold'>ochi</h4>
        <div className='w-1/2 font-light text-zinc-400 flex justify-between items-center text-[1vw]'>
          <a href="#">© ochi design 2024. Legal Terms</a>
          <a href="#">Website by Chakri</a>
        </div>
      </div>
    </div>
  )
}

export default Footer