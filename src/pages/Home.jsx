import React, { useRef } from 'react'
import HeroPart from '../components/HeroPart'
import { gsap } from 'gsap';

const Home = () => {
  const starRef = useRef();
  const star = (e) => {
    gsap.to(starRef.current, {
      x: e.clientX,
      y: e.clientY,
      rotate: '+=90',
      duration: 1,
      ease: 'back.out'
    }); 
  }
  return (
    <>
    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black clip-star absolute pointer-events-none" ref={starRef}></div>
    <div onMouseMove={(e) => star(e)} className='h-screen px-5 py-5 bg-white flex justify-center items-center'>
        <div className='h-full w-full rounded-3xl bg-[#EBF4DD] flex flex-col justify-center items-center gap-5 shadow-lg shadow-gray-400'>
            <HeroPart />
        </div>
    </div>
    </>
  )
}

export default Home