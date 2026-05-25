"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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

function useTypingEffect(text: string, speed: number = 60, startDelay: number = 300, trigger: boolean = false) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!trigger) {
      setDisplayed("");
      setIsComplete(false);
      return;
    }

    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [trigger, text, speed, startDelay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return { displayed, showCursor: !isComplete && showCursor };
}

interface CardSpotlightProps {
  children: React.ReactNode;
  className?: string;
  index: number;
  isInView: boolean;
}

function CardSpotlight({ children, className, index, isInView }: CardSpotlightProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1000);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative cursor-pointer h-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
      } ${className}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative rounded-3xl p-[2px] overflow-hidden h-full">
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `conic-gradient(from ${isHovered ? "0deg" : "180deg"} at 50% 50%, #B0FC51, transparent 40%, transparent 60%, #B0FC51)`,
            animation: isHovered ? "spin 3s linear infinite" : "none",
          }}
        ></div>

        <div className="relative bg-white rounded-[1.4rem] p-8 overflow-hidden h-full flex flex-col transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-3">
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(350px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(176, 252, 81, 0.1), transparent 60%)`,
            }}
          ></div>

          <div className="absolute inset-0 overflow-hidden rounded-[1.4rem] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(176, 252, 81, 0.08) 1px, transparent 0)`,
                backgroundSize: "24px 24px",
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.7s",
              }}
            ></div>
          </div>

          <div
            className="absolute inset-0 rounded-[1.4rem] overflow-hidden pointer-events-none"
            style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.5s" }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(105deg, transparent 35%, rgba(176, 252, 81, 0.1) 45%, rgba(176, 252, 81, 0.15) 50%, rgba(176, 252, 81, 0.1) 55%, transparent 65%)`,
                transform: `translateX(${isHovered ? "200%" : "-200%"})`,
                transition: "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            ></div>
          </div>

          {ripples.map((ripple) => (
            <div
              key={ripple.id}
              className="absolute pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full bg-[#B0FC51]/40"
                style={{
                  animation: "rippleExpand 0.8s ease-out forwards",
                }}
              ></div>
            </div>
          ))}

          <div className="absolute top-0 right-0 w-40 h-40 bg-[#B0FC51]/0 group-hover:bg-[#B0FC51]/[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 transition-all duration-700"></div>

          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#B0FC51]/0 group-hover:bg-[#B0FC51]/[0.03] rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 transition-all duration-700"></div>

          <div className="relative z-10 flex flex-col h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const featuresSection = useInView(0.15);
  const fullTitle = "Pourquoi utiliser VolaNow ?";
  const { displayed, showCursor } = useTypingEffect(fullTitle, 55, 400, featuresSection.isInView);

  const titleParts = displayed.split(/(VolaNow)/);

  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#B0FC51]/[0.04] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#B0FC51]/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      <div ref={featuresSection.ref} className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span
            className={`inline-block bg-[#B0FC51]/20 text-[#181818] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 transition-all duration-700 ${
              featuresSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Avantages
          </span>

          <div className="min-h-[3rem] md:min-h-[4rem] flex items-center justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#181818]">
              {titleParts.map((part, i) =>
                part === "VolaNow" ? (
                  <span key={i} className="inline-block align-middle ml-2 relative w-[140px] h-[40px] md:w-[180px] md:h-[50px]">
                    <Image
                      src="/Logo_Light.png"
                      alt="VolaNow"
                      fill
                      className="object-contain"
                    />
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
              <span
                className={`inline-block w-[3px] h-[0.85em] bg-[#B0FC51] ml-1 align-middle rounded-full ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
                style={{ transition: "opacity 0.1s" }}
              ></span>
            </h2>
          </div>

          <p
            className={`mt-4 md:mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto transition-all duration-700 delay-500 ${
              featuresSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Des services financiers simples, rapides et accessibles à tout moment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              ),
              title: "Retrait",
              desc: "Retirez votre argent en toute sécurité auprès de notre vaste réseau de points de service."
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              ),
              title: "Recharge Crédit",
              desc: "Rechargez votre téléphone instantanément avec tous les opérateurs disponibles."
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M22.5 7.5l-4.5 4.5m0 0l4.5 4.5M3 16.5h18" />
              ),
              title: "Transfert d'Argent",
              desc: "Envoyez et recevez de l'argent en temps réel vers n'importe quel destinataire."
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 010-5.304m5.304 0a3.75 3.75 0 010 5.304M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              ),
              title: "Pas Besoin d'Internet",
              desc: "Effectuez vos transactions même sans connexion internet"
            }
          ].map((feature, index) => (
            <CardSpotlight key={index} index={index} isInView={featuresSection.isInView}>
              <div className="relative inline-flex w-14 h-14 bg-[#181818] rounded-2xl items-center justify-center mb-6 shadow-lg transition-all duration-500 ease-out group-hover:bg-[#B0FC51] group-hover:shadow-[#B0FC51]/40 group-hover:scale-110 group-hover:rotate-[5deg]">
                <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/20 transition-all duration-500 group-hover:animate-pulse"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B0FC51"
                  className="w-7 h-7 transition-all duration-500 ease-out group-hover:stroke-[#181818] group-hover:scale-110 relative z-10"
                >
                  {feature.icon}
                </svg>
              </div>

              <h3 className="text-lg font-bold text-[#181818] mb-3 leading-tight group-hover:text-[#181818] transition-colors duration-500">
                {feature.title}
              </h3>

              <div className="w-0 h-[2px] bg-[#B0FC51] group-hover:w-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] mb-4"></div>

              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-500 flex-1">
                {feature.desc}
              </p>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
