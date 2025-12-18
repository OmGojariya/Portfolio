import { useRef } from 'react';
import '../index.css';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ProjectCard from '../components/ProjectCard'
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "Personal portfolio built using React, Tailwind CSS and GSAP animations.",
            previewLink: "https://your-portfolio-link.com",
            githubLink: "https://github.com/OmGojariya/my-portfolio",
            img: project1,
        },
        {
            id: 2,
            title: "Airline Ticket Price Optimizer",
            description: "ticket prices using C++ with DP, Divide and Conquer, and Greedy algorithms.",
            previewLink: "https://github.com/OmGojariya/Airline-Ticket-Price-Optimizer",
            githubLink: "https://github.com/OmGojariya/Airline-Ticket-Price-Optimizer",
            img: project2,
        },
        {
            id: 3,  
            title: "CharchaHub",
            description: "Real-time chat app developed with Java, Spring Boot, and React for seamless communication.",
            previewLink: "https://github.com/OmGojariya/CharchaHub",
            githubLink: "https://github.com/OmGojariya/CharchaHub",
            img: project3,
        },
];

const Projects = () => {
  const titleRef = useRef();
  const cardRef = useRef();
  useGSAP(()=>{
    gsap.from(titleRef.current, {
      y: 100,
      scale: 0.5,
      opacity: 0,
      scrollTrigger:{
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      }
    })

    gsap.from(cardRef.current.children, {
      y: 100,
      opacity: 0,
      stagger: 0.25,
      scale: 0.5,

      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

  })
  return (
    <>
       <div className='min-h-screen px-5 py-5 bg-white flex justify-center items-center'>
            <div className='h-full w-full rounded-3xl bg-[#EBF4DD] flex flex-col justify-center items-center gap-5 p-10 shadow-lg shadow-gray-400'>
                <h1 ref={titleRef} className='text-5xl font-bold' style={{ fontFamily: 'MyFont' }}>PROJECTS</h1>
                <div ref={cardRef} className='w-full h-full px-10 py-5 flex justify-center items-center gap-10 flex-wrap'>
                    {projects.map(project => (
                        <ProjectCard 
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            previewLink={project.previewLink}
                            githubLink={project.githubLink}
                            img={project.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects