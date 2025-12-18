import React, { use, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

const App = () => {

  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App