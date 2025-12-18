import React, { useRef } from 'react'
import '../index.css';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Fan from './Fan';
import ProfileImg from './ProfileImg';

const HeroPart = () => {
  const textRef = useRef();
  useGSAP(()=>{
    var tl = gsap.timeline();
    tl.from(textRef.current, {
        x: -200,
        opacity:0,
        duration:1,
        delay:1,
    })

  })
  return (
    <>
    <div className='min-h-[60vh] flex flex-col lg:flex-row justify-center items-center w-[95%] mx-auto gap-10 lg:gap-20'>
       <div ref={textRef} className='text-5xl sm:text-6xl md:text-7xl lg:text-7xl space-y-2 m-auto'
>
          <div className='flex items-center gap-3'>
                <h1 style={{ fontFamily: 'MyFont' }}>HEY,</h1> 
                <Fan />
          </div>
            <h1 style={{ fontFamily: 'MyFont' }}>I'M OM</h1>
            <h1 style={{ fontFamily: 'MyFont' }} >GOJARIYA</h1>
       </div>
       <div className='m-auto'>
          <ProfileImg />
       </div>
    </div>
    </>
  )
}

export default HeroPart