import React, { useEffect, useState } from "react";
import { FaBuilding, FaGlobe } from "react-icons/fa";

const projects = [
  {
    title: "GM Financial – Digital Lending Platform",
    company: "GM Financial",
    duration: "2024 – Present",
    description:
      "Developed and enhanced secure customer-facing loan and payment UI features using React.js, Redux Toolkit, REST APIs, and Tailwind CSS. Improved performance with lazy loading, memoization, and code-splitting.",
    skills: [
      "React.js",
      "Redux Toolkit",
      "Axios / Fetch API",
      "Responsive UI",
      "Tailwind CSS",
      "Performance Optimization",
    ],
    icon: <FaGlobe className="text-blue-400 text-4xl" />,
  },

  {
    title: "Cox Communications – Digital Services Platform",
    company: "Cox Communications",
    duration: "2023 – 2024",
    description:
      "Built scalable account management, billing workflows, and service upgrade UIs. Integrated APIs, optimized accessibility, and improved UX across multiple devices with Tailwind and React.",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "API Integration",
      "Responsive Design",
      "Bootstrap / Tailwind",
      "WCAG Accessibility",
    ],
    icon: <FaBuilding className="text-green-400 text-4xl" />,
  },
];

const Project = () => {
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
    <section id="project" className="w-full py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2
          className={`text-4xl font-bold mb-12 transition-colors duration-300 ${
            isDarkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          My <span className={isDarkMode ? "text-blue-300" : "text-blue-600"}>Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                rounded-xl p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.02]

                ${
                  isDarkMode
                    ? "bg-background/40 border border-blue-400/30 hover:shadow-blue-500/40"
                    : "bg-white border border-blue-500/30 hover:shadow-blue-400/30"
                }
              `}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">{project.icon}</div>

              {/* Title */}
              <h3
                className={`text-2xl font-semibold mb-2 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {project.title}
              </h3>

              {/* Company + duration */}
              <p
                className={`font-medium mb-4 transition-colors duration-300 ${
                  isDarkMode ? "text-blue-300" : "text-blue-600"
                }`}
              >
                {project.company} • {project.duration}
              </p>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {project.description}
              </p>

              {/* Skill Chips */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`
                      px-3 py-1 text-sm rounded-full transition-all duration-300

                      ${
                        isDarkMode
                          ? "bg-blue-500/10 text-blue-300 border border-blue-400/20"
                          : "bg-blue-500/10 text-blue-600 border border-blue-500/20"
                      }
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
