import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import ecommerce from '../assests/ecommerce.png';
import portfolio  from '../assests/portfolio.png';
import weather from '../assests/weather.png';

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce website with shopping cart, product filtering, and checkout functionality.",
    image: ecommerce,
    tech: ["HTML", "CSS", "JavaScript"],
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location search and 7-day forecast display.",
    image: weather,
    tech: ["API Integration", "Responsive", "CSS"],
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Interactive portfolio with smooth animations and modern glassmorphism design.",
    image: portfolio,
    tech: ["Modern Design", "Animations", "JavaScript"],
    codeLink: "#",
    demoLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#050505] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-blue-500 mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 25px rgba(59,130,246,0.8)",
              }}
              whileTap={{ scale: 1.05 }}
              className="bg-[#0b0b0b]/90 rounded-2xl overflow-hidden 
                         border border-gray-800 hover:border-blue-600 
                         transition-all duration-200 ease-out cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-[#111827] text-blue-400 text-sm px-3 py-1 rounded-full border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg 
                               hover:bg-gray-900 transition-all duration-150 ease-in-out"
                  >
                    <FaCode /> Code
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg 
                               hover:bg-blue-700 transition-all duration-150 ease-in-out"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
