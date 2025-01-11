"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-grid">
      <div className="py-4 px-6 max-w-[900px] mx-auto">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <h1 className="text-3xl md:text-5xl font-bold">yur1.dev</h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li className="cursor-pointer">Intro</li>
            <li className="cursor-pointer">Experience</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">Contacts</li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Hamburger Menu Icon */}
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Download Button (Desktop Only) */}
          <div className="hidden md:block">
            <Button className="rounded" variant={"secondary"}>
              <a className="text-sm font-semibold" href="">
                Download CV
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer">Intro</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Projects</li>
              <li className="cursor-pointer">Contacts</li>
              <li>
                <Button className="rounded" variant={"secondary"}>
                  <a className="text-sm font-semibold" href="">
                    Download CV
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
