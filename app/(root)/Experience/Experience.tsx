"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Experience = () => {
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

  useEffect(() => {
    const targetElement = experienceRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Show content when it's in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in the viewport
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
        className={`max-w-[900px] mx-auto my-12 transform transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Title Animation: Slide from top to bottom */}
        <h1
          className={`text-4xl font-semibold mb-6 text-center sm:text-left transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Experience
        </h1>

        <Tabs defaultValue="work" className="w-full">
          <TabsList className="flex justify-center bg-[#0D0D0D] space-x-4 mb-6">
            <TabsTrigger
              value="work"
              className="py-1 px-4 sm:px-6 md:px-12 text-white text-lg font-normal rounded-xl"
            >
              Work
            </TabsTrigger>
            <TabsTrigger
              value="studies"
              className="py-1 px-4 sm:px-6 md:px-12 text-white text-lg font-normal rounded-xl"
            >
              Studies
            </TabsTrigger>
          </TabsList>

          {/* Work Tab */}
          <TabsContent value="work">
            <div
              className={`space-y-4 border border-[#D9D9D9] p-4 rounded-xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {workData.map((item) => (
                <div
                  key={item.id}
                  className={`page-transition flex flex-col sm:flex-col md:flex-row items-center sm:items-start sm:space-x-8 p-6 rounded-lg shadow-md ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {/* Circular Image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={`Work Experience ${item.id}`}
                      width={96}
                      height={96}
                      className="object-contain w-full"
                    />
                  </div>

                  {/* Work Details */}
                  <div className="text-center sm:text-left">
                    <p className="text-lg font-semibold">{item.duration}</p>
                    <p className="text-xl font-semibold">{item.company}</p>
                    <p className="text-lg">{item.role}</p>

                    <p className="text-sm text-gray-400 mt-2">{item.skills}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Studies Tab */}
          <TabsContent value="studies">
            <div
              className={`space-y-4 border border-[#D9D9D9] p-4 rounded-xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {studiesData.map((item) => (
                <div
                  key={item.id}
                  className={`page-transition flex flex-col sm:flex-col md:flex-row items-center sm:items-start space-x- sm:space-x-8 p-6 rounded-lg shadow-md ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={`Study Experience ${item.id}`}
                      width={96}
                      height={96}
                      className="object-contain w-full"
                    />
                  </div>

                  <div className="text-center sm:text-left">
                    <p className="text-lg font-semibold">{item.duration}</p>
                    <p className="text-xl font-semibold">{item.institution}</p>
                    <p className="text-lg">{item.degree}</p>

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
