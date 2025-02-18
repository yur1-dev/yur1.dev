"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar"; // Adjust path if needed

// Sample data for each motion graphic
const motionGraphics = [
  {
    name: "Avalaunch",
    videoSrc: "/video/", //grid-animation.mp4
    title: "AVALAUNCH",
    subTitle: "UI/UX Design, Social Media Assets, Motion Graphics",
    description:
      "Avalaunch is the first protocol, exclusively for the Avalanche ecosystem, to offer promising and innovative projects a fast, secure, and efficient platform for decentralized fundraising.",
  },
  {
    name: "Colony",
    videoSrc: "/vid/colony.mp4",
    title: "COLONY",
    subTitle: "Branding, Web Design, Social Media Assets",
    description:
      "Colony is a community-driven platform that invests in early-stage, well-vetted Avalanche projects. Our motion graphics helped them capture their unique brand identity.",
  },
  {
    name: "Paribus",
    videoSrc: "/vid/paribus.mp4",
    title: "PARIBUS",
    subTitle: "DeFi Lending & Borrowing Platform",
    description:
      "Paribus needed engaging visuals to illustrate their cross-chain lending solutions. Our team delivered sleek, informative motion graphics.",
  },
  {
    name: "FantomGo",
    videoSrc: "/vid/fantomgo.mp4",
    title: "FANTOMGO",
    subTitle: "Token Launchpad & Ecosystem",
    description:
      "FantomGo helps projects build on Fantom. We created dynamic motion graphics showcasing the speed and scalability of their network.",
  },
];

export default function Page() {
  // Keep track of which item we're hovering
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Fixed Navbar at the top */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Content wrapper (padded for navbar) */}
      <div className="pt-24 px-4 max-w-[900px] w-full mx-auto">
        {/* Row of "links" (tabs) */}
        <ul className="flex gap-4 text-sm text-gray-300 border-b border-gray-700 pb-2 mb-6">
          {motionGraphics.map((item, i) => (
            <li
              key={item.name}
              className={`relative pb-2 cursor-pointer transition ${
                hoveredIndex === i
                  ? "text-white font-semibold"
                  : "hover:text-white"
              }`}
              onMouseEnter={() => setHoveredIndex(i)}
            >
              {item.name}
              {/* Pink underline if this item is active */}
              {hoveredIndex === i && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-500"></div>
              )}
            </li>
          ))}
        </ul>

        {/* Main Card (50vh) */}
        <div className="h-[50vh] w-full flex flex-col-reverse lg:flex-row text-center lg:text-start justify-between bg-black bg-opacity-80 rounded-xl border border-gray-700 relative z-10 p-6">
          {/* LEFT: Video container */}
          <div className="w-full h-full flex items-center justify-center">
            <video
              key={hoveredIndex} // re-render on hover change
              src={motionGraphics[hoveredIndex].videoSrc}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
          </div>

          {/* RIGHT: Text info */}
          <div className="w-full h-full flex flex-col justify-center text-white lg:ml-6 mt-4 lg:mt-0">
            <h2 className="text-3xl font-bold mb-2">
              {motionGraphics[hoveredIndex].title}
            </h2>
            <p className="text-gray-300 mb-4">
              {motionGraphics[hoveredIndex].subTitle}
            </p>
            <p className="leading-relaxed text-gray-200">
              {motionGraphics[hoveredIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
