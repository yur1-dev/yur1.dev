import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Page = () => {
  const projectNames = ["Project 1", "Project 2", "Project 3", "Project 4"]; // Array of names corresponding to each image

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="relative z-10">
          <Navbar />
        </div>

        <div className="flex gap-2 w-full h-full justify-center items-center absolute top-0 left-0 z-0">
          {[
            "/expandable-1.png",
            "/expandable-2.png",
            "/expandable-3.png",
            "/expandable-4.png",
          ].map((src, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-1/4 h-full cursor-pointer overflow-hidden"
            >
              <img
                src={src}
                alt={`Card ${index}`}
                className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
              />
              <div className="absolute bottom-0 w-full bg-black/80 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">
                    {projectNames[index]} {/* Dynamic name for each image */}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
