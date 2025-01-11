"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

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
        <div className="">
          <div className="w-full aspect-video relative">
            <img
              src={data.imageSrc}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl mb-2">{data.title}</h3>
            <p className="text-gray-300 mb-4">{data.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {data.technologies.map((tech, index) => (
                <img
                  key={index}
                  // src={techIcons[tech]}
                  alt={tech}
                  className="w-6 h-6"
                />
              ))}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const cardsData: CardData[] = [
    {
      imageSrc: "/svs-hero.png",
      title: "Solana Vibe Station",
      description: "Your Solana RPC Gateway",
      technologies: ["Next", "TS", "Tailwind", "React"],
      learnMoreLink: "#",
      fullDetails: "Solana Vibe Station: Your Solana RPCs Gateway",
      galleryImages: ["/svs-hero.png", "/images/project1-3.png"],
      features: [
        "Authentication",
        "Users can create, edit, and delete posts",
        "Users can comment on posts",
        "Users can like posts",
        "Users can search for posts",
        "Rich Markdown Support",
      ],
      githubLink: "https://github.com/example/project1",
      liveDemoLink: "https://example.com/project1",
    },
    {
      imageSrc: "/images/project2.png",
      title: "E-Commerce Platform",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["Node.js", "Next", "Tailwind"],
      learnMoreLink: "#",
      fullDetails:
        "This is a detailed description of the E-Commerce Platform project.",
      galleryImages: [
        "/images/project2-1.png",
        "/images/project2-2.png",
        "/images/project2-3.png",
      ],
      features: [
        "Product Listings",
        "Shopping Cart",
        "Order Management",
        "Payment Integration",
        "User Authentication",
        "Admin Dashboard",
      ],
      githubLink: "https://github.com/example/project2",
      liveDemoLink: "https://example.com/project2",
    },
    {
      imageSrc: "/images/project3.png",
      title: "Portfolio Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["React", "TS", "CSS"],
      learnMoreLink: "#",
      fullDetails:
        "This is a detailed description of the Portfolio Website project.",
      galleryImages: [
        "/images/project3-1.png",
        "/images/project3-2.png",
        "/images/project3-3.png",
      ],
      features: [
        "Responsive Design",
        "Custom Animations",
        "Dynamic Content",
        "Optimized Performance",
        "SEO-Friendly",
      ],
      githubLink: "https://github.com/example/project3",
      liveDemoLink: "https://example.com/project3",
    },
    {
      imageSrc: "/images/project4.png",
      title: "Mobile App Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["Figma", "React Native", "Tailwind"],
      learnMoreLink: "#",
      fullDetails:
        "This is a detailed description of the Mobile App Design project.",
      galleryImages: [
        "/images/project4-1.png",
        "/images/project4-2.png",
        "/images/project4-3.png",
      ],
      features: [
        "User-Friendly Interface",
        "Cross-Platform Support",
        "Push Notifications",
        "Offline Mode",
        "Real-Time Updates",
      ],
      githubLink: "https://github.com/example/project4",
      liveDemoLink: "https://example.com/project4",
    },
  ];

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    setIsModalOpen(true);
    setSelectedImage(card.galleryImages[0]); // Show the first image by default
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="max-w-[900px] mx-auto my-12 p-6 text-white">
      <h1 className="text-4xl font-semibold mb-6">Portfolio</h1>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {selectedCard && (
          <DialogContent className="bg-[rgb(13,13,13)] text-white border rounded-xl sm:max-w-[400px] md:max-w-[700px] lg:px-4 px-2 py-4 max-h-[90vh] overflow-auto">
            <div className="flex flex-col gap-4">
              {/* Left Side: Image Section */}
              <div className="flex flex-col w-full p-2 px-6">
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt={`Preview of ${selectedCard.title}`} // Meaningful alt text
                    className="w-full max-w-[300px] object-cover rounded-lg mx-auto"
                  />
                )}
              </div>

              {/* Right Side: Features and Buttons */}
              <div className="w-full p-2 flex flex-col">
                <DialogHeader>
                  <DialogTitle className="text-lg font-bold">
                    {selectedCard.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-gray-300">
                    {selectedCard.fullDetails}
                  </DialogDescription>
                </DialogHeader>

                <div className="my-4">
                  <h3 className="text-lg font-semibold mb-2">Features:</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    {selectedCard.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 mt-auto">
                  <a
                    href={selectedCard.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 py-2 text-sm font-bold rounded">
                      GitHub
                    </Button>
                  </a>
                  <a
                    href={selectedCard.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-500 py-2 text-sm font-bold rounded">
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="cursor-pointer w-full"
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
  );
};

export default Portfolio;
