import React from "react";
import Image from "next/image"; // Import Image component

const techStackData = [
  {
    name: "React",
    src: "/react.svg",
    alt: "React",
  },
  {
    name: "Next.js",
    src: "/nextjs.svg",
    alt: "Next.js",
  },
  {
    name: "Tailwind CSS",
    src: "/tailwindcss.svg",
    alt: "Tailwind CSS",
  },
  {
    name: "Node.js",
    src: "/nodejs.svg",
    alt: "Node.js",
  },
  {
    name: "TypeScript",
    src: "/typescript.svg",
    alt: "TypeScript",
  },
  {
    name: "Figma",
    src: "/figma.svg",
    alt: "Figma",
  },
  {
    name: "Shadcn UI",
    src: "/shadcn.svg",
    alt: "Shadcn UI",
  },
];

const Techstack: React.FC = () => {
  return (
    <div className="w-full px-4">
      <div className="max-w-[900px] h-[80vh] mx-auto flex flex-col justify-center relative">
        <div className="my-8 p-4 text-white">
          <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStackData.map((tech) => (
              <div
                key={tech.alt}
                className="flex items-center border rounded-xl shadow-inner bg-[rgb(13,13,13)] p-2 sm:p-4"
              >
                <Image
                  src={tech.src}
                  alt={`${tech.name} logo`}
                  width={46}
                  height={46}
                  className="mr-2"
                />
                <p className="text-base sm:text-lg lg:text-xl">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
