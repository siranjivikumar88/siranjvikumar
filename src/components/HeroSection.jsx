import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const HeroSection = ({ setActiveSection }) => {

  // Detect theme state
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center px-6 md:px-20">
      
      {/* Left */}
      <Motion.div
        className="flex flex-col gap-4 text-center md:text-left max-w-xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Hi, I'm <span className="text-blue-400">Siranjivi Kumar</span>
        </h1>

        {/* Theme-based paragraph */}
        <p className={`text-lg md:text-xl transition-all duration-300 ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}>
          I'm React Js Developer specializing in building beautiful, animated,
          and responsive web experiences with React, JavaScript, and TailwindCSS.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-4">

          {/* View Projects - Theme Specific Styling */}
          <button
            onClick={() => setActiveSection("project")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300
            ${isDarkMode 
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-blue-400 text-white hover:bg-blue-500 shadow-md"}
            `}
          >
            View Projects
          </button>

          {/* Contact button - also theme dependent */}
          <button
            onClick={() => setActiveSection("contact")}
            className={`px-6 py-3 rounded-full border transition-all duration-300
            ${isDarkMode
              ? "border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-black"
              : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white shadow-md"}
            `}
          >
            Contact Me
          </button>
        </div>
      </Motion.div>

      {/* Profile Image */}
      <Motion.div
        className="hidden md:flex z-10 items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
      >
        <img
          src="/profilePic.jpg"
          alt="Profile"
          className="w-80 h-80 rounded-full border-4 border-blue-400 shadow-lg object-cover object-[center_-0px]"
        />
      </Motion.div>
    </section>
  );
};

export default HeroSection;
