import type { Metadata } from "next";
import { Blinker } from "next/font/google";
import "./globals.css";

const blinker = Blinker({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuri Esber | Frontend Developer",
  description:
    "Welcome to my corner of the web. I'm Yuri, a frontend developer dedicated to crafting interactive and intuitive user experiences that bring ideas to life.",
  openGraph: {
    title: "Yuri Esber | Frontend Developer",
    description:
      "Welcome to my corner of the web. I'm Yuri, a frontend developer dedicated to crafting interactive and intuitive user experiences that bring ideas to life.",
    url: "https://yur1-dev.vercel.app",
    siteName: "Yuri Esber",
    images: [
      {
        url: "https://yur1-dev.vercel.app/og-image.png", // Update this to your actual OG image if different
        width: 1200,
        height: 630,
        alt: "Yuri Esber Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri Esber | Frontend Developer",
    description:
      "Welcome to my corner of the web. I'm Yuri, a frontend developer dedicated to crafting interactive and intuitive user experiences that bring ideas to life.",
    creator: "@yuri_esb", // Replace with your actual Twitter handle
    images: ["https://yur1-dev.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden loading">
      <body className={`${blinker.className} antialiased loading`}>
        {children}
      </body>
    </html>
  );
}
