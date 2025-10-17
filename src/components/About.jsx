import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaPalette } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050505] text-white min-h-screen flex justify-center items-center pt-0 pb-20 px-6 overflow-hidden"

    >
      <div className="max-w-7xl w-full text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-blue-500 mb-16"
        >
          About Me
        </motion.h2>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.03,
            boxShadow: [
              "0px 0px 10px rgba(59,130,246,0.2)",
              "0px 0px 35px rgba(59,130,246,0.4)",
              "0px 0px 70px rgba(59,130,246,0.6)",
            ],
            transition: {
              duration: 0.6,
              ease: "easeInOut",
              repeat: 0,
            },
          }}
          className="bg-[#0b0b0b] rounded-2xl px-10 py-16 flex flex-col md:flex-row items-center md:items-start justify-center gap-10 mx-auto w-[95%]
          shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-200 ease-out"
        >
          {/* Profile Image */}
          <motion.div
            whileHover={{
              scale: 1.08,
              boxShadow: [
                "0 0 10px 5px rgba(59,130,246,0.2)",
                "0 0 30px 10px rgba(59,130,246,0.4)",
                "0 0 60px 20px rgba(59,130,246,0.8)",
              ],
              transition: {
                duration: 0.6,
                ease: "easeInOut",
                repeat: 0,
              },
            }}
            className="relative flex-shrink-0 rounded-full"
          >
            <div
              className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-transparent 
              bg-gradient-to-r from-blue-500 to-purple-600 p-[4px] transition-all duration-150 ease-out"
            >
              <img
                src="/assets/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="text-left md:w-[70%]">
            <h3 className="text-3xl font-semibold text-blue-400 mb-4">
              Hi, I'm Changaru Venkata Subbaiah
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              I’m a passionate{" "}
              <span className="text-blue-400">Full Stack Developer</span> who
              loves crafting elegant, intuitive, and high-performing web
              experiences. With strong expertise in modern web technologies,
              Java, and MongoDB, I transform complex ideas into seamless,
              pixel-perfect digital realities.
            </p>

            <p className="text-slate-400 leading-relaxed">
              When I’m not coding, I enjoy exploring new tech trends,
              contributing to open-source projects, or collaborating with
              developers to share and grow knowledge within the community.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                {
                  icon: <FaRocket className="text-pink-400" />,
                  text: "Creative Problem Solver",
                },
                {
                  icon: <FaLightbulb className="text-yellow-400" />,
                  text: "Innovative Thinker",
                },
                {
                  icon: <FaPalette className="text-purple-400" />,
                  text: "Design Enthusiast",
                },
              ].map((badge, i) => (
                <motion.span
                  key={i}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: [
                      "0px 0px 5px rgba(59,130,246,0.3)",
                      "0px 0px 15px rgba(59,130,246,0.5)",
                      "0px 0px 25px rgba(59,130,246,0.7)",
                    ],
                    transition: { duration: 0.4, ease: "easeInOut" },
                  }}
                  className="flex items-center gap-2 bg-[#111111] border border-blue-600 text-slate-200 px-5 py-2 rounded-full 
                  shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-200 ease-linear"
                >
                  {badge.icon} {badge.text}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
