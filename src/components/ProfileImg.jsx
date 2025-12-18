import React, { use, useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import profile from "../assets/profile.jpg";

const ProfileImg = () => {

    const imgRef = useRef();
    useGSAP(()=>{
        gsap.from(imgRef.current, {
            x: 200,
            opacity:0,
            duration:1,
            delay:1,
        })
    })

  return (
    <div ref={imgRef} className='h-65 w-65 rounded-full flex justify-center items-center shadow-lg shadow-gray-400 bg-[#3B4953]'>
        <img src={profile} alt="profile" className='w-60 h-60 rounded-full object-cover ring-4 ring-[#90AB8B] shadow-lg'/>
    </div>
  )
}

export default ProfileImg