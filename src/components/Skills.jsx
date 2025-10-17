import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaTabletAlt,
  FaJava,
  FaPython,
} from "react-icons/fa";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#050505] text-white pt-0 pb-24 px-6 flex flex-col items-center -mt-4"

    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-blue-500 mb-16 text-center"
      >
        Skills & Technologies
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        <SkillCard
          color="text-blue-400"
          glow="rgba(59,130,246,0.8)"
          icon={<FaHtml5 />}
          title="HTML5"
        />
        <SkillCard
          color="text-purple-400"
          glow="rgba(168,85,247,0.8)"
          icon={<FaCss3Alt />}
          title="CSS3"
        />
        <SkillCard
          color="text-cyan-400"
          glow="rgba(34,211,238,0.8)"
          icon={<FaJs />}
          title="JavaScript"
        />
        <SkillCard
          color="text-orange-400"
          glow="rgba(249,115,22,0.8)"
          icon={<FaJava />}
          title="Java"
        />
        <SkillCard
          color="text-yellow-400"
          glow="rgba(234,179,8,0.8)"
          icon={<FaPython />}
          title="Python"
        />
        <SkillCard
          color="text-cyan-400"
          glow="rgba(34,211,238,0.8)"
          icon={<FaTabletAlt />}
          title="Responsive Design"
        />
      </div>

      {/* Footer Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-slate-400 text-lg text-center mt-16 bg-[#0b0b0b] py-6 px-8 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.15)] w-[95%] md:w-[70%]"
      >
        Continuously learning and staying up-to-date with the latest web
        technologies and best practices.
      </motion.p>
    </section>
  );
}

/* ⚙️ Reusable Skill Card */
function SkillCard({ icon, title, color, glow }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.08,
        boxShadow: `0 0 25px ${glow}`,
      }}
      whileTap={{ scale: 1.05 }}
      className="bg-[#0b0b0b] rounded-xl flex flex-col items-center justify-center p-10 
                 border border-gray-800 hover:border-blue-600 transition-all 
                 duration-200 ease-out cursor-pointer"
    >
      <motion.div
        whileHover={{
          textShadow: `0 0 25px ${glow}`,
          color: '#fff',
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className={`${color} text-5xl mb-4`}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold text-slate-200">{title}</h3>
    </motion.div>
  );
}
