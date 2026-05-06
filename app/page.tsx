"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen"; // adjust path to wherever you put it
import Navbar from "./components/Navbar/Navbar";
import Hero from "./(root)/Hero/Hero";
import Experience from "./(root)/Experience/Experience";
import Techstack from "./(root)/Techstack/Techstack";
import Portfolio from "./(root)/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Contact from "./contacts/page";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
          pointerEvents: loaded ? "auto" : "none",
        }}
      >
        <Navbar />
        <Hero />
        <Experience />
        <Techstack />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
