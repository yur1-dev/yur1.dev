"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // Import Framer Motion

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Manage body overflow for mobile menu
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : prevOverflow;
    return () => {
      document.body.style.overflow = prevOverflow; // Reset on cleanup
    };
  }, [isMobileMenuOpen]);

  // Smoothly scroll if we're on "/" already; otherwise let Next.js handle the route
  const handleExperienceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      document
        .getElementById("experience")
        ?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    } else {
      // If on another page, let Next.js navigate to /#experience
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="w-full px-4">
      <div className="max-w-[900px] mx-auto py-4 flex justify-between items-center relative">
        {/* Logo with animated GIF */}
        <h1 className="relative text-3xl md:text-5xl font-bold text-white">
          <Link href="/">yur1.dev</Link>
          <div className="absolute -top-2 -right-8">
            <Image
              src="/pixel-cat.gif"
              alt="Pixel Cat"
              width={38}
              height={38}
              className="rounded-full"
            />
          </div>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          <NavItem href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Intro
          </NavItem>
          <NavItem href="/#experience" onClick={handleExperienceClick}>
            Experience
          </NavItem>
          <NavItem href="/projects" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </NavItem>
          <NavItem href="/3dstation" onClick={() => setIsMobileMenuOpen(false)}>
            3D Station
          </NavItem>
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

      {/* Full-Screen Mobile Navigation with Framer Motion */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{
          y: isMobileMenuOpen ? "0%" : "-100%",
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-center items-center"
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

        {/* Mobile Navigation Links */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 text-center text-2xl font-semibold"
        >
          <NavItem href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Intro
          </NavItem>
          <NavItem href="/#experience" onClick={handleExperienceClick}>
            Experience
          </NavItem>
          <NavItem href="/projects" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </NavItem>
          <NavItem href="/3dstation" onClick={() => setIsMobileMenuOpen(false)}>
            3D Station
          </NavItem>
        </motion.ul>

        {/* Download CV Button for Mobile */}
        <div className="mt-8">
          <Button className="rounded" variant="secondary">
            <a className="text-sm font-semibold" href="#">
              Download CV
            </a>
          </Button>
        </div>
      </motion.div>
    </nav>
  );
};

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, onClick }) => (
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
