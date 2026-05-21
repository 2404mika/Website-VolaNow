"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="mx-3 pt-24 pb-8">
      <div className="w-full">
        <div className="bg-[#1a1a1a] rounded-[4.5rem] overflow-hidden min-h-[85vh] flex items-center md:px-16 justify-between">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"></div>
            <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-white/8 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]"></div>
          </div>

          <div className="z-10 w-full h-full flex items-center justify-center">
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                Unleash the full
                <br />
                potential of <span className="text-[#B0FC51]">AI</span>
              </h1>

              <p className={`mt-6 text-white/60 text-lg max-w-md transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                AI Ally is a versatile assistant that utilizes state-of-the-art natural language processing to provide real-time support and assistance across various domains.
              </p>

              <div className={`mt-10 flex items-center gap-6 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <button className="group bg-[#B0FC51] text-[#181818] px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                  Get the App
                  <span>→</span>
                </button>
                <button className="text-white font-medium hover:underline">
                  More
                </button>
              </div>

              <div className={`mt-16 flex gap-12 transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white">4.8</div>
                  <div className="text-white/50 text-sm mt-1">Rating on AppStore</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white">700K+</div>
                  <div className="text-white/50 text-sm mt-1">Active users</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex items-end justify-center lg:justify-end">
              <div className={`relative transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                <div className="absolute -inset-12 bg-white/10 rounded-full blur-[100px]"></div>
                <Image
                  src="/phone.png"
                  alt="VolaNow App"
                  width={950}
                  height={900}
                  className="relative z-10 w-[400px] sm:w-[550px] lg:w-[700px] h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}