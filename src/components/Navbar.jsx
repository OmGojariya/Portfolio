import React, { useRef } from 'react'; 
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Navbar = () => {
  const navRef = useRef();

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  });

  return (
    <div ref={navRef} className="fixed top-0 w-full z-10 flex justify-end items-center px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-12">
      <a href="https://drive.google.com/file/d/1YqxjcAFsy3H9VIkhq5vRaLDz7Aja7Xxs/view?usp=sharing" target="_blank" rel="noreferrer"
        className=" bg-[#5F7C66] text-[#EEF4DF] text-sm sm:text-base md:text-xl px-4 py-2 border-2 border-[#3E4C55]
          rounded-3xl transition-all duration-300 hover:bg-[#3E4C55] hover:border-[#5F7C66] hover:scale-105
          active:scale-95">
        Resume
      </a>
    </div>
  );
};

export default Navbar;
