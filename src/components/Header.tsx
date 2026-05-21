"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-3 left-3 right-3 z-50 transition-all duration-500 ${scrolled ? "top-2 left-2 right-2" : ""}`}>
      <div className="bg-[#181818]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="text-[#B0FC51] font-bold text-xl tracking-tight">VolaNow</div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white hover:text-[#B0FC51] transition-colors duration-300">
            Home
          </a>
          <a href="#features" className="text-white/70 hover:text-[#B0FC51] transition-colors duration-300">
            Features
          </a>
          <a href="#about" className="text-white/70 hover:text-[#B0FC51] transition-colors duration-300">
            About
          </a>
          <a href="#contact" className="text-white/70 hover:text-[#B0FC51] transition-colors duration-300">
            Contact
          </a>
        </nav>

        <button className="hidden md:block bg-[#B0FC51] text-[#181818] font-semibold px-5 py-2 rounded-full hover:bg-[#9ae045] transition-all duration-300 hover:scale-105">
          Get Started
        </button>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 bg-[#181818]/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 animate-fade-in-down">
          <nav className="flex flex-col gap-4">
            <a href="#home" className="text-white hover:text-[#B0FC51] transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#features" className="text-white/70 hover:text-[#B0FC51] transition-colors" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#about" className="text-white/70 hover:text-[#B0FC51] transition-colors" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" className="text-white/70 hover:text-[#B0FC51] transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
            <button className="bg-[#B0FC51] text-[#181818] font-semibold px-5 py-2 rounded-full hover:bg-[#9ae045] transition-colors w-full">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
