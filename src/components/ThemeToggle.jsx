import React, { useEffect, useState } from 'react';
import { Moon, Sun } from "lucide-react";
import { cn } from '../lib/util';

const ThemeToggle = () => {
  // 1. Initialize State to Default to Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first. If not set, default to 'dark'.
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === null || storedTheme === "dark"; 
  });

  useEffect(() => {
    // 2. Apply Theme to HTML Class and localStorage
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Sync theme across tabs
    const syncTheme = (event) => {
      if (event.key === "theme") {
        setIsDarkMode(event.newValue === "dark");
      }
    };
    window.addEventListener("storage", syncTheme);
    return () => window.removeEventListener("storage", syncTheme);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <button 
      onClick={toggleTheme} 
      className={cn(
        // 👇 CHANGE 1: Smaller Size (p-1.5 instead of p-2) and Z-index correction
        'fixed top-2 right-2 z-999 p-1.5 rounded-full group', 
        'transition-all duration-300',
        'hover:scale-110 active:scale-95', 
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        // Styling based on CURRENT theme (i.e., what it looks like now)
        isDarkMode 
          ? 'bg-yellow-400/20 border border-yellow-400/30 hover:bg-yellow-400/30 focus:ring-yellow-400' 
          : 'bg-indigo-600/20 border border-indigo-600/30 hover:bg-indigo-600/30 focus:ring-indigo-600'
      )}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {/* 4. Icon Logic Fix: Show the OPPOSITE icon of the CURRENT theme */}
      
      {/* Sun icon: Shown when in Dark Mode (click to switch to Light) */}
      <Sun className={cn(
        // 👇 CHANGE 2: Smaller Icon Size (h-4 w-4 instead of h-5 w-5)
        'h-4 w-4 absolute transition-all duration-500', 
        isDarkMode 
          ? 'rotate-0 scale-100 text-yellow-400 group-hover:rotate-45' // Show Sun icon (bright yellow for dark background)
          : '-rotate-90 scale-0 text-yellow-400' // Hide Sun icon
      )}/> 

      {/* Moon icon: Shown when in Light Mode (click to switch to Dark) */}
      <Moon className={cn(
        // 👇 CHANGE 2: Smaller Icon Size (h-4 w-4 instead of h-5 w-5)
        // 👇 CHANGE 3: Changed text-blue-600 to text-foreground (Black/Dark Gray) for light mode visibility
        'h-4 w-4 relative transition-all duration-500', 
        isDarkMode 
          ? 'rotate-90 scale-0 text-foreground' // Hide Moon icon
          : 'rotate-0 scale-100 text-foreground group-hover:-rotate-12' // Show Moon icon (Dark color for light background)
      )}/>
      
    </button>
  );
};

export default ThemeToggle;