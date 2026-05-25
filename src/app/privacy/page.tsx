import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialité – VolaNow",
  description: "Politique de confidentialité de Volanow, application mobile de retrait d'argent Mobile Money, transfert d'argent et recharge de crédit téléphonique à Madagascar.",
};

const sections = [
  {
    title: "1. Présentation de l'application",
    content:
      "**Volanow** est une application fonctionnant principalement **hors ligne** grâce à l'utilisation des technologies USSD fournies par les opérateurs téléphoniques malgaches. L'application est compatible avec les principaux services Mobile Money des opérateurs de Madagascar : Telma Madagascar, Yas Madagascar, Airtel Madagascar. Volanow facilite l'accès rapide à certains services sans nécessiter une connexion Internet active.",
  },
  {
    title: "2. Données collectées",
    content:
      "Volanow est conçu pour limiter au maximum la collecte de données personnelles. L'application peut uniquement utiliser : le numéro de téléphone de l'utilisateur pour exécuter les opérations USSD ; les informations nécessaires à l'exécution des services Mobile Money ; les autorisations téléphoniques requises pour lancer les codes USSD depuis l'appareil.",
    subsections: [
      {
        subtitle: "Données NON collectées",
        content:
          "Volanow ne collecte pas : vos mots de passe Mobile Money ; vos codes PIN ; vos conversations privées ; vos contacts personnels ; vos données bancaires ; votre position GPS ; vos photos ou fichiers personnels.",
      },
    ],
  },
  {
    title: "3. Fonctionnement hors ligne",
    content:
      "Volanow fonctionne principalement via des requêtes USSD envoyées directement depuis votre téléphone vers les opérateurs mobiles. Aucune connexion à un serveur distant n'est nécessaire pour les opérations principales de l'application. Les informations saisies restent principalement sur votre appareil et transitent uniquement par les systèmes sécurisés des opérateurs téléphoniques concernés.",
  },
  {
    title: "4. Utilisation des permissions",
    content:
      "Selon votre appareil Android, Volanow peut demander certaines autorisations telles que : accès aux appels téléphoniques ; exécution des codes USSD ; lecture de l'état du téléphone. Ces permissions sont utilisées uniquement pour permettre le bon fonctionnement des services proposés.",
  },
  {
    title: "5. Sécurité des données",
    content:
      "Nous mettons en œuvre des mesures raisonnables pour protéger les utilisateurs contre les accès non autorisés, les modifications ou les utilisations abusives des informations utilisées par l'application. Cependant, la sécurité des transactions Mobile Money dépend également des infrastructures et systèmes des opérateurs téléphoniques. Nous recommandons aux utilisateurs : de garder leur code PIN secret ; de ne jamais partager leurs informations confidentielles ; de sécuriser leur téléphone avec un mot de passe ou une empreinte digitale.",
  },
  {
    title: "6. Partage des informations",
    content:
      "Volanow ne vend ni ne loue les données des utilisateurs à des tiers. Les opérations effectuées via l'application sont traitées directement par les services des opérateurs téléphoniques et Mobile Money concernés.",
  },
  {
    title: "7. Responsabilité de l'utilisateur",
    content:
      "L'utilisateur est responsable : des informations saisies dans l'application ; de la confidentialité de ses identifiants Mobile Money ; de l'utilisation correcte des services proposés. Volanow ne pourra être tenu responsable en cas : d'erreur de saisie ; d'envoi vers un mauvais numéro ; de problème provenant des réseaux des opérateurs ; d'interruption des services USSD.",
  },
  {
    title: "8. Modifications de la politique de confidentialité",
    content:
      "Cette politique de confidentialité peut être mise à jour à tout moment afin de refléter les évolutions de l'application ou des obligations légales. Les utilisateurs seront informés des modifications importantes via l'application ou les plateformes de distribution.",
  },
  {
    title: "9. Contact",
    content:
      "Pour toute question concernant cette politique de confidentialité ou l'utilisation de Volanow, vous pouvez contacter l'équipe de développement de l'application via les moyens de contact officiels qui seront indiqués dans l'application ou sur sa page de téléchargement.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F2F2F4] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#181818] mb-2">
            Politique de Confidentialité – Volanow
          </h1>
          <p className="text-gray-500 mb-10">
            <strong>Dernière mise à jour :</strong> 22 Mai 2026
          </p>
          <p className="text-[#181818]/80 mb-10 leading-relaxed text-justify">
            Bienvenue sur <strong>Volanow</strong>, une application mobile permettant
            d&apos;effectuer des opérations de <strong>retrait d&apos;argent Mobile Money</strong>, de{" "}
            <strong>transfert d&apos;argent</strong> et de <strong>recharge de crédit téléphonique</strong> via
            des <strong>codes USSD</strong>, avec les principaux opérateurs téléphoniques de Madagascar.
          </p>
          <p className="text-[#181818]/80 mb-12 leading-relaxed text-justify">
            La protection de vos données personnelles est importante pour nous. Cette
            politique de confidentialité explique quelles informations peuvent être
            utilisées par l&apos;application, comment elles sont traitées et vos droits en
            tant qu&apos;utilisateur.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-[#181818] mb-3">
                  {section.title}
                </h2>
                <p className="text-[#181818]/70 leading-relaxed text-justify">{section.content}</p>
                {section.subsections?.map((sub) => (
                  <div key={sub.subtitle} className="mt-4 ml-4">
                    <h3 className="text-lg font-medium text-[#181818] mb-2">
                      {sub.subtitle}
                    </h3>
                    <p className="text-[#181818]/70 leading-relaxed text-justify">{sub.content}</p>
                  </div>
                ))}
              </section>
            ))}
          </div>

          <p className="mt-12 text-[#181818]/60 text-sm">
            En utilisant <strong>Volanow</strong>, vous acceptez les conditions décrites
            dans cette politique de confidentialité.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
