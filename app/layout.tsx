// app/layout.tsx
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
    default: "Yuri Esber | Frontend Developer",
    template: "%s | Yuri Esber",
  },
  description:
    "Frontend developer crafting fast, beautiful web experiences. Based in Nueva Ecija, Philippines.",
  keywords: [
    "frontend developer Philippines",
    "web developer Nueva Ecija",
    "Next.js developer",
    "React developer Philippines",
    "freelance web developer",
    "Yuri Esber",
    "yur1-dev",
  ],
  authors: [{ name: "Yuri Esber", url: "https://www.yur1.xyz" }],
  creator: "Yuri Esber",
  metadataBase: new URL("https://www.yur1.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yuri Esber | Frontend Developer",
    description:
      "Frontend developer crafting fast, beautiful web experiences. Based in Nueva Ecija, Philippines.",
    url: "https://www.yur1.xyz",
    siteName: "yur1.xyz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Yuri Esber | Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri Esber | Frontend Developer",
    description: "Frontend developer crafting fast, beautiful web experiences.",
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
    url: "https://www.yur1.xyz",
    jobTitle: "Frontend Developer",
    description:
      "Frontend developer crafting fast, beautiful web experiences. Based in Nueva Ecija, Philippines.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nueva Ecija",
      addressCountry: "PH",
    },
    sameAs: ["https://github.com/yur1-dev"],
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
