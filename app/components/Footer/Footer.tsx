"use client";

import React, { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFooterVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = footerRef.current; // Copy ref value to a variable
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className={`text-white transform transition-all duration-1000 ${
        isFooterVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-[900px] mx-auto pb-10 px-4">
        <div className="h-full w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 p-6 bg-black bg-opacity-80 rounded-xl border border-gray-700">
          {/* Logo Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold">
              yur1.dev
            </h1>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-8 text-center lg:text-left">
            <ul>
              <span className="block font-medium text-lg mb-2">Explore</span>
              <li className="cursor-pointer opacity-60 font-light transition-all duration-1000 hover:opacity-100">
                <a href="">Intro</a>
              </li>
              <li className="cursor-pointer opacity-60 font-light transition-all duration-1000 hover:opacity-100">
                <a href="">About</a>
              </li>
              <li className="cursor-pointer opacity-60 font-light transition-all duration-1000 hover:opacity-100">
                <a href="/projects">Projects</a>
              </li>
            </ul>
            <ul>
              <span className="block font-medium text-lg mb-2">Connect</span>
              <li className="cursor-pointer opacity-60 font-light transition-all duration-1000 hover:opacity-100">
                <a
                  href="https://t.me/yuri_roc"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li className="cursor-pointer opacity-60 font-light transition-all duration-1000 hover:opacity-100">
                <a
                  href="https://github.com/yur1-dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="cursor-pointer opacity-60 font-light transition-all duration-1000 hover:opacity-100">
                <a
                  href="https://www.linkedin.com/in/yuri-esber-9422b1227/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()}</p>
          <p>@yur1.dev</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
