import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Reviews from './components/Reviews'
import Cards from './components/Cards'
import StartProject from './components/StartProject'
import Footer from './components/Footer'
import Headroom from 'react-headroom'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {


  const locomotiveScroll = new LocomotiveScroll();
  


  return (
    <>
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Headroom>
      <Navbar />
      </Headroom>
      
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Reviews />
      <Cards />
      <StartProject />
      <Footer />
    </div>
    </>
  )
}

export default App
