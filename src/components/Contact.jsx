import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#050505] text-white flex flex-col justify-center items-center px-6 py-20"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-blue-500 mb-16 text-center"
      >
        Get In Touch
      </motion.h2>

      {/* Main Layout */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0d0d0d] p-10 rounded-2xl flex flex-col justify-between
          shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]
          transition-all duration-300"
        >
          <form className="flex flex-col space-y-6 flex-grow">
            <div>
              <label className="block text-slate-300 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-[#111] text-white px-4 py-3 rounded-lg border border-transparent 
                focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full bg-[#111] text-white px-4 py-3 rounded-lg border border-transparent 
                focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2">Message</label>
              <textarea
                placeholder="Your message..."
                rows="5"
                className="w-full bg-[#111] text-white px-4 py-3 rounded-lg border border-transparent 
                focus:border-blue-500 outline-none resize-none"
              />
            </div>

            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 20px rgba(59,130,246,0.6)",
              }}
              transition={{ duration: 0.2 }}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 
              rounded-lg flex justify-center items-center gap-2"
            >
              <FaEnvelope />
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between gap-8"
        >
          {/* Let’s Connect Card */}
          <div className="bg-[#0d0d0d] p-8 rounded-2xl shadow-[0_0_25px_rgba(124,58,237,0.3)] 
          hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all duration-300">
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">
              Let’s Connect
            </h3>
            <p className="text-slate-300 mb-5">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            {/* Email hover effect */}
            <a
              href="mailto:vsubbaiah63974@gmail.com"
              className="flex items-center gap-3 text-slate-300 bg-[#111] px-4 py-3 rounded-lg 
              transition-all duration-200 hover:text-blue-400"
            >
              <FaEnvelope className="text-blue-400 text-xl" />
              <span>vsubbaiah63974@gmail.com</span>
            </a>
          </div>

          {/* Follow Me Card */}
          <div className="bg-[#0d0d0d] p-8 rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.3)] 
          hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-400 mb-5">
              Follow Me
            </h3>

            <div className="flex flex-col items-center gap-4">
              {/* GitHub */}
              <motion.a
                href="https://github.com/V63974"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(59,130,246,0.7)",
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2 bg-[#111] px-6 py-3 rounded-lg hover:bg-[#0b0b0b] w-full md:w-3/4 text-center transition-all"
              >
                <FaGithub className="text-blue-400" /> GitHub
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/c-venkata-subbaiah/"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(59,130,246,0.7)",
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2 bg-[#111] px-6 py-3 rounded-lg hover:bg-[#0b0b0b] w-full md:w-3/4 text-center transition-all"
              >
                <FaLinkedin className="text-blue-500" /> LinkedIn
              </motion.a>

              {/* Centered Mail */}
              <motion.a
                href="mailto:vsubbaiah63974@gmail.com"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(124,58,237,0.7)",
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2 bg-[#111] px-6 py-3 rounded-lg hover:bg-[#0b0b0b] w-full md:w-3/4 text-center transition-all"
              >
                <FaEnvelope className="text-purple-400" /> Email
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
