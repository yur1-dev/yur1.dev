"use client";

import { Button } from "@/components/ui/button";
import Socials from "@/app/components/Socials/Socials";
import { FaMapPin } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  // Handle page load animation for Hero section (bottom to top)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setIsHeroVisible(true);
    }, 1500); // Set a duration for the loading screen (1.5 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Fullscreen Loading Screen */}
      {loading && (
        <div
          id="loading-screen"
          className="fixed w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          {/* Spinner for Loading */}
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="w-full px-4">
        <div
          className={`max-w-[900px] h-[80vh] mx-auto flex flex-col justify-center relative transition-all duration-1000 ${
            isHeroVisible
              ? "transform translate-y-0"
              : "transform translate-y-10 opacity-0"
          }`}
        >
          <div>
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl blur-xl opacity-30 -z-10"></div>

            {/* Portfolio Content */}
            <div className="h-full w-full flex flex-col-reverse text-center lg:text-start lg:flex-row justify-between bg-black bg-opacity-80 rounded-xl border border-gray-700 relative z-10 p-6 transform transition-all duration-1000">
              {/* Left Content */}
              <div className="flex flex-col justify-evenly gap-5 w-full lg:w-2/3">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl text-white capitalize">
                  Frontend Developer
                </h1>
                <p className="text-sm sm:text-base lg:text-lg font-extralight text-gray-300">
                  I&apos;m a 23-year-old Frontend Developer. I have been
                  programming
                  <br className="hidden sm:block" />
                  for more than 5 years. I create professional websites.
                </p>

                {/* Socials on larger screens */}
                <div className="lg:flex lg:justify-start lg:mt-4 mt-6">
                  <Socials />
                </div>
                <div>
                  <Button className="rounded bg-secondary border-[1px] text-white">
                    <a className="text-sm font-semibold" href="">
                      Hire me
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col gap-4 items-center w-full lg:w-1/3 mt-6 lg:mt-0">
                <div className="flex items-center text-white gap-2">
                  <FaMapPin style={{ fontSize: "20px" }} />
                  <p className="text-sm sm:text-base lg:text-lg">
                    Nueva Ecija, Philippines
                  </p>
                </div>

                <Image
                  src="/hero-image.png"
                  alt="hero-yuri"
                  width={200}
                  height={200}
                  className="w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 border rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
