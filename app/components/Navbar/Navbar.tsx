"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  // Disable scrolling on mobile menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll when menu is open
    } else {
      document.body.style.overflow = "auto"; // Enable scroll when menu is closed
    }
  }, [isMobileMenuOpen]);

  // Handle page load animation for Navbar (top to bottom)
  useEffect(() => {
    setIsNavbarVisible(true);
  }, []);

  return (
    <div
      className={clsx("w-full bg-grid transition-all duration-500 transform", {
        "-translate-y-full opacity-0": !isNavbarVisible, // Initially hide the navbar above the screen
        "translate-y-0 opacity-100": isNavbarVisible, // Slide it down into place
      })}
    >
      <div className="w-full px-4">
        <div className="max-w-[900px] mx-auto py-4">
          <div className="flex justify-between items-center">
            {/* Brand Logo */}
            <h1 className="text-3xl md:text-5xl font-bold">yur1.dev</h1>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              <NavItem href="/">Intro</NavItem>
              <NavItem href="/experience">Experience</NavItem>
              <NavItem href="/projects">Projects</NavItem>
              <NavItem href="/contacts">Contacts</NavItem>
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
          <div
            className={clsx(
              "fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col items-center justify-center transform transition-all duration-500",
              {
                "translate-x-0 opacity-100": isMobileMenuOpen,
                "-translate-x-full opacity-0": !isMobileMenuOpen,
              }
            )}
          >
            <ul className="flex flex-col gap-4 text-center text-white text-lg">
              <NavItem href="/">Intro</NavItem>
              <NavItem href="/experience">Experience</NavItem>
              <NavItem href="/projects">Projects</NavItem>
              <NavItem href="/contacts">Contacts</NavItem>
              <li>
                <Button className="rounded w-full" variant="secondary">
                  <a className="text-sm font-semibold" href="#">
                    Download CV
                  </a>
                </Button>
              </li>
            </ul>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <li className="cursor-pointer hover:text-gray-300 transition-colors">
    <Link href={href}>{children}</Link>
  </li>
);

export default Navbar;
