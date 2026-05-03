"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [pathname]);

  const navLinks = [
    { label: "Intro", href: "/" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/projects" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const hash = href.slice(1);
      if (pathname === "/") {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
    }
  };

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsMobileMenuOpen(false);
    handleNavClick(e, href);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          padding: 0 1.5rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'Syne', sans-serif;
        }

        .nav-inner {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-radius: 0 0 1rem 1rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-root.scrolled .nav-inner {
          background: rgba(8, 8, 8, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 0.5px solid rgba(255,255,255,0.06);
          border-top: none;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          padding: 0.65rem 1.5rem;
        }

        .nav-logo {
          font-family: 'Space Mono', monospace;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          text-decoration: none;
          position: relative;
        }

        .nav-logo::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, #a3e635, #22d3ee);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .nav-logo:hover::after { transform: scaleX(1); }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          font-family: 'Syne', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          padding: 0.4rem 0.75rem;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }

        .nav-cv-btn {
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #000;
          background: linear-gradient(135deg, #a3e635, #22d3ee);
          border: none;
          border-radius: 0.5rem;
          padding: 0.5rem 1.1rem;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .nav-cv-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #22d3ee, #a3e635);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .nav-cv-btn:hover::before { opacity: 1; }
        .nav-cv-btn span { position: relative; z-index: 1; }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
        }

        .hamburger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #fff;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 4, 4, 0.97);
          backdrop-filter: blur(20px);
          z-index: 998;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          transform: translateY(-100%);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu.open { transform: translateY(0); }

        .mobile-link {
          font-family: 'Syne', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: rgba(255,255,255,0.15);
          text-decoration: none;
          transition: color 0.2s ease;
          letter-spacing: -0.02em;
        }

        .mobile-link:hover { color: #fff; }

        @media (max-width: 768px) {
          .nav-links, .nav-cv-btn-wrap { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className={`nav-root ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            yur1.dev
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    handleNavClick(e, link.href)
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-cv-btn-wrap hidden md:block">
            <a href="/marc_yuri_esber_cv.pdf" className="nav-cv-btn">
              <span>Download CV</span>
            </a>
          </div>

          <button
            className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-link"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleMobileNavClick(e, link.href)
            }
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {link.label}
          </a>
        ))}

        <a
          href="/marc_yuri_esber_cv.pdf"
          className="nav-cv-btn"
          style={{ marginTop: "1rem" }}
        >
          <span>Download CV</span>
        </a>
      </div>
    </>
  );
};

export default Navbar;
