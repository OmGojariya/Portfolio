import React from 'react'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Fan = () => {
    const fanRef = useRef();
      useGSAP(()=>{
        gsap.to(fanRef.current, {
          rotate: 90,
          repeat: -1,
          duration:0.5,
          delay:1.2,
          ease:'back.out'
        })
      })
  return (
    <div ref={fanRef} className="w-1/6 aspect-square relative">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-black rounded-bl-full"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-black rounded-tl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-black rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-black rounded-tr-full"></div>
    </div>

  )
}

export default Fan