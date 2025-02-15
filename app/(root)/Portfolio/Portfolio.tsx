"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const techIcons = {
  Next: "/nextjs.svg",
  TS: "/typescript.svg",
  React: "/react.svg",
  Tailwind: "/tailwindcss.svg",
  JavaScript: "/javascript.svg",
  CSS: "/css.svg",
  Shadcn: "/shadcn.svg",
  Figma: "/figma.svg",
};

const getTechIcon = (tech: string): string => {
  return techIcons[tech as keyof typeof techIcons] || "/fallback-icon.svg";
};

interface CardData {
  imageSrc: string;
  title: string;
  description: string;
  technologies: string[];
  learnMoreLink: string;
  fullDetails: string;
  galleryImages: string[];
  features: string[];
  githubLink: string;
  liveDemoLink: string;
}

const ProjectCard: React.FC<{
  data: CardData;
  onClick: () => void;
  children?: React.ReactNode;
}> = ({ data, children }) => {
  return (
    <div className="max-w-[900px]">
      <div className="w-full rounded-xl border bg-[rgb(13,13,13)] shadow-inner text-white overflow-hidden">
        <div className="w-full aspect-video relative">
          <Image
            src={data.imageSrc}
            alt={data.title}
            width={500}
            height={300}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl mb-2">{data.title}</h3>
          <p className="text-gray-300 mb-4">{data.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {data.technologies.map((tech, index) => (
              <Image
                key={index}
                src={getTechIcon(tech)}
                alt={tech}
                width={24}
                height={24}
                className="w-6 h-6"
                loading="lazy"
              />
            ))}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

// Custom X Icon built with HTML & Tailwind CSS
const CustomX: React.FC = () => {
  return (
    <div className="relative w-6 h-6">
      <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 rotate-45"></span>
      <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 -rotate-45"></span>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const cardsData: CardData[] = [
    {
      imageSrc: "/svs-hero.png",
      title: "Solana Vibe Station",
      description: "Your Solana RPC Gateway",
      technologies: ["Next", "TS", "Tailwind", "React"],
      learnMoreLink: "#",
      fullDetails:
        "Solana Vibe Station is your go-to platform for accessing fast, secure, and scalable Solana RPC endpoints.",
      galleryImages: ["/svs-hero.png", "/images/project1-3.png"],
      features: [
        "Secure Authentication",
        "Lightning-Fast RPC Endpoints",
        "Scalable & Reliable Infrastructure",
        "User-Friendly Dashboard",
        "Rich Markdown Documentation",
      ],
      githubLink: "https://github.com/example/project1",
      liveDemoLink: "https://www.solanavibestation.com/",
    },
    {
      imageSrc: "/pumpbot-hero.png",
      title: "PumpBot",
      description: "The fastest way to launch and manage your assets.",
      technologies: ["React", "Tailwind", "Next"],
      learnMoreLink: "#",
      fullDetails:
        "PumpBot is a comprehensive platform that lets you launch coins, manage your wallet securely, and subscribe for exclusive features.",
      galleryImages: ["/pumpbot-hero.png", "/project2-2.png"],
      features: [
        "Instant Coin Launch",
        "Secure Wallet Generation",
        "Subscription & Payment Handling",
        "Bundle Wallet Distribution",
        "Automated Volume Trading Bots",
        "Real-time SOL Balance Refresh",
      ],
      githubLink: "https://github.com/example/project2",
      liveDemoLink: "https://pump-bot-five.vercel.app/",
    },
    // Add more projects as needed
  ];

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    setIsModalOpen(true);
    setSelectedImage(card.galleryImages[0]);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const currentRef = observerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    const currentRef = observerRef.current;
    const titleObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
        }
      },
      { threshold: 0.8 }
    );

    if (currentRef) {
      titleObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        titleObserver.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="w-full px-4">
      <div className="max-w-[900px] mx-auto my-12 mb-20">
        <h1
          className={`text-4xl font-semibold mb-6 transition-opacity duration-500 ${
            isTitleVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Portfolio
        </h1>

        {isModalOpen && selectedCard && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={handleModalClose} // Close modal when clicking outside
          >
            <div
              className="w-full max-w-[700px] bg-[rgb(13,13,13)] text-white border rounded-xl p-4 sm:max-w-[400px]"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col w-full p-2 px-6 relative">
                  <button
                    className="absolute top-2 right-[-2px]"
                    onClick={handleModalClose}
                    aria-label="Close menu"
                  >
                    <CustomX />
                  </button>
                  {selectedImage && (
                    <Image
                      src={selectedImage}
                      alt={`Preview of ${selectedCard.title}`}
                      width={500}
                      height={300}
                      className="w-full max-w-[300px] object-cover rounded-lg mx-auto"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="w-full p-2 flex flex-col">
                  <h2 className="text-lg font-bold">{selectedCard.title}</h2>
                  <p className="text-sm text-gray-300">
                    {selectedCard.fullDetails}
                  </p>

                  <div className="my-4">
                    <h3 className="text-lg font-semibold mb-2">Features:</h3>
                    <ul className="list-disc list-inside text-gray-300">
                      {selectedCard.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <a href={selectedCard.githubLink} target="_blank">
                      <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 py-2 text-sm font-bold rounded">
                        GitHub
                      </Button>
                    </a>
                    <a href={selectedCard.liveDemoLink} target="_blank">
                      <Button className="w-full bg-blue-600 text-white hover:bg-blue-500 py-2 text-sm font-bold rounded">
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-6">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`cursor-pointer w-full transform transition-transform duration-1000 ${
                hasAnimated
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[200px] opacity-0"
              }`}
              ref={observerRef}
              onClick={() => handleCardClick(card)}
            >
              <ProjectCard data={card} onClick={() => handleCardClick(card)}>
                <Button
                  variant="outline"
                  className="w-full text-black font-semibold rounded border-white hover:bg-white hover:text-black"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(card);
                  }}
                >
                  Learn More
                </Button>
              </ProjectCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
