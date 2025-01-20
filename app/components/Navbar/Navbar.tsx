"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-grid">
      <div className="w-full px-4">
        <div className="max-w-[900px] mx-auto py-4">
          <div className="flex justify-between items-center">
            {/* Brand Logo */}
            <h1 className="text-3xl md:text-5xl font-bold">yur1.dev</h1>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              <li className="cursor-pointer hover:text-gray-300 transition-colors">
                Intro
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-colors">
                Experience
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-colors">
                Projects
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-colors">
                Contacts
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
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
              <Button className="rounded" variant="secondary">
                <a className="text-sm font-semibold" href="#">
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="mt-4 md:hidden">
              <ul className="flex flex-col gap-4">
                <li className="cursor-pointer hover:text-gray-300 transition-colors">
                  Intro
                </li>
                <li className="cursor-pointer hover:text-gray-300 transition-colors">
                  About
                </li>
                <li className="cursor-pointer hover:text-gray-300 transition-colors">
                  Projects
                </li>
                <li className="cursor-pointer hover:text-gray-300 transition-colors">
                  Contacts
                </li>
                <li>
                  <Button className="rounded w-full" variant="secondary">
                    <a className="text-sm font-semibold" href="#">
                      Download CV
                    </a>
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
