import React, { useEffect, useState } from "react";
// Assuming cn utility is imported and available (if needed)

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  // 1. Theme detection state and observer
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark") 
  );

  useEffect(() => {
    // Listener to update state when theme changes
    const updateTheme = (target) => {
      setIsDarkMode(target.classList.contains("dark"));
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === "class" &&
          mutation.target === document.documentElement
        ) {
          updateTheme(mutation.target);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []); 

  // 2. Element Generation useEffect
  useEffect(() => {
    let shootingStarInterval;
    let handleResize;
    
    // Determine configuration based on theme
    // Dark: White, Glowing. Light: Soft Indigo/Blue, subtle.
    const starColorClass = isDarkMode 
  ? "bg-white dark-mode-star-glow"
  : "bg-blue-400/70 light-star-glow";

const particleClass = isDarkMode 
  ? "dark-mode-meteor"
  : "light-mode-meteor";

    
    // --- Generation Functions ---
    
    const generateElements = (colorClass) => {
        const numberOfElements = Math.floor(
            (window.innerWidth * window.innerHeight) / 9000
        );

        const elementArray = [];
        for (let i = 0; i < numberOfElements; i++) {
            elementArray.push({
                id: i,
                size: Math.random() * 1.5 + 1, 
                x: Math.random() * 100,
                y: Math.random() * 100,
                // Higher opacity for dark mode, lower for light mode's subtle effect
                opacity: isDarkMode ? (Math.random() * 0.4 + 0.6) : (Math.random() * 0.2 + 0.1),
                animationDuration: Math.random() * 3 + 2,
                colorClass: colorClass, 
            });
        }
        setStars(elementArray);
    };

    const generateParticles = (particleClass) => {
        const particleArray = [];
        const numberOfParticles = isDarkMode ? 5 : 8; 

        for (let i = 0; i < numberOfParticles; i++) {
            particleArray.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 50,
                delay: Math.random() * 10,
                duration: Math.random() * 3 + 3,
                particleClass: particleClass, 
            });
        }
        setMeteors(particleArray);
    };

    const generateShootingStar = () => {
        const newStar = {
            id: Date.now(),
            x: Math.random() * 80 + 10,
            y: Math.random() * 30,
            duration: Math.random() * 2 + 1.5,
        };
        
        setShootingStars(prev => [...prev, newStar]);
        
        setTimeout(() => {
            setShootingStars(prev => prev.filter(s => s.id !== newStar.id));
        }, (newStar.duration + 1) * 1000);
    };
    
    // --- Execution (Runs for both themes, removing synchronous setState calls) ---

    generateElements(starColorClass);
    generateParticles(particleClass);

    // Shooting stars logic is wrapped in a conditional interval
    if (isDarkMode) {
        shootingStarInterval = setInterval(() => {
            if (Math.random() > 0.5) { 
                generateShootingStar();
            }
        }, 3000);
    } 
    // State is cleared via the return cleanup function when isDarkMode changes to false.

    // Responsive Handler (adjusts count on resize)
    handleResize = () => {
        // Read the current DOM state on resize to pick the right color class
        const currentStarColor = document.documentElement.classList.contains("dark") 
            ? "bg-white dark-mode-star-glow" 
            : "bg-indigo-300/40";
        generateElements(currentStarColor);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function: runs on unmount OR when isDarkMode changes
    return () => {
        window.removeEventListener("resize", handleResize);
        if (shootingStarInterval) clearInterval(shootingStarInterval);
        
        // Clear all state to prevent flashing/cascading renders on theme change
        setStars([]); 
        setMeteors([]); 
        setShootingStars([]); 
    };

  }, [isDarkMode]); // Re-run whenever theme changes

  // 3. Render the background elements
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Regular Stars/Subtle Dust */}
      {stars.map((s) => (
        <div
          key={s.id}
          className={`star animate-pulse-subtle ${s.colorClass}`} 
          style={{
            width: `${s.size}px`,
            height: `${s.size}px`,
            left: `${s.x}%`,
            top: `${s.y}%`,
            opacity: s.opacity,
            animationDuration: `${s.animationDuration}s`,
          }}
        />
      ))}

      {/* Meteors/Subtle Particles */}
      {meteors.map((m) => (
        <div
          key={m.id}
          className={`meteor animate-meteor ${m.particleClass}`} 
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
            // Set simple color for light theme particle if no custom CSS applies
            // We rely on the .dark-mode-meteor class for the complex gradient in dark mode
            background: m.particleClass.includes('bg-') ? m.particleClass.replace('bg-', 'var(--tw-bg-opacity,1)') : undefined,
          }}
        />
      ))}

      {/* Shooting Stars (Only visible in dark mode via CSS classes) */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star dark-mode-shooting-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;