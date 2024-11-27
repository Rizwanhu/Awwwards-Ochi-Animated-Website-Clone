import React from 'react'

const About = () => {
    const social = ["Instagram","Behance","Facebook","Linkedin"];


  


  return (
    <div className=' rounded-tr-3xl rounded-tl-3xl  montreal light-green text-black pt-7 pb-10'>
      <div className='  w-full h-72 p-10 text-4xl'>
        <h1 className='   '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to </h1>
        <h1 className='underline flex'>raise funds, sell prod­ucts, ex­plain com­plex ideas,</h1>
        <h1 className=''> and  hire great peo­ple.</h1>
        {/* <h1 className='underline'></h1> */}
        </div>
        <hr className="border border-gray-400 relative -top-12" />


      <div className='flex justify-between items-center  montreal px-3 mr-3 ml-3'>

      <div className='w-[15rem] h-60 pl-10'>
        <h1>What you can expect:</h1>
      </div>

        <div className='w-96 h-50 px-7 -mt-10 relative'>
            <h1>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</h1>
            <h1 className='pt-8'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
        </div>

        <div className='text-black mr-10'>
            <h1>S:</h1>

            <ul className="social-links">
      {social.map((platform, index) => (
        <li key={index}>
          <a href={`https://www.${platform.toLowerCase()}.com/`} target="_blank" rel="noopener noreferrer" className=' text-black font-semibold montreal  a-black underline hover:underline-none'> 
            {platform}
          </a>
        </li>
      ))}
    </ul>

      </div>
        </div>

      <hr className='border border-gray-400' />

      <div className='flex justify-between items-center p-10'>
        <div className=''>
          <h1 className=' font-medium  text-5xl -mt-36'>Our approach:</h1>


          <button className='hover:pic-animate flex items-center gap-10 uppercase bg-zinc-900 text-white p-4 pl-6 rounded-3xl mt-5 pr-10'><h1>read more</h1>
            <div className='w-3 h-3  rounded-full bg-white '></div>
          </button>
        </div>

        <div className='w-[40rem] '>
              <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" className='rounded-xl' />
        </div>

      </div>


    </div>
  )
}

export default About
