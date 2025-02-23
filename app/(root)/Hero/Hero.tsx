"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Socials from "@/app/components/Socials/Socials";
import { FaMapPin, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Hero: React.FC = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setIsHeroVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleHireMeClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {loading && (
        <div
          id="loading-screen"
          className="fixed w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isHeroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 1 }}
          className="max-w-[900px] h-[80vh] mx-auto flex flex-col justify-center relative"
        >
          <div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl blur-xl opacity-30 -z-10"></div>

            <div className="h-full w-full flex flex-col-reverse text-center lg:text-start lg:flex-row justify-between bg-black bg-opacity-80 rounded-xl border border-gray-700 relative z-10 p-6">
              <div className="flex flex-col justify-evenly gap-5 w-full lg:w-2/3">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl text-white capitalize">
                  Frontend Developer
                </h1>
                <p className="text-sm sm:text-base lg:text-lg font-extralight text-gray-300">
                  I&apos;m a 23 years old Frontend Developer with 3 years of
                  experience building professional websites and creating
                  engaging motion graphics.
                </p>

                <div className="lg:flex lg:justify-start lg:mt-4 mt-6">
                  <Socials />
                </div>
                <div>
                  <Button
                    onClick={handleHireMeClick}
                    className="rounded bg-secondary border-[1px] text-white"
                  >
                    <span className="text-sm font-semibold">Hire me</span>
                  </Button>
                </div>
              </div>

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
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleModalClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black bg-opacity-90 p-6 rounded-xl border border-gray-700 relative max-w-sm w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-300 hover:text-white text-xl"
                onClick={handleModalClose}
              >
                <FaTimes />
              </button>

              <h2 className="text-2xl text-white mb-4">
                Let&apos;s Chat on Telegram!
              </h2>
              <p className="text-gray-300 mb-6">
                I&apos;m excited to hear from you! You can reach out to me
                directly on Telegram.
              </p>
              <a
                href="https://t.me/yuri_roc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-secondary border-[1px] text-white">
                  Chat on Telegram
                </Button>
              </a>

              {/* Fixed Image component */}
              <div className="w-16 h-16 absolute bottom-2 right-2">
                <Image
                  src="/pixel-cat.gif"
                  alt="Pixel Cat Animation"
                  width={64}
                  height={64}
                  className="w-full h-full"
                  unoptimized
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
