import React, { useEffect, useState } from 'react'
import { cn } from '../lib/util'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" }
]

const Navbar = ({setActiveSection}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);
  
  return (
    <>
      <nav className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled 
          ? "py-3 bg-background/90 backdrop-blur-md shadow-lg"
          : "py-6", 
      )}>
        {/*
          *** FIX: Using a tiny horizontal padding (px-2) to maximize space on mobile.
        */}
      <div className='container mx-auto flex flex-col md:flex-row md:justify- items-center px-4 '>
  <div className='flex justify-evenly w-full items-center md:justify-between'>
    {/* The Name (SiranjiviKumar PortFolio) */}
    <a href="#hero" className='text-xl sm:text-2xl font-bold text-primary text-glow'>
      SiranjiviKumar PortFolio 
    </a>
    
    {/* The Mobile Menu Button (Next to the name on the same line) */}
    <button
      onClick={() => setIsMobileMenuOpen(true)}
      className='p-1 md:hidden hover:bg-primary/20 rounded-full transition-all flex-shrink-0'
    >
      <Menu size={28} className='text-foreground' />
    </button>
  </div>
          
          {/* Desktop Navigation */}
          <div className='hidden md:block'> 
            <ul className='flex space-x-8'>
              {navItems.map((item) => (
                <li key={item.name}>
                <a
                  href="#"
                  onClick={() => {
                  const key =
                  item.name === "Home"
                  ? "hero"
                  : item.name.toLowerCase();

                 setActiveSection(key);
                      }}
                      className="text-foreground/90 hover:text-primary transition-colors text-lg font-medium"
                       >
                             {item.name}
                </a>
                </li>
              ))}
            </ul>
          </div>

       
        </div>
      </nav>

      {isMobileMenuOpen && (
  <div 
    className='fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm md:hidden'
    onClick={() => setIsMobileMenuOpen(false)}
  >
    <div 
      className='absolute top-0 right-0 w-64 h-full bg-card shadow-2xl'
      onClick={(e) => e.stopPropagation()} 
    >
      <div className='flex items-center justify-between p-6 border-b border-border/50'>
        <span className='text-2xl font-bold text-primary text-glow'>Menu</span>
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className='p-2 hover:bg-primary/20 rounded-full transition-all'
        >
          <X size={24} className='text-foreground' />
        </button>
      </div>

      <nav className='p-6'>
        <ul className='space-y-3'>
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className='block text-foreground/90 hover:text-primary py-4 px-6 rounded-xl hover:bg-primary/10 transition-all duration-300 text-lg font-medium border-l-4 border-transparent hover:border-primary hover:translate-x-1'
                onClick={() => {
                  const key = item.name === "Home" ? "hero" : item.name.toLowerCase();
                  setActiveSection(key);
                  setIsMobileMenuOpen(false);

                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className='absolute bottom-0 left-0 right-0 p-6 border-t border-border/50'>
        <p className='text-foreground/60 text-sm text-center'>
          © 2025 SiranjiviKumar
        </p>
      </div>
    </div>
  </div>
)}

    </>
  )
}

export default Navbar