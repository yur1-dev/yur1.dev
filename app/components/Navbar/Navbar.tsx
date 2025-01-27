"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  // Function to handle smooth scrolling or navigation
  const handleNavigation = (href: string) => {
    if (href === "/") {
      // For the homepage, do nothing to avoid reloading.
      window.location.hash = ""; // Reset the hash if it's already on the homepage
    } else if (href.startsWith("#")) {
      // Scroll to the section if it's a hash link
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Update the URL without triggering a reload
        window.location.hash = href;
      }
    } else {
      // For other links, use Next.js internal navigation
      window.history.pushState({}, "", href); // Change the URL without reloading
    }

    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <nav className="w-full px-4">
      <div className="max-w-[900px] mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          <a href="/">yur1.dev</a>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          <NavItem href="/" onClick={() => handleNavigation("/")}>
            Intro
          </NavItem>
          <NavItem href="/experience">Experience</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/contacts">Contacts</NavItem>
        </ul>

        {/* Download CV Button for Desktop */}
        <div className="hidden md:block">
          <Button className="rounded" variant="secondary">
            <a className="text-sm font-semibold" href="#">
              Download CV
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center text-white"
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
      </div>

      {/* Full-Screen Mobile Navigation */}
      <div
        className={clsx(
          "fixed inset-0 z-50 bg-black text-white flex flex-col justify-center items-center transform transition-transform duration-500",
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        )}
      >
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

        {/* Navigation Links */}
        <ul className="flex flex-col gap-6 text-center text-2xl font-semibold">
          <NavItem href="/" onClick={() => handleNavigation("/")}>
            Intro
          </NavItem>
          <NavItem href="/experience">Experience</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/contacts">Contacts</NavItem>
        </ul>

        {/* Download CV Button for Mobile */}
        <div className="mt-8">
          <Button className="rounded" variant="secondary">
            <a className="text-sm font-semibold" href="#">
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

// Updated NavItem component to include onClick
const NavItem: React.FC<{
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ href, children, onClick }) => (
  <li>
    <Link
      href={href}
      onClick={onClick}
      className="cursor-pointer hover:text-gray-300 transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Navbar;
