"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

interface TeamCardProps {
  member: {
    name: string;
    role: string;
    location: string;
    phone: string;
    email: string;
    image: string;
  };
  index: number;
  isInView: boolean;
}

function TeamCard({ member, index, isInView }: TeamCardProps) {
  return (
    <div
      className={`group relative cursor-pointer transition-all duration-700 animate-float-card group-hover:animate-pause ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
      }`}
      style={{
        transitionDelay: `${index * 200 + 400}ms`,
        marginTop: index === 1 ? "2.5rem" : index === 2 ? "5rem" : "0",
        animationDelay: `${index * 0.5}s`,
      }}
    >
      <div className="relative bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/50 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-3 group-hover:shadow-xl group-hover:shadow-[#B0FC51]/15">
        {/* Permanent Wave Animation */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div
            className="absolute inset-0 animate-wave"
            style={{
              background: `linear-gradient(105deg, transparent 40%, rgba(176, 252, 81, 0.08) 45%, rgba(176, 252, 81, 0.15) 50%, rgba(176, 252, 81, 0.08) 55%, transparent 60%)`,
            }}
          ></div>
        </div>

        <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#B0FC51] to-[#9ae045] w-0 group-hover:w-full transition-all duration-700 ease-out"></div>

        <div className="flex items-start justify-between mb-6 relative z-10">
          <button className="text-orange-400 hover:text-orange-500 transition-all duration-300 hover:rotate-12 hover:scale-110 transform">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </button>
          <button className="text-gray-300 hover:text-[#181818] transition-all duration-300 hover:scale-110 transform">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="19" r="1.5" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center text-center relative z-10">
          <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 shadow-md bg-gray-100 transition-all duration-500 group-hover:shadow-[#B0FC51]/30 group-hover:scale-105">
            <Image
              src={member.image}
              alt={member.name}
              width={80}
              height={80}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full ring-2 ring-[#B0FC51]/0 group-hover:ring-[#B0FC51]/40 ring-offset-2 ring-offset-white transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100"></div>
          </div>

          <h3 className="text-lg font-bold text-[#181818] mb-1 transition-all duration-500 group-hover:translate-y-[-2px]">{member.name}</h3>
          <p className="text-gray-400 text-sm mb-5 transition-colors duration-500 group-hover:text-gray-500">{member.location}</p>

          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-0 bg-[#B0FC51] group-hover:w-8 transition-all duration-700 ease-out" style={{ transitionDelay: "100ms" }}></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#B0FC51] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" style={{ transitionDelay: "200ms" }}></div>
            <div className="h-[1px] w-0 bg-[#B0FC51] group-hover:w-8 transition-all duration-700 ease-out" style={{ transitionDelay: "300ms" }}></div>
          </div>

          <p className="text-[#181818] text-sm font-medium mb-1 transition-colors duration-500 group-hover:text-[#B0FC51]">{member.phone}</p>
          <a href={`mailto:${member.email}`} className="text-[#86D12E] text-sm hover:underline transition-all duration-300 hover:text-[#7ab83e] hover:translate-x-1">
            {member.email}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const aboutSection = useInView(0.15);

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#F8F9FB]">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#B0FC51]/[0.04] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#B0FC51]/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      <div ref={aboutSection.ref} className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="min-h-[3rem] md:min-h-[4rem] flex items-center justify-center mb-3 md:mb-4 overflow-hidden">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#181818] transition-all duration-1000 ${
                aboutSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
              }`}
            >
              Notre Équipe
            </h2>
          </div>

          <div className="overflow-hidden mb-3 md:mb-4">
            <div
              className={`w-16 h-1 bg-gradient-to-r from-[#B0FC51] to-[#9ae045] mx-auto rounded-full transition-all duration-1000 delay-300 ${
                aboutSection.isInView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            ></div>
          </div>

          <p
            className={`text-gray-400 text-base md:text-lg max-w-xl mx-auto transition-all duration-1000 delay-500 ${
              aboutSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Découvrez les talents qui font vivre VolaNow au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {[
            {
              name: "Thierry R.",
              role: "FullStack & Mobile",
              location: "Antsirabe, MG",
              phone: "+261 34 83 617 22",
              email: "thierryrfh@gmail.com",
              image: "/team/fy.jpeg",
            },
            {
              name: "Manoa Fanekena",
              role: "Web Developer & Mobile",
              location: "Antsirabe, MG",
              phone: "+261 38 25 839 35",
              email: "ravomanoa3@gmail.com",
              image: "/team/manoa.jpeg",
            },
            {
              name: "Mika Heritiana",
              role: "UX Designer & Mobile Developer",
              location: "Antsirabe, MG",
              phone: "+261 34 59 290 75",
              email: "rakotomalalaheritiana22@gmail.com",
              image: "/team/mika.jpeg",
            },
          ].map((member, index) => (
            <TeamCard key={index} member={member} index={index} isInView={aboutSection.isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
