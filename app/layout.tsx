import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yuri Esber | Frontend Developer",
  description:
    "Frontend developer crafting fast, beautiful web experiences. Based in Nueva Ecija, Philippines.",
  openGraph: {
    title: "Yuri Esber | Frontend Developer",
    description: "Frontend developer crafting fast, beautiful web experiences.",
    url: "https://yur1-dev.vercel.app",
    siteName: "yur1.dev",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${syne.className} antialiased bg-[#060608] text-white`}>
        {children}
      </body>
    </html>
  );
}
