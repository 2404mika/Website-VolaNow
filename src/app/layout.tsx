import type { Metadata } from "next";
import "./globals.css";
import FontStyles from "./FontStyles";

const siteUrl = "https://volanow.vercel.app/";

export const metadata: Metadata = {
  title: {
    default: "VolaNow - Retrait, Transfert & Recharge de Crédit Mobile hors-ligne",
    template: "%s | VolaNow",
  },
  description:
    "VolaNow est l'application mobile qui vous permet de retirer de l'argent, recharger du crédit et transférer des fonds en totale autonomie, même sans connexion Internet. Disponible à Madagascar.",
  keywords: [
    "VolaNow",
    "retrait mobile",
    "recharge crédit",
    "transfert d'argent",
    "hors-ligne",
    "offline",
    "Madagascar",
    "mobile money",
    "application financière",
  ],
  applicationName: "VolaNow",
  authors: [{ name: "VolaNow" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "VolaNow",
  publisher: "VolaNow",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "fr-MG": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MG",
    siteName: "VolaNow",
    title: "VolaNow - Retrait, Transfert & Recharge Mobile hors-ligne",
    description:
      "Retirez de l'argent, rechargez du crédit et transférez des fonds en toute simplicité, même sans connexion Internet.",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VolaNow - Application mobile hors-ligne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@volanow",
    creator: "@volanow",
    title: "VolaNow - Retrait, Transfert & Recharge Mobile hors-ligne",
    description:
      "Retirez de l'argent, rechargez du crédit et transférez des fonds en toute simplicité, même sans connexion Internet.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "VolaNow",
        url: siteUrl,
        logo: `${siteUrl}/Logo_Dark.png`,
        description:
          "Application mobile de retrait, transfert et recharge de crédit hors-ligne à Madagascar.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "MG",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "VolaNow",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "fr-MG",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#software`,
        name: "VolaNow",
        operatingSystem: "Android",
        applicationCategory: "FinanceApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "MGA",
        },
        description:
          "Application mobile de retrait, transfert et recharge de crédit 100% hors-ligne.",
      },
    ],
  };

  return (
    <html lang="fr-MG" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ fontFamily: "'Zalando Sans Expanded', sans-serif" }}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zalando+Sans+Expanded:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <FontStyles />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
