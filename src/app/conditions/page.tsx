import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation – VolaNow",
  description: "Conditions d'utilisation de Volanow, application mobile de retrait d'argent Mobile Money, transfert d'argent et recharge de crédit téléphonique à Madagascar.",
};

const sections = [
  {
    title: "1. Description du service",
    content:
      "Volanow est une application facilitant l'accès aux services Mobile Money et aux services de recharge téléphonique à travers les réseaux des opérateurs mobiles de Madagascar : Telma Madagascar, Yas Madagascar, Airtel Madagascar. L'application utilise les technologies USSD disponibles sur les téléphones mobiles afin d'exécuter certaines opérations sans connexion Internet.",
  },
  {
    title: "2. Acceptation des conditions",
    content:
      "En installant ou en utilisant Volanow, vous reconnaissez : avoir lu les présentes Conditions d'Utilisation ; comprendre leur contenu ; accepter d'être lié par celles-ci.",
  },
  {
    title: "3. Conditions d'accès",
    content:
      "Pour utiliser Volanow, l'utilisateur doit : disposer d'un téléphone compatible ; posséder une carte SIM active auprès d'un opérateur compatible ; avoir un compte Mobile Money actif selon les services utilisés ; respecter les lois et réglementations en vigueur à Madagascar.",
  },
  {
    title: "4. Utilisation autorisée",
    content:
      "L'utilisateur s'engage à utiliser Volanow uniquement à des fins légales et personnelles. Il est interdit : d'utiliser l'application pour des activités frauduleuses ; de tenter de contourner les mécanismes de sécurité ; de perturber le fonctionnement normal de l'application ; d'utiliser l'application pour des opérations illégales ou non autorisées.",
  },
  {
    title: "5. Responsabilité de l'utilisateur",
    content:
      "L'utilisateur est seul responsable : des informations saisies dans l'application ; des numéros de téléphone utilisés lors des transferts ; de la confidentialité de son code PIN Mobile Money ; des transactions effectuées depuis son appareil. Avant toute validation d'opération, l'utilisateur doit vérifier les informations affichées.",
  },
  {
    title: "6. Limitation de responsabilité",
    content:
      "Volanow agit comme une interface facilitant l'utilisation des services USSD fournis par les opérateurs téléphoniques. Par conséquent, Volanow ne peut être tenu responsable : des interruptions réseau ; des erreurs provenant des opérateurs téléphoniques ; des retards de traitement ; des pertes liées à une erreur de saisie ; des indisponibilités des services Mobile Money ; des problèmes techniques indépendants de l'application. Les transactions restent soumises aux conditions des opérateurs et des services Mobile Money concernés.",
  },
  {
    title: "7. Sécurité",
    content:
      "L'utilisateur doit prendre toutes les mesures nécessaires pour sécuriser son appareil mobile, notamment : protéger son téléphone par mot de passe ; ne jamais partager son code PIN ; maintenir son appareil à jour. Volanow ne demandera jamais le mot de passe ou le code secret Mobile Money de l'utilisateur.",
  },
  {
    title: "8. Disponibilité du service",
    content:
      "Nous nous efforçons d'assurer le bon fonctionnement de l'application. Toutefois, Volanow ne garantit pas : une disponibilité permanente ; l'absence totale d'erreurs ; la compatibilité avec tous les appareils Android. Certaines fonctionnalités peuvent être modifiées, suspendues ou supprimées sans préavis.",
  },
  {
    title: "9. Propriété intellectuelle",
    content:
      "Le nom Volanow, son logo, son interface et ses contenus sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction, modification ou distribution non autorisée est interdite sans autorisation préalable.",
  },
  {
    title: "10. Modification des conditions",
    content:
      "Les présentes Conditions d'Utilisation peuvent être modifiées à tout moment afin de s'adapter aux évolutions techniques, légales ou fonctionnelles de l'application. La poursuite de l'utilisation de Volanow après modification vaut acceptation des nouvelles conditions.",
  },
  {
    title: "11. Contact",
    content:
      "Pour toute question concernant les présentes Conditions d'Utilisation, les utilisateurs peuvent contacter l'équipe de développement de Volanow via les moyens de contact officiels indiqués dans l'application ou sur sa page de téléchargement.",
  },
];

export default function ConditionsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F2F2F4] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#181818] mb-2">
            Conditions d&apos;Utilisation – Volanow
          </h1>
          <p className="text-gray-500 mb-10">
            <strong>Dernière mise à jour :</strong> 22 Mai 2026
          </p>
          <p className="text-[#181818]/80 mb-10 leading-relaxed text-justify">
            Bienvenue sur <strong>Volanow</strong>, une application mobile permettant
            d&apos;effectuer des opérations de retrait d&apos;argent, de transfert Mobile
            Money et de recharge de crédit téléphonique via des codes USSD avec les
            opérateurs téléphoniques de Madagascar.
          </p>
          <p className="text-[#181818]/80 mb-12 leading-relaxed text-justify">
            En utilisant l&apos;application Volanow, vous acceptez pleinement les
            présentes Conditions d&apos;Utilisation. Si vous n&apos;acceptez pas ces
            conditions, veuillez ne pas utiliser l&apos;application.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-[#181818] mb-3">
                  {section.title}
                </h2>
                <p className="text-[#181818]/70 leading-relaxed text-justify">{section.content}</p>
              </section>
            ))}
          </div>

          <p className="mt-12 text-[#181818]/60 text-sm">
            En utilisant <strong>Volanow</strong>, vous acceptez les présentes
            Conditions d&apos;Utilisation.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
