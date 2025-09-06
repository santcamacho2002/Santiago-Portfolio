import { useState, useEffect } from "react";

import { navLinks } from "../constants";

import { Menu, X } from "lucide-react";

const NavBar = () => {
  
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

   
    window.addEventListener("scroll", handleScroll);

    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="section-wrapper flex items-center justify-between">
        <a href="#hero" className="logo">
          Santiago Camacho
        </a>

        {/* Mobile Navigation */}
        <button
        onClick={() => setOpen(!open)}
        className="md:hidden z-20"
        >
        {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop flex justify-center space-x-4">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>  

      </div>
    </header>
  );
}

export default NavBar;