// app/layout.tsx
import type { Metadata } from "next";
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
  authors: [{ name: "Yuri Esber", url: "https://yur1-dev.vercel.app" }],
  creator: "Yuri Esber",
  metadataBase: new URL("https://yur1-dev.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yuri Esber | Frontend Developer",
    description:
      "Frontend developer crafting fast, beautiful web experiences. Based in Nueva Ecija, Philippines.",
    url: "https://yur1-dev.vercel.app",
    siteName: "yur1.dev",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/preview.png", // metadataBase handles the full URL automatically
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
    creator: "@yur1dev", // your twitter/X handle if you have one
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
    google: "_WyNVJShgjIQ3jutlMAkpGPp_NJfiWuCq2JxkEJQvzY",
  },
};

// Person schema — tells Google exactly who you are
function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yuri Esber",
    url: "https://yur1-dev.vercel.app",
    jobTitle: "Frontend Developer",
    description:
      "Frontend developer crafting fast, beautiful web experiences. Based in Nueva Ecija, Philippines.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nueva Ecija",
      addressCountry: "PH",
    },
    sameAs: [
      "https://github.com/yur1-dev",
      // add your LinkedIn, Twitter etc here
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
      <body className={`${syne.className} antialiased bg-[#060608] text-white`}>
        <PersonSchema />
        {children}
      </body>
    </html>
  );
}
