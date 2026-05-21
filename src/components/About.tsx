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

interface TeamMember {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  image: string;
}

function TeamCard({ member, index, isInView }: { member: TeamMember; index: number; isInView: boolean }) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-xl hover:shadow-[#B0FC51]/10 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginTop: index === 1 ? "2.5rem" : index === 2 ? "5rem" : "0",
      }}
    >
      <div className="flex items-start justify-between mb-6">
        <button className="text-gray-300 hover:text-[#B0FC51] transition-colors duration-300">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        </button>
        <button className="text-gray-300 hover:text-[#181818] transition-colors duration-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 shadow-md bg-gray-100">
          <Image
            src={member.image}
            alt={member.name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-lg font-bold text-[#181818] mb-1">{member.name}</h3>
        <p className="text-gray-400 text-sm mb-5">{member.location}</p>

        <p className="text-[#181818] text-sm font-medium mb-1">{member.phone}</p>
        <a href={`mailto:${member.email}`} className="text-[#B0FC51] text-sm hover:underline transition-colors duration-300">
          {member.email}
        </a>
      </div>
    </div>
  );
}

export default function About() {
  const aboutSection = useInView(0.15);

  const team: TeamMember[] = [
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
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#F8F9FB]">
      <div ref={aboutSection.ref} className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#181818] transition-all duration-700 ${
              aboutSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Notre Équipe
          </h2>
          <p
            className={`mt-3 md:mt-4 text-gray-400 text-base md:text-lg transition-all duration-700 delay-100 ${
              aboutSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Découvrez les talents qui font vivre VolaNow au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} index={index} isInView={aboutSection.isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
