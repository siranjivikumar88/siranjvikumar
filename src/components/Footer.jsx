import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-20 bg-background/30 border-t border-gray-700/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4 text-center">

        {/* Brand / Name */}
        <h2 className="text-2xl font-bold text-primary text-glow">
          SiranjiviKumar Portfolio
        </h2>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl mt-2">
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/siranjivikumar-muthuvelpommu-54748a386"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </a>

          <a
             href="https://www.instagram.com/obito_siranjivi/"
            target="_blank"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Unordered Menu Links */}
        <div className="flex flex-wrap gap-6 text-gray-300 mt-4">
          <a href="#" className="hover:text-primary transition">Home</a>
          <a href="#" className="hover:text-primary transition">About</a>
          <a href="#" className="hover:text-primary transition">Skills</a>
          <a href="#" className="hover:text-primary transition">Projects</a>
          <a href="#" className="hover:text-primary transition">Contact</a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700/30 mt-4" />

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Siranjivi Kumar — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
