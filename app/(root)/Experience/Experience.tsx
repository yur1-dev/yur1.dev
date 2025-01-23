"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Experience = () => {
  // Work and Studies Data
  const workData = [
    {
      id: 1,
      image: "/svs-experience.png",
      duration: "Jan 2023 - Present",
      company: "Digital Perspective",
      role: "Frontend Web Developer",
      skills: "Web Design; Web Development; WordPress + Elementor.",
    },
    {
      id: 2,
      image: "/svs-experience-2.png",
      duration: "Feb 2021 - Dec 2022",
      company: "Creative Solutions",
      role: "UI/UX Designer",
      skills: "UI/UX Design; Figma; Adobe XD; Prototyping.",
    },
    {
      id: 3,
      image: "/svs-experience-3.png",
      duration: "Mar 2019 - Jan 2021",
      company: "Tech Innovators",
      role: "Web Developer",
      skills: "React; JavaScript; Node.js; MongoDB.",
    },
  ];

  const studiesData = [
    {
      id: 1,
      image: "/study-1.png",
      duration: "2019 - 2023",
      institution: "University of Tech",
      degree: "Bachelor's in Computer Science",
      details: "Focused on web technologies and software development.",
    },
    {
      id: 2,
      image: "/study-2.png",
      duration: "2017 - 2019",
      institution: "High Tech Academy",
      degree: "Diploma in Web Development",
      details: "Specialized in front-end and back-end web technologies.",
    },
    {
      id: 3,
      image: "/study-3.png",
      duration: "2015 - 2017",
      institution: "Tech High School",
      degree: "High School Diploma",
      details: "Basic programming and technology courses.",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when Experience section is in view
  useEffect(() => {
    const targetElement = experienceRef.current; // Cache the current value

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when the section is in view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  return (
    <div className="w-full px-4">
      <div
        ref={experienceRef}
        className="max-w-[900px] mx-auto my-12 transform transition-all duration-1000"
      >
        {/* Title Animation: Slide from top to bottom */}
        <h1
          className={`text-4xl font-semibold mb-6 text-center sm:text-left transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          Experience
        </h1>

        <Tabs defaultValue="work" className="w-full">
          {/* TabsList with Transition */}
          <TabsList
            className={`flex justify-center bg-[#0D0D0D] space-x-4 mb-6 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <TabsTrigger
              value="work"
              className="py-1 px-6 sm:px-12 md:px-[11.5rem] text-white text-lg font-normal rounded-xl transition-colors duration-1000"
            >
              Work
            </TabsTrigger>
            <TabsTrigger
              value="studies"
              className="py-1 px-6 sm:px-12 md:px-[11.5rem] text-white text-lg font-normal rounded-xl transition-colors duration-1000"
            >
              Studies
            </TabsTrigger>
          </TabsList>

          {/* Work Tab */}
          <TabsContent value="work">
            <div
              className={`space-y-4 border border-[#D9D9D9] p-4 rounded-xl transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              {workData.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col sm:flex-row items-center sm:items-start space-x-6 sm:space-x-8 p-6 rounded-lg shadow-md transform transition-all duration-1000 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  {/* Circular Image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={`Work Experience ${item.id}`}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>

                  {/* Work Details */}
                  <div className="text-center sm:text-left">
                    <p className="text-lg font-semibold">{item.duration}</p>
                    <p className="text-xl font-semibold">{item.company}</p>
                    <p className="text-lg">{item.role}</p>

                    {/* Skills/Technologies */}
                    <p className="text-sm text-gray-400 mt-2">{item.skills}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Studies Tab */}
          <TabsContent value="studies">
            <div
              className={`space-y-4 border border-[#D9D9D9] p-4 rounded-xl transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              {studiesData.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col sm:flex-row items-center sm:items-start space-x-6 sm:space-x-8 p-6 rounded-lg shadow-md transform transition-all duration-1000 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  {/* Circular Image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={`Study Experience ${item.id}`}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>

                  {/* Study Details */}
                  <div className="text-center sm:text-left">
                    <p className="text-lg font-semibold">{item.duration}</p>
                    <p className="text-xl font-semibold">{item.institution}</p>
                    <p className="text-lg">{item.degree}</p>

                    {/* Details */}
                    <p className="text-sm text-gray-400 mt-2">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Experience;
