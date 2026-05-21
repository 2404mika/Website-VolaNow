"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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

  const navLinks =[
    { href: "#home", label: "Accueil" },
    { href: "#features", label: "Avantages" },
    { href: "#about", label: "Comment ça marche" },
    { href: "#contact", label: "Contact" },
  ];

  const linkClass = (isMobile = false) =>
    `transition-colors duration-300 ${isMobile ? "text-base py-2" : "text-base"} ${
      scrolled ? "text-white/70 hover:text-[#B0FC51]" : "text-[#181818]/70 hover:text-[#B0FC51]"
    }`;

  return (
    <header className="fixed top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 z-50">
      <div
        className={`backdrop-blur-xl border shadow-2xl transition-all duration-500 ${
          scrolled
            ? "bg-[#181818]/90 border-white/10"
            : "bg-white/80 border-black/10"
        } rounded-xl sm:rounded-2xl px-2 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 flex items-center justify-between`}
      >
        <a href="#home" className="shrink-0 flex items-center">
          <Image 
            src={scrolled ? "/Logo_Dark.png" : "/Logo_Light.png"} 
            alt="VolaNow Logo" 
            width={160} 
            height={60} 
            className="h-10 w-auto object-contain" 
          />
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass()}>
              {link.label}
            </a>
          ))}
        </nav>

        <button className="hidden lg:block bg-[#B0FC51] text-[#181818] font-semibold text-base px-4 py-2 rounded-full hover:bg-[#9ae045] transition-all duration-300 hover:scale-105 shrink-0">
          Get Started
        </button>

        <button
          className={`lg:hidden shrink-0 p-1 ${scrolled ? "text-white" : "text-[#181818]"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
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
        <div
          className={`lg:hidden mt-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 animate-fade-in-down transition-all duration-500 ${
            scrolled
              ? "bg-[#181818]/90 backdrop-blur-xl border border-white/10"
              : "bg-white/80 backdrop-blur-xl border border-black/10"
          }`}
        >
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={linkClass(true)}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="bg-[#B0FC51] text-[#181818] font-semibold px-5 py-2.5 rounded-full hover:bg-[#9ae045] transition-colors w-full mt-2">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}