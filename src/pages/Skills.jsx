import React, { use, useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import '../index.css';
import java from '../assets/java.jpg';
import cpp from '../assets/cpp.jpg';
import springboot from '../assets/springboot.jpg';
import git from '../assets/git.jpg';
import html from '../assets/html.jpg';
import css from '../assets/css.jpg';
import react from '../assets/react.jpg';
import c from '../assets/c.jpg';
import next from '../assets/next.jpg';
import sql from '../assets/sql.jpg';
import talwind from '../assets/tailwind.jpg';
import vscode from '../assets/vscode.jpg';
import github from '../assets/github.jpg';
import intellij from '../assets/intellij.jpg';
import python from '../assets/python.jpg';
import SkillCard from '../components/SkillCard';

const skills = [
  { id: 1, img: c },
  { id: 2, img: cpp },
  { id: 3, img: java },
  { id: 4, img: python },
  { id: 5, img: html },
  { id: 6, img: css },
  { id: 7, img: talwind },
  { id: 8, img: react },
  { id: 9, img: next },
  { id: 10, img: git },
  { id: 11, img: github },
  { id: 12, img: vscode },
  { id: 13, img: intellij },
  { id: 14, img: sql },
  { id: 15, img: springboot },
];

const Skills = () => {
  const skilltitleRef = useRef()
  const skillcardRef = useRef()

  useGSAP(() => {
    gsap.from(skilltitleRef.current,{
      y: 100,
      scale: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: skilltitleRef.current,
        start: "top 85%",
        end: "bottom 70%",
        scrub: true,
      }
    })

    gsap.from(skillcardRef.current.children, {
      y: 100,
      opacity: 0,
      stagger: 0.25,
      scale: 0.5,
      scrollTrigger: {
        trigger: skillcardRef.current,
        start: "top 90%",
        end: "bottom 87%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    })

  })
  return (
    <>
      <div className='min-h-screen px-5 py-5 bg-white flex justify-center items-center'>
            <div className='h-full w-full rounded-3xl bg-[#EBF4DD] flex flex-col justify-center items-center gap-5 p-10 shadow-lg shadow-gray-400'>
                <h1 ref={skilltitleRef} className='text-5xl font-bold' style={{ fontFamily: 'MyFont' }}>SKILLS</h1>
                <div ref={skillcardRef} className='max-w-[70%] h-full px-10 py-5 flex justify-center items-center gap-10 flex-wrap'>
                    {skills.map(skill => (
                        <SkillCard key={skill.id}  img={skill.img}/>
                    ))}
                </div>
            </div>
      </div>
    </>
  )
}

export default Skills