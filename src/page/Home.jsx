import React, { useState } from 'react'
import StartBackground from '../components/StartBackground'
import Navbar from '../components/Navbar'
import ThemeToggle from '../components/ThemeToggle'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");


  return (
    <div className="min-h-screen border-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StartBackground />
      <Navbar setActiveSection={setActiveSection} />

      <main>
        {activeSection === "hero" && <HeroSection setActiveSection={setActiveSection} />}
        {activeSection === "about" && <About />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "project" && <Project />}
        {activeSection === "contact" && <Contact />}
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
