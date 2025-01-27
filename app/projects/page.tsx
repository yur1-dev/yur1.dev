"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link"; // Import Link for client-side navigation

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState([false, false, false, false]);

  const projectNames = ["Project 1", "Project 2", "Project 3", "Project 4"];

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      imageLoaded.forEach((_, index) => {
        setTimeout(() => {
          setImageLoaded((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, 0);
      });
    }
  }, [isLoading, imageLoaded]); // Added imageLoaded to dependencies

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {!isLoading && (
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute sm:relative w-full z-20">
            <Navbar />
          </div>

          <div className="flex flex-col sm:flex-row gap-0 sm:gap-2 w-full h-screen sm:h-full justify-evenly sm:justify-center items-center absolute top-0 left-0 sm:z-0">
            {[
              "/expandable-1.png",
              "/expandable-2.png",
              "/expandable-3.png",
              "/expandable-4.png",
            ].map((src, index) => (
              <div
                key={index}
                className={`group relative flex-shrink-0 h-[25vh] sm:h-full w-full sm:w-1/4 cursor-pointer overflow-hidden transform ${
                  imageLoaded[index] ? "translate-y-0" : "translate-y-[-100%]"
                } transition-all duration-&lsqb;1000ms&rsqb; ease-in-out`} // Fixed Tailwind class
                style={{
                  transitionDuration: `${1000 + index * 300}ms`,
                }}
              >
                <Image
                  src={src}
                  alt={`Card ${index}`}
                  fill
                  className={`object-cover transition-all duration-500 ease-in-out ${
                    index === 0
                      ? "opacity-50 grayscale-0"
                      : "sm:grayscale sm:group-hover:grayscale-0"
                  } group-hover:scale-105`}
                />
                <div className="absolute bottom-0 left-0 w-1/2 sm:w-full bg-black/80 transform sm:translate-y-full sm:group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <div className="p-4 sm:p-6 text-left sm:text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {projectNames[index]}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
