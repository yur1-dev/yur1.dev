"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Experience = () => {
  const workData = [
    {
      id: 1,
      image: "/pumpbot-experience.png",
      duration: "Jan 2024 - Sept 2024",
      company: "PUMPBOT",
      role: "Frontend Web Developer",
      skills: "Fullstack Web Developer; Figma; Web Design.",
    },
    {
      id: 2,
      image: "/svs-experience.png",
      duration: "Nov 2023 - Dec 2023",
      company: "Solana Vibe Station",
      role: "Frontend Web Developer",
      skills: "Web Design; Web Development.",
    },
    {
      id: 3,
      image: "/puponsol-experience.png",
      duration: "Mar 2023 - July 2023",
      company: "PUP ON SOL",
      role: "Web Developer",
      skills: "HTML; Tailwindcss; JavaScript.",
    },
  ];

  const studiesData = [
    {
      id: 1,
      image: "/au-study.png",
      duration: "2024 - Present",
      institution: "PHINMA-Araullo University",
      degree: "Bachelor of Science in Information Technology",
      details: "Focused on web technologies and software development.",
    },
    {
      id: 2,
      image: "/maliwalo-study.png",
      duration: "2017 - 2019",
      institution: "High Tech Academy",
      degree: "Diploma in Senior High School",
      details: "Specialized in front-end",
    },
    {
      id: 3,
      image: "/scholastica-study.png",
      duration: "2015 - 2017",
      institution: "Scholastica de Leau Mer Academy",
      degree: "High School Diploma",
      details: "Basic programming and minor subjects",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetElement = experienceRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Reveal content when in view
          observer.disconnect(); // Disconnect once visible
        }
      },
      { threshold: 0.5 }
    );

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Define a "fade up" animation variant.
  const fadeUp = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    // The id="experience" is crucial for the navbar's /#experience link
    <div id="experience" className="w-full px-4">
      <motion.div
        ref={experienceRef}
        variants={fadeUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-[900px] mx-auto my-12"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-semibold mb-6 text-center sm:text-left"
        >
          Experience
        </motion.h1>

        <Tabs defaultValue="work" className="w-full">
          <TabsList className="flex justify-center bg-[#0D0D0D] space-x-4 mb-6">
            <TabsTrigger
              value="work"
              className="py-1 px-4 sm:px-6 md:px-12 text-white text-lg font-normal rounded-xl bg-none"
            >
              Work
            </TabsTrigger>
            <TabsTrigger
              value="studies"
              className="py-1 px-4 sm:px-6 md:px-12 text-white text-lg font-normal rounded-xl bg-none"
            >
              Studies
            </TabsTrigger>
          </TabsList>

          {/* Work Tab Content */}
          <TabsContent value="work">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="space-y-4 border border-[#D9D9D9] p-4 rounded-xl"
            >
              {workData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col md:flex-row items-center sm:items-start sm:space-x-8 p-6 rounded-lg shadow-md"
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
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Studies Tab Content */}
          <TabsContent value="studies">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="space-y-4 border border-[#D9D9D9] p-4 rounded-xl"
            >
              {studiesData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col md:flex-row items-center sm:items-start sm:space-x-8 p-6 rounded-lg shadow-md"
                >
                  {/* Circular Image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={`Study Experience ${item.id}`}
                      width={96}
                      height={96}
                      className="object-contain w-full"
                    />
                  </div>

                  {/* Study Details */}
                  <div className="text-center sm:text-left">
                    <p className="text-lg font-semibold">{item.duration}</p>
                    <p className="text-xl font-semibold">{item.institution}</p>
                    <p className="text-lg">{item.degree}</p>
                    <p className="text-sm text-gray-400 mt-2">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Experience;
