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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${blinker.className} antialiased`}>{children}</body>
    </html>
  );
}
