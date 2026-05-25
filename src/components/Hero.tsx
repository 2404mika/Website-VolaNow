"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="mx-3 pt-24">
      <div className="w-full">
        <div className="bg-[#1a1a1a] rounded-3xl overflow-hidden min-h-[89vh] md:min-h-[89vh] md:lg-h-[89vh] flex flex-col items-center justify-center md:p-5">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/4 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-white/5 rounded-full blur-[80px] md:blur-[120px]"></div>
            <div className="absolute top-1/2 right-1/3 w-[150px] md:w-[400px] h-[150px] md:h-[400px] bg-white/8 rounded-full blur-[60px] md:blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[100px] md:w-[300px] h-[100px] md:h-[300px] bg-white/5 rounded-full blur-[50px] md:blur-[80px]"></div>
          </div>

          <div className="z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            <div className="order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                Facilitez votre
                <br />
                quotidien avec <span className="text-[#B0FC51]">VN</span>
              </h1>

              <p className={`mt-4 md:mt-6 text-white/60 text-base md:text-lg max-w-sm md:max-w-md transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                C'est une application de retrait d'argent via mobile money, de recharge de credit et de transfert d'argent toute operateur <span className="text-[#B0FC51]">100% hors ligne</span>
              </p>

              <div className={`mt-6 md:mt-10 flex items-center gap-4 md:gap-6 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                {/* Le lien Google Drive a été mis à jour ici */}
                <a 
                  href="https://github.com/2404mika/Website-VolaNow/releases/download/VolaNow/VolaNow.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#B0FC51] text-[#181818] px-6 md:px-8 py-3 md:py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform text-sm md:text-base cursor-pointer"
                >
                  Obtenir l'APK
                  <span>→</span>
                </a>
              </div>

              {/* <div className={`mt-8 md:mt-16 flex gap-8 md:gap-12 transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">4.8</div>
                  <div className="text-white/50 text-xs md:text-sm mt-1">Rating on AppStore</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">700K+</div>
                  <div className="text-white/50 text-xs md:text-sm mt-1">Active users</div>
                </div>
              </div> */}
            </div>

            <div className="order-1 lg:order-2 flex items-end justify-center">
              <div className={`relative transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                <div className="absolute -inset-8 md:-inset-12 bg-white/10 rounded-full blur-[60px] md:blur-[100px]"></div>
                <Image
                  src="/phone.png"
                  alt="VolaNow App"
                  width={950}
                  height={900}
                  className="relative z-10 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[600px] xl:w-[700px] h-auto drop-shadow-2xl"
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