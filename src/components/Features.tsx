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

export default function Features() {
  const featuresSection = useInView(0.2);

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div ref={featuresSection.ref} className="max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-700 ${featuresSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block bg-[#B0FC51]/20 text-[#181818] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#181818]">
            Why Choose <span className="text-[#B0FC51]">VolaNow</span>?
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              ),
              title: "Fast Booking",
              desc: "Book your trips in seconds with our streamlined process."
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              ),
              title: "Secure Travel",
              desc: "Your safety is our priority with verified partners."
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              ),
              title: "Global Coverage",
              desc: "Access destinations worldwide with local expertise."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#B0FC51]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#B0FC51]/10 hover:-translate-y-2 ${
                featuresSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="w-14 h-14 bg-[#181818] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#B0FC51] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#B0FC51" className="w-7 h-7 group-hover:stroke-[#181818] transition-colors duration-300">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#181818] mb-3">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}