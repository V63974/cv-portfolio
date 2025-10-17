import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b0b0b] border-t border-gray-800 py-6 px-8 flex flex-col md:flex-row justify-between items-center text-slate-400">
      {/* Left side - Copyright Text */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p className="text-sm">
          © {currentYear} <span className="text-white font-semibold">Venkata Subbaiah</span>. All rights reserved.
        </p>
        <p className="text-xs text-slate-500">
          Built with passion and modern web technologies.
        </p>
      </div>

      {/* Right side - Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 border border-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-all duration-200"
      >
        <FaArrowUp />
        <span>Back to Top</span>
      </button>
    </footer>
  );
}
