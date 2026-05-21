"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

export default function About() {
  const aboutSection = useInView(0.2);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div ref={aboutSection.ref} className="max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-700 ${aboutSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block bg-[#B0FC51]/20 text-[#181818] px-4 py-2 rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#181818]">
            Discover <span className="text-[#B0FC51]">VolaNow</span>
          </h2>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            We are dedicated to transforming the way you travel. Our AI-powered platform connects you with the best destinations and services worldwide.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 delay-200 ${aboutSection.isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="bg-[#1a1a1a] rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/60">
                To make travel accessible, enjoyable, and stress-free for everyone through innovative AI technology.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-400 ${aboutSection.isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="bg-[#B0FC51] rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#181818] mb-4">Our Vision</h3>
              <p className="text-[#181818]/70">
                A world where every journey is seamless, every destination is accessible, and every traveler is empowered.
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-16 grid sm:grid-cols-3 gap-8 transition-all duration-700 delay-600 ${aboutSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {[
            { number: "50+", label: "Countries Covered" },
            { number: "1M+", label: "Happy Travelers" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#181818]">{stat.number}</div>
              <div className="text-gray-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}