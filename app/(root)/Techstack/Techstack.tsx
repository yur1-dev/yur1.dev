"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
  {
    name: "Node.js",
    src: "/nodejs.png",
    alt: "Node.js",
  },
];

const Techstack: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const techStackRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger animation when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection Observer Entry:", entry);
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // lowered threshold from 0.8 to 0.1 for earlier triggering
    );

    if (techStackRef.current) {
      observer.observe(techStackRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Framer Motion Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full px-4">
      <motion.div
        ref={techStackRef}
        className="max-w-[900px] h-[80vh] mx-auto flex flex-col justify-center relative"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Title */}
        <motion.div variants={titleVariants} className="my-8 p-4 text-white">
          <h2 className="text-4xl font-semibold mb-4">Tech Stack</h2>
        </motion.div>

        {/* Tech Stack Items */}
        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStackData.map((tech) => (
            <motion.div
              key={tech.alt}
              variants={itemVariants}
              className="flex items-center border rounded-xl shadow-inner bg-[rgb(13,13,13)] p-2 sm:p-4"
            >
              <Image
                src={tech.src}
                alt={`${tech.name} logo`}
                width={46}
                height={46}
                className="mr-2"
              />
              <p className="text-base sm:text-lg lg:text-xl">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Techstack;
