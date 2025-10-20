import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import resume from '../assests/resume.pdf';
import grid from '../assests/grid.svg';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-[#050505] text-white">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={grid}
          alt="grid background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glowing Name */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-extrabold text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] mb-4 z-10"
      >
        CHANGARU VENKATA SUBBAIAH
      </motion.h1>

      {/* Role */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-2xl md:text-3xl font-semibold text-blue-400 z-10"
      >
        Full Stack Developer
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-4 text-slate-300 text-lg z-10"
      >
        Crafting modern, interactive, and intelligent web experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex gap-6 mt-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-all duration-300"
        >
          View Projects
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          <i className="fa-regular fa-file"></i> Download Resume
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-8 mt-16 text-2xl text-slate-400 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        <a
          href="https://www.linkedin.com/in/c-venkata-subbaiah/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-all duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/V63974"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-all duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:vsubbaiah63974@gmail.com"
          className="hover:text-blue-500 transition-all duration-300"
        >
          <FaEnvelope />
        </a>
      </motion.div>

      {/* Glowing radial effect */}
      <div className="absolute w-[800px] h-[800px] bg-blue-500 opacity-10 rounded-full blur-3xl z-0"></div>

      {/* Bottom fade gradient merging into About section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#050505]" />
    </section>
  );
}
