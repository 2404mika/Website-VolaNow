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
    <header className="fixed top-3 left-3 right-3 z-50">
      <div className={`px-6 py-4 flex items-center justify-between transition-all duration-500 ${
        scrolled 
          ? "bg-[#181818]/90 backdrop-blur-xl border border-white/10 rounded-2xl" 
          : "bg-[#F2F2F4]"
      }`}>
        <div className="text-[#B0FC51] font-bold text-xl tracking-tight">
          VolaNow
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className={scrolled ? "text-white hover:text-[#B0FC51]" : "text-[#181818] hover:text-[#B0FC51]"}>
            Home
          </a>
          <a href="#features" className={scrolled ? "text-white/70 hover:text-[#B0FC51]" : "text-[#181818]/70 hover:text-[#B0FC51]"}>
            Features
          </a>
          <a href="#about" className={scrolled ? "text-white/70 hover:text-[#B0FC51]" : "text-[#181818]/70 hover:text-[#B0FC51]"}>
            About
          </a>
          <a href="#contact" className={scrolled ? "text-white/70 hover:text-[#B0FC51]" : "text-[#181818]/70 hover:text-[#B0FC51]"}>
            Contact
          </a>
        </nav>

        <button className={`hidden md:block font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
          scrolled ? "bg-[#B0FC51] text-[#181818] hover:bg-[#9ae045]" : "bg-[#B0FC51] text-[#181818] hover:bg-[#9ae045]"
        }`}>
          Get Started
        </button>

        <button className={`md:hidden ${scrolled ? "text-white" : "text-[#181818]"}`} onClick={() => setMenuOpen(!menuOpen)}>
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
        <div className={`md:hidden mt-2 rounded-2xl p-6 animate-fade-in-down transition-all duration-500 ${
          scrolled 
            ? "bg-[#181818]/90 backdrop-blur-xl border border-white/10" 
            : "bg-white/80 backdrop-blur-xl border border-black/10"
        }`}>
          <nav className="flex flex-col gap-4">
            <a href="#home" className={scrolled ? "text-white hover:text-[#B0FC51]" : "text-[#181818] hover:text-[#B0FC51]"} onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#features" className={scrolled ? "text-white/70 hover:text-[#B0FC51]" : "text-[#181818]/70 hover:text-[#B0FC51]"} onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#about" className={scrolled ? "text-white/70 hover:text-[#B0FC51]" : "text-[#181818]/70 hover:text-[#B0FC51]"} onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" className={scrolled ? "text-white/70 hover:text-[#B0FC51]" : "text-[#181818]/70 hover:text-[#B0FC51]"} onClick={() => setMenuOpen(false)}>Contact</a>
            <button className="bg-[#B0FC51] text-[#181818] font-semibold px-5 py-2 rounded-full hover:bg-[#9ae045] transition-colors w-full">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}