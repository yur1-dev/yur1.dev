"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./(root)/Hero/Hero";
import Experience from "./(root)/Experience/Experience";
import Techstack from "./(root)/Techstack/Techstack";
import Portfolio from "./(root)/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Cgradients from "./components/Cgradients/Cgradients";
import Loader from "@/components/Loader/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisited");

    if (!hasVisitedBefore) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        document.documentElement.classList.remove("loading");
        document.body.classList.remove("loading");
        document.documentElement.classList.add("loaded");
        document.body.classList.add("loaded");

        localStorage.setItem("hasVisited", "true");
      }, 1500);

      return () => {
        // Cleanup
        document.documentElement.classList.remove("loading");
        document.body.classList.remove("loading");
        document.documentElement.classList.remove("loaded");
        document.body.classList.remove("loaded");
        clearTimeout(timer);
      };
    } else {
      // If visited before, skip loader
      setIsLoading(false);
      document.documentElement.classList.remove("loading");
      document.body.classList.remove("loading");
      document.documentElement.classList.add("loaded");
      document.body.classList.add("loaded");
    }
  }, []);

  return (
    // No "overflow-hidden" here unless loading.
    // That way we don't get two scrollbars.
    <main
      className={`relative w-full min-h-screen ${
        isLoading ? "overflow-hidden" : ""
      }`}
    >
      {/* Loader Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <Loader />
        </div>
      )}

      {/* Content (hidden while loading) */}
      <div
        className={`w-full transition-all duration-500 ${
          isLoading
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        <Navbar />
        <Cgradients />
        <Hero />
        <Experience />
        <Techstack />
        <Portfolio />
        <Footer />
      </div>
    </main>
  );
}
