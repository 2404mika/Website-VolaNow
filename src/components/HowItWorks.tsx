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

export default function HowItWorks() {
  const section = useInView(0.2);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      image: "/retrait.jpeg",
      modalImage: "/t_retrait.jpeg",
      title: "Retrait sécurisé",
      desc: "Retirez vos fonds facilement auprès de nos nombreux agents agréés.",
      instructions: [
        { step: "1", title: "Choisir l'operateur", text: "Selectionnez l'operateur dont vous voulez faire un retrait d'argent" },
        { step: "2", title: "Information de retrait", text: "Inserer ou scanner le numero de l'agent du cash point." },
        { step: "3", title: "Montant a retirer", text: "Saisissez le montant a retirer " },
        { step: "4", title: "Confirmation", text: "Cliquez sur Confirmer pour valider le retrait d'argent" },
      ]
    },
    {
      num: "02",
      image: "/transfert.jpeg",
      modalImage: "/t_transfert.jpeg",
      title: "Transfert instantané",
      desc: "Envoyez de l'argent à vos proches en quelques secondes, vers tout operateur",
      instructions: [
        { step: "1", title: "Choisissez l'operateur d'envoi", text: "Selectionnez votre operateur d'envoi" },
        { step: "2", title: "Choisissez l'operateur de destination", text: "Sélectionnez l'operateur de destination" },
        { step: "3", title: "Entrez le destinataire", text: "Saisissez le numéro du destinataire." },
        { step: "3", title: "Montant a transferer", text: "Saisissez dans le champ le montant a envoyer" },
        { step: "4", title: "Confirmez et envoyez", text: "Vérifiez le numero et le montant, confirmer pour valider la transaction" },
      ]
    },
    {
      num: "03",
      image: "/credit.jpeg",
      modalImage: "/t_credit.jpeg",
      title: "Achat de crédit",
      desc: "Rechargez votre téléphone ou achetez des forfaits rapidement et sans frais.",
      instructions: [
        { step: "1", title: "Sélectionnez Crédit", text: "Grattez votre pour rendre visible le code du credit" },
        { step: "2", title: "Placez et scannez", text: "Placez dans le cadre la carte de credit pour demarrer le scan" },
        { step: "3", title: "Demarrez le scan", text: "Une fois bien placée, commencer a scanner le credit" },
      ]
    },
  ];

  useEffect(() => {
    if (selectedStep !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedStep]);

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F9FB]">
      <div ref={section.ref} className="max-w-[90rem] mx-auto">
        
        {/* En-tête de la section */}
        <div className={`text-center transition-all duration-700 ${section.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block bg-[#B0FC51]/10 text-[#7ab83e] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 border border-[#B0FC51]/20">
            Comment ça marche
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#181818]">
            3 étapes <span className="text-[#7ab83e]">simples</span>
          </h2>
          <p className="mt-4 md:mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Découvrez comment utiliser notre application pour révolutionner votre expérience de paiement au quotidien.
          </p>
        </div>

        {/* Grille des 3 étapes */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative flex flex-col items-center group transition-all duration-700"
              style={{ 
                transitionDelay: `${index * 200}ms`,
                opacity: section.isInView ? 1 : 0,
                transform: section.isInView ? 'translateY(0)' : 'translateY(40px)'
              }}
            >
              {/* Bulle du numéro */}
              <div className="mb-6 w-14 h-14 rounded-full bg-[#B0FC51] text-[#181818] flex items-center justify-center text-xl font-bold shadow-[0_0_20px_rgba(176,252,81,0.3)] z-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#7ab83e] group-hover:text-white">
                {step.num}
              </div>

              {/* Image cliquable */}
              <button 
                onClick={() => setSelectedStep(index)}
                className="w-full relative aspect-[9/19] max-w-[260px] mx-auto overflow-hidden rounded-[2rem] border border-gray-200 shadow-2xl transition-transform duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_rgba(176,252,81,0.15)] bg-white cursor-pointer"
              >
                <Image 
                  src={step.image} 
                  alt={step.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#181818]/80 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Voir les détails
                  </span>
                </div>
              </button>

              {/* Texte mobile - Voir instructions */}
              <button 
                onClick={() => setSelectedStep(index)}
                className="md:hidden text-[#7ab83e] text-xs font-medium mt-3 mb-1 hover:underline"
              >
                Voir instructions →
              </button>

              {/* Texte */}
              <div className="mt-8 text-center max-w-[300px]">
                <h3 className="text-xl md:text-2xl font-bold text-[#181818] mb-3 transition-colors duration-300 group-hover:text-[#7ab83e]">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedStep !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStep(null)}
        >
          {/* Backdrop flouté */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Contenu du modal */}
          <div 
            className="relative bg-[#181818] rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button 
              onClick={() => setSelectedStep(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image à gauche */}
              <div className="md:w-2/5 relative flex items-center justify-center p-8 overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none bg-[#1a1a1a]">
                <div className="relative aspect-[9/19] max-w-[280px] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-[#181818]">
                  <Image 
                    src={steps[selectedStep].modalImage} 
                    alt={steps[selectedStep].title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Instructions à droite */}
              <div className="md:w-3/5 p-8 md:p-12">
                <span className="inline-block bg-[#B0FC51]/10 text-[#B0FC51] px-3 py-1.5 rounded-full text-xs font-medium mb-4 border border-[#B0FC51]/20">
                  Guide d'utilisation
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {steps[selectedStep].title}
                </h3>
                <p className="text-white/60 text-sm mb-8">
                  {steps[selectedStep].desc}
                </p>

                <div className="space-y-8">
                  {steps[selectedStep].instructions.map((inst, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B0FC51] text-[#181818] flex items-center justify-center text-sm font-bold">
                        {inst.step}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{inst.title}</h4>
                        <p className="text-white/50 text-sm leading-relaxed">{inst.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
