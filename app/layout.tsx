import type { Metadata } from "next";
import Script from "next/script";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yuri Esber | Fullstack Developer",
    template: "%s | Yuri Esber",
  },
  description:
    "Fullstack developer based in Nueva Ecija and San Jose, Tarlac, Philippines. I build websites, web applications, and Web3 projects — from landing pages and e-commerce to dApps and Solana tools. Available for freelance and full-time remote roles.",
  keywords: [
    "fullstack developer Nueva Ecija",
    "fullstack developer Tarlac",
    "web developer San Jose Tarlac",
    "web developer Cabanatuan",
    "website developer Nueva Ecija",
    "website developer Tarlac",
    "website developer Philippines",
    "web app developer Central Luzon",
    "web app developer Philippines",
    "web application developer Philippines",
    "e-commerce developer Philippines",
    "landing page developer Philippines",
    "web3 developer Philippines",
    "Next.js developer Philippines",
    "React developer Philippines",
    "Node.js developer Philippines",
    "Solana developer",
    "dApp developer",
    "freelance fullstack developer Philippines",
    "TypeScript developer Philippines",
    "Yuri Esber",
    "yur1-dev",
  ],
  authors: [{ name: "Yuri Esber", url: "https://yur1.xyz" }],
  creator: "Yuri Esber",
  metadataBase: new URL("https://yur1.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yuri Esber | Fullstack Developer",
    description:
      "Fullstack developer building websites, web apps, and Web3 projects. Next.js · React · Node.js · Solana. Based in Philippines.",
    url: "https://yur1.xyz",
    siteName: "yur1.xyz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Yuri Esber | Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri Esber | Fullstack Developer",
    description:
      "Fullstack developer building websites, web apps, and Web3 projects. Philippines-based, remote-ready.",
    images: ["/preview.png"],
    creator: "@yur1dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "MPZ2pyhxQPPN-AV_GIozGRF8Ca1xA5-H1d5azktnpCA",
  },
};

function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yuri Esber",
    url: "https://yur1.xyz",
    jobTitle: "Fullstack Developer",
    description:
      "Fullstack developer building websites, web applications, and Web3 projects. Next.js, React, Node.js, Solana. Based in Nueva Ecija and San Jose, Tarlac, Philippines.",
    knowsAbout: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Solana",
      "Web3",
      "MongoDB",
      "Tailwind CSS",
      "E-commerce Development",
      "Web Application Development",
      "Landing Page Development",
    ],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Nueva Ecija",
        addressRegion: "Central Luzon",
        addressCountry: "PH",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "San Jose",
        addressRegion: "Tarlac",
        addressCountry: "PH",
      },
    ],
    sameAs: [
      "https://github.com/yur1-dev",
      "https://www.linkedin.com/in/yuri-esber-9422b1227/",
      "https://t.me/yuri_roc",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VW7WHKJRXR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VW7WHKJRXR');
          `}
        </Script>
      </head>
      <body className={`${syne.className} antialiased bg-[#060608] text-white`}>
        <PersonSchema />
        {children}
      </body>
    </html>
  );
}
