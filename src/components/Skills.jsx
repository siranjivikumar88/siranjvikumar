import React, { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaMobileAlt,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiAxios } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-400" /> },
  { name: "Axios / Fetch API", icon: <SiAxios className="text-blue-400" /> },
  { name: "Responsive Design", icon: <FaMobileAlt className="text-green-400" /> },
];

const Skills = () => {

  // Detect current theme state
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
    <section id="skills" className="w-full py-24 ">
      <div className="max-w-6xl mx-auto text-center px-2 md:px-4">

        {/* Title */}
        <h2
          className={`text-4xl font-bold mb-14 transition-colors duration-300 ${
            isDarkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          My <span className={`${isDarkMode ? "text-blue-300" : "text-blue-600"}`}>Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`
                rounded-2xl p-6 flex flex-col items-center justify-center gap-4
                shadow-lg hover:scale-105 transition-all duration-300

                ${
                  isDarkMode
                    ? "bg-background/40 border border-blue-400/20 hover:shadow-blue-500/40"
                    : "bg-white border border-blue-500/30 hover:shadow-blue-400/30"
                }
              `}
            >
              <div className="text-5xl">{skill.icon}</div>

              {/* Text also reacts to theme */}
              <p
                className={`text-lg font-semibold transition-colors duration-300 ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
