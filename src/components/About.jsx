import React, { useEffect, useState } from "react";

const About = () => {

  // Detect theme (same logic as HeroSection & Background)
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
    <section
      id="about"
      className="w-full py-20 px-6 md:px-12 lg:px-20 text-foreground"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2
          className={`text-4xl font-bold transition-all duration-300 ${
            isDarkMode ? "text-blue-400" : "text-blue-600"
          } mb-10`}
        >
          About <span className="text-foreground">Me</span>
        </h2>

        {/* Intro Text */}
        <p
          className={`text-lg leading-8 max-w-3xl mx-auto transition-all duration-300 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I am <b>Siranjivi Kumar</b>, a passionate and dedicated{" "}
          <b>React Developer</b> with strong experience in building responsive,
          modern, and user-friendly web applications using React.js, Redux Toolkit,
          JavaScript (ES6+), Tailwind CSS, and REST API integrations.
        </p>

        {/* Objective */}
        <h3
          className={`text-3xl font-semibold mt-14 mb-4 transition-all duration-300 ${
            isDarkMode ? "text-blue-300" : "text-blue-600"
          }`}
        >
          My Objective
        </h3>

        <p
          className={`max-w-3xl mx-auto leading-8 transition-all duration-300 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          To leverage my expertise in modern frontend development to create
          scalable, high-performance, and user-centered web applications,
          contributing to meaningful projects and delivering exceptional user
          experience.
        </p>

        {/* Qualification */}
        <h3
          className={`text-3xl font-semibold mt-16 mb-6 transition-all duration-300 ${
            isDarkMode ? "text-blue-300" : "text-blue-600"
          }`}
        >
          Qualification
        </h3>

        <div
          className={`max-w-2xl mx-auto rounded-xl p-6 sm:p-10 shadow-lg backdrop-blur-sm transition-all duration-300
          ${
            isDarkMode
              ? "bg-background/40 border border-blue-400/30"
              : "bg-white border border-blue-500/30 shadow-md"
          }`}
        >
          <h4
            className={`text-2xl font-bold mb-3 transition-all duration-300 ${
              isDarkMode ? "text-blue-300" : "text-blue-600"
            }`}
          >
            BE — Computer Science & Engineering
          </h4>

          <p
            className={`text-lg transition-all duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Sree Sowdambika College of Engineering
          </p>

          <p className={isDarkMode?"text-gray-400 mt-2":"text-gray-700 mt-2"}>2018 – 2022</p>
        </div>

      </div>
    </section>
  );
};

export default About;
