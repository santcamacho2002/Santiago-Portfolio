import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="section-wrapper flex items-center justify-between">
          <a href="#hero" className="logo">Santiago Camacho</a>

          {/* Hamburger button menu */}
          <button onClick={() => setOpen(!open)} className="md:hidden z-20">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop hidden md:flex justify-center space-x-4">
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

      {open && (
        <div
          className="md:hidden mobile-overlay fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="p-6">
            <button className="absolute top-5 right-7 text-white-50" onClick={() => setOpen(false)}>
              <X size={32} />
            </button>

            <nav>
              <ul className="flex flex-col items-center space-y-8 text-white-50 text-2xl">
                {navLinks.map(({ link, name }) => (
                  <li key={name}>
                    <a href={link} onClick={() => setOpen(false)} className="hover:underline">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
export default NavBar;
