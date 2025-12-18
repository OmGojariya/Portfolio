import React, { use } from 'react'
import { useRef } from 'react'
import '../index.css';
import Form from '../components/Form';
import Connect from '../components/Connect';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';



const Contact = () => {
  const pageRef = useRef(); 
  useGSAP(() => {
    gsap.from(pageRef.current.children,{
        y: 100,
        opacity: 0,
        scale: 0.5,
        scrollTrigger:{
            trigger: pageRef.current,
            start: "top 85%",
            end: "bottom 70%",
            scrub: true,
        }
    })
  })
  return (
        <>
        <div className='min-h-screen px-5 py-5 bg-white flex justify-center items-center'>
            <div ref={pageRef} className='h-full w-full rounded-3xl bg-[#EBF4DD] flex flex-col justify-center items-center gap-5 p-10 shadow-lg shadow-gray-400'>
                <h1 style={{ fontFamily: 'MyFont' }} className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-2 m-auto'>CONTACT ME</h1>
                <div className='min-w-[60%]'>
                    <Form />
                </div>
                <div>
                    <Connect />
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact