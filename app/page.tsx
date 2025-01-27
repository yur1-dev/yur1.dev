"use client"; // Mark this component as a Client Component

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./(root)/Hero/Hero";
import Experience from "./(root)/Experience/Experience";
import Techstack from "./(root)/Techstack/Techstack";
import Portfolio from "./(root)/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Cgradients from "./components/Cgradients/Cgradients";
import Loader from "@/components/Loader/Loader"; // Import the Loader component

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // State to control loader visibility

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
        document.documentElement.classList.remove("loading");
        document.body.classList.remove("loading");
        document.documentElement.classList.remove("loaded");
        document.body.classList.remove("loaded");
        clearTimeout(timer);
      };
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-auto">
      {/* Full-page loader overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <Loader /> {/* Your custom loader component */}
        </div>
      )}

      {/* Content only visible after loading */}
      <div
        className={`w-full ${
          isLoading
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        } transition-all duration-500`}
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
