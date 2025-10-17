import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from "./components/Footer";

export default function App(){
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <main className="mt-12 container"> */}
        
        
        
      {/* </main> */}
      {/* <footer className="text-center text-sm text-slate-400 py-8">© {new Date().getFullYear()} Changaru Venkata Subbaiah</footer> */}
    </div>
  )
}
