"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const techStackData = [
  {
    name: "React",
    src: "/react.svg",
    alt: "React",
  },
  {
    name: "Next.js",
    src: "/nextjs.svg",
    alt: "Next.js",
  },
  {
    name: "Tailwind CSS",
    src: "/tailwindcss.svg",
    alt: "Tailwind CSS",
  },
  {
    name: "Dexscreener",
    src: "/dexscreener.png",
    alt: "Dexscreener",
  },
  {
    name: "TypeScript",
    src: "/typescript.svg",
    alt: "TypeScript",
  },
  {
    name: "Figma",
    src: "/figma.svg",
    alt: "Figma",
  },
  {
    name: "Shadcn UI",
    src: "/shadcn.svg",
    alt: "Shadcn UI",
  },
];

const Techstack: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const techStackRef = useRef(null);

  // Intersection Observer to trigger animation when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animations when in view
        }
      },
      { threshold: 0.8 }
    );

    const currentRef = techStackRef.current; // Copy ref value to a variable
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="w-full px-4">
      <div
        ref={techStackRef}
        className="max-w-[900px] h-[80vh] mx-auto flex flex-col justify-center relative"
      >
        {/* Title */}
        <div
          className={`my-8 p-4 text-white transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-semibold mb-4">Tech Stack</h2>
        </div>

        {/* Tech Stack Items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStackData.map((tech, index) => (
            <div
              key={tech.alt}
              className={`flex items-center border rounded-xl shadow-inner bg-[rgb(13,13,13)] p-2 sm:p-4 transform transition-all duration-1000 ${
                isVisible
                  ? `translate-x-0 opacity-100 delay-[${index * 100}ms]`
                  : "-translate-x-full opacity-0"
              }`}
            >
              <Image
                src={tech.src}
                alt={`${tech.name} logo`}
                width={46}
                height={46}
                className="mr-2"
              />
              <p className="text-base sm:text-lg lg:text-xl">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;
