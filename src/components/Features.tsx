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
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div ref={featuresSection.ref} className="max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-700 ${featuresSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block bg-[#B0FC51]/20 text-[#181818] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            Avantages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#181818]">
            Pourquoi utiliser <span className="text-[#B0FC51]">VolaNow</span> ?
          </h2>
          <p className="mt-4 md:mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Découvrez les raisons qui font de VolaNow votre meilleur compagnon de voyage.
          </p>
        </div>

        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              ),
              title: "Réservation Instantanée",
              desc: "Réservez vos voyages en quelques secondes grâce à notre processus simplifié et intuitif."
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
              ),
              title: "Assistant IA Intelligent",
              desc: "Notre intelligence artificielle vous recommande les meilleures options selon vos préférences."
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              ),
              title: "Couverture Mondiale",
              desc: "Accédez à des destinations dans le monde entier avec une expertise locale."
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              ),
              title: "Voyage Sécurisé",
              desc: "Votre sécurité est notre priorité avec des partenaires vérifiés et certifiés."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#B0FC51] transition-all duration-500 hover:shadow-2xl hover:shadow-[#B0FC51]/20 hover:-translate-y-3 hover:scale-[1.02] cursor-pointer relative overflow-hidden ${
                featuresSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#B0FC51]/0 to-[#B0FC51]/0 group-hover:from-[#B0FC51]/5 group-hover:to-[#B0FC51]/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#181818] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#B0FC51] group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-[#B0FC51]/40">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#B0FC51" className="w-7 h-7 group-hover:stroke-[#181818] group-hover:scale-110 transition-all duration-500">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#181818] mb-3 group-hover:text-[#B0FC51] transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}