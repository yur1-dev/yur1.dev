"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  features: string[];
  githubLink: string;
  liveDemoLink: string;
  year: string;
  category: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Wraith Scanner",
    subtitle: "Real-time Solana meme coin signal scanner",
    description:
      "A live meme coin scanner that aggregates viral signals from celebrity social media, TikTok trends, YouTube, Reddit, and on-chain sources like Pump.fun and DexScreener. Scores coins with multipliers and tracks win rate in real time.",
    imageSrc: "/wraith-hero.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Solana",
      "DexScreener",
    ],
    features: [
      "Live Signal Scanning",
      "Celebrity Source Tracking",
      "On-Chain Metrics",
      "Win Rate Tracker",
    ],
    githubLink: "https://github.com/yur1-dev/wraith-scan",
    liveDemoLink: "https://wraith-scan.vercel.app",
    year: "2025",
    category: "Web3 / Scanner",
    color: "#f97316",
  },
  {
    id: 2,
    title: "KŌKA",
    subtitle: "Collect. Trade. Own.",
    description:
      "A digital collectibles platform where users trade rare cards, build their collection, and connect with fellow enthusiasts. Built for early collectors with exclusive legendary card drops.",
    imageSrc: "/koka-hero.png",
    technologies: ["Next.js", "TypeScript", "Tailwind", "React"],
    features: [
      "Digital Card Collecting",
      "Whitelist System",
      "Rarity Tiers",
      "Early Collector Rewards",
    ],
    githubLink: "https://github.com/yur1-dev/koka",
    liveDemoLink: "https://koka-landing.vercel.app",
    year: "2025",
    category: "NFT / Collectibles",
    color: "#84cc16",
  },
  {
    id: 3,
    title: "Solana Vibe Station",
    subtitle: "Your Solana RPCs Gateway",
    description:
      "A high-performance RPC gateway built for the Solana ecosystem. Lightning-fast transactions powered by The Beast and Gorilla for supercharged services.",
    imageSrc: "/svs-hero.png",
    technologies: ["Next.js", "TypeScript", "Tailwind", "React", "Solana"],
    features: [
      "Public RPC Node Access",
      "Developer Tools",
      "Lightning Fast",
      "Always On",
    ],
    githubLink: "https://github.com/Rii1126/svs-portal",
    liveDemoLink: "https://solanavibestation.vercel.app",
    year: "2023",
    category: "Web3 / DeFi",
    color: "#a855f7",
  },
  {
    id: 4,
    title: "PumpBot",
    subtitle: "The fastest way to launch and manage your assets",
    description:
      "An automated trading and asset management platform for the Solana ecosystem. Built for speed, reliability, and ease of use.",
    imageSrc: "/pumpbot-hero.png",
    technologies: ["React", "Next.js", "Tailwind", "Node.js"],
    features: [
      "Asset Management",
      "Automated Trading",
      "Real-Time Data",
      "Mobile Responsive",
    ],
    githubLink: "https://github.com/yur1-dev/pumpbot",
    liveDemoLink: "https://pump-bot-five.vercel.app/",
    year: "2024",
    category: "Web3 / Trading",
    color: "#22d3ee",
  },
  {
    id: 5,
    title: "Vyns",
    subtitle: "Your next-gen creative platform",
    description:
      "A modern creative platform built for artists and designers. Vyns delivers a seamless, high-performance experience for showcasing and discovering creative work.",
    imageSrc: "/vyns-hero.png",
    technologies: ["Next.js", "TypeScript", "Tailwind", "React"],
    features: [
      "Creator Profiles",
      "Portfolio Showcase",
      "Smooth Animations",
      "Mobile First",
    ],
    githubLink: "https://github.com/yur1-dev/vyns-app",
    liveDemoLink: "https://vyns-app.vercel.app",
    year: "2026",
    category: "Design / Creative",
    color: "#a3e635",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        .projects-page {
          min-height: 100vh;
          background: #060608;
          font-family: 'Syne', sans-serif;
          color: #fff;
          overflow-x: hidden;
        }

        .projects-header {
          max-width: 900px;
          margin: 0 auto;
          padding: 9rem 1.5rem 4rem;
        }

        .projects-header-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #a3e635;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .projects-header-label::before {
          content: '';
          width: 20px;
          height: 1px;
          background: #a3e635;
        }

        .projects-header h1 {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.9;
          margin-bottom: 1.25rem;
        }

        .projects-header h1 em {
          font-style: normal;
          background: linear-gradient(135deg, #a3e635, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .projects-header-sub {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.35);
          font-weight: 400;
          max-width: 380px;
          line-height: 1.7;
        }

        .projects-count {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.1em;
          margin-top: 2rem;
        }

        .projects-diagonal-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 3rem 0 6rem;
        }

        .projects-diagonal-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }

        .projects-diagonal-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .proj-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 1.25rem;
          border: 0.5px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          min-height: 340px;
        }

        .proj-card:nth-child(even) {
          direction: rtl;
        }

        .proj-card:nth-child(even) > * {
          direction: ltr;
        }

        .proj-card:hover {
          border-color: rgba(255,255,255,0.12);
          transform: translateY(-4px);
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
        }

        .proj-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1.25rem;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .proj-card[data-hovered="true"]::after {
          opacity: 1;
        }

        .proj-card-image {
          position: relative;
          overflow: hidden;
          min-height: 340px;
        }

        .proj-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .proj-card:hover .proj-card-image img {
          transform: scale(1.05);
        }

        .proj-card:nth-child(odd) .proj-card-image {
          clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
        }

        .proj-card:nth-child(even) .proj-card-image {
          clip-path: polygon(5% 0, 100% 0, 100% 100%, 0 100%);
        }

        .proj-card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.3), transparent);
          transition: opacity 0.4s ease;
        }

        .proj-card:hover .proj-card-image-overlay { opacity: 0.5; }

        .proj-card-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3rem 2.5rem;
          gap: 0;
        }

        .proj-card-index {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.2);
          margin-bottom: 1rem;
        }

        .proj-card-category {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.25rem 0.65rem;
          border-radius: 100px;
          border: 0.5px solid;
          width: fit-content;
          margin-bottom: 1.25rem;
          font-weight: 400;
        }

        .proj-card-title {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .proj-card-subtitle {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.35);
          font-weight: 400;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .proj-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 2rem;
        }

        .proj-card-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.04);
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 100px;
          padding: 0.2rem 0.55rem;
        }

        .proj-card-cta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: gap 0.2s ease;
        }

        .proj-card:hover .proj-card-cta { gap: 1rem; }

        .proj-card-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .proj-card-year {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.1em;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(8px);
          padding: 0.25rem 0.6rem;
          border-radius: 100px;
          border: 0.5px solid rgba(255,255,255,0.08);
        }

        @media (max-width: 768px) {
          .proj-card {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .proj-card:nth-child(even) { direction: ltr; }
          .proj-card-image { min-height: 220px; }
          .proj-card:nth-child(odd) .proj-card-image,
          .proj-card:nth-child(even) .proj-card-image { clip-path: none; }
          .proj-card-content { padding: 1.75rem 1.5rem; }
          .proj-card-title { font-size: 1.5rem; }
        }

        .proj-modal {
          background: rgba(6,6,8,0.98) !important;
          backdrop-filter: blur(40px) !important;
          border: 0.5px solid rgba(255,255,255,0.1) !important;
          border-radius: 1.25rem !important;
          padding: 0 !important;
          overflow: hidden !important;
          max-width: 640px !important;
          font-family: 'Syne', sans-serif !important;
          color: #fff !important;
        }

        .proj-modal-img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          object-position: top;
        }

        .proj-modal-body {
          padding: 1.75rem;
        }

        .proj-modal-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .proj-modal-title {
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1;
          color: #fff;
          font-family: 'Syne', sans-serif;
        }

        .proj-modal-year-badge {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.05);
          border: 0.5px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          padding: 0.3rem 0.7rem;
          white-space: nowrap;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .proj-modal-desc {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-family: 'Syne', sans-serif;
        }

        .proj-modal-section-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-bottom: 0.65rem;
        }

        .proj-modal-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .proj-modal-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.55);
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          background: rgba(255,255,255,0.02);
          border: 0.5px solid rgba(255,255,255,0.06);
        }

        .proj-modal-feature-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .proj-modal-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1.75rem;
        }

        .proj-modal-tech-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.04);
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 100px;
          padding: 0.25rem 0.65rem;
        }

        .proj-modal-btns {
          display: flex;
          gap: 0.75rem;
        }

        .proj-modal-btn-gh {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.04);
          border: 0.5px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          padding: 0.85rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .proj-modal-btn-gh:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.07);
        }

        .proj-modal-btn-live {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #000;
          background: linear-gradient(135deg, #a3e635, #22d3ee);
          border: none;
          border-radius: 0.75rem;
          padding: 0.85rem;
          text-decoration: none;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .proj-modal-btn-live:hover {
          box-shadow: 0 8px 32px rgba(163,230,53,0.3);
          transform: translateY(-1px);
        }

        .projects-bottom-cta {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem 6rem;
        }

        .projects-bottom-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 2.5rem;
          border-radius: 1.25rem;
          border: 0.5px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          flex-wrap: wrap;
        }

        .projects-cta-text {
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .projects-cta-text span {
          background: linear-gradient(135deg, #a3e635, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .projects-cta-sub {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.3);
          margin-top: 0.35rem;
          font-weight: 400;
        }

        .projects-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #000;
          background: linear-gradient(135deg, #a3e635, #22d3ee);
          border: none;
          border-radius: 0.6rem;
          padding: 0.8rem 1.75rem;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .projects-cta-btn:hover {
          box-shadow: 0 12px 40px rgba(163,230,53,0.3);
          transform: translateY(-2px);
        }
      `}</style>

      <div className="projects-page">
        <Navbar />

        <div className="projects-header">
          <div className="projects-header-label">Selected Work</div>
          <h1>
            My
            <br />
            <em>Projects</em>
          </h1>
          <p className="projects-header-sub">
            A collection of work built across Web3, DeFi, and modern frontend
            development.
          </p>
          <p className="projects-count">— {projects.length} projects</p>
        </div>

        <div className="projects-diagonal-section">
          <div className="projects-diagonal-inner">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="proj-card"
                data-hovered={hoveredId === project.id ? "true" : "false"}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleOpen(project)}
                style={
                  {
                    ["--proj-color" as string]: project.color,
                    boxShadow:
                      hoveredId === project.id
                        ? `0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px ${project.color}20`
                        : undefined,
                  } as React.CSSProperties
                }
              >
                <div className="proj-card-image">
                  <img src={project.imageSrc} alt={project.title} />
                  <div className="proj-card-image-overlay" />
                  <div className="proj-card-year">{project.year}</div>
                </div>

                <div className="proj-card-content">
                  <div className="proj-card-index">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </div>

                  <div
                    className="proj-card-category"
                    style={{
                      color: project.color,
                      borderColor: `${project.color}40`,
                      background: `${project.color}08`,
                    }}
                  >
                    {project.category}
                  </div>

                  <div className="proj-card-title">{project.title}</div>
                  <div className="proj-card-subtitle">{project.subtitle}</div>

                  <div className="proj-card-tags">
                    {project.technologies.map((t) => (
                      <span key={t} className="proj-card-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    className="proj-card-cta"
                    style={{ color: project.color }}
                  >
                    View Project
                    <div
                      className="proj-card-arrow"
                      style={{
                        borderColor:
                          hoveredId === project.id
                            ? project.color
                            : `${project.color}50`,
                        background:
                          hoveredId === project.id
                            ? project.color
                            : "transparent",
                        color:
                          hoveredId === project.id ? "#000" : project.color,
                      }}
                    >
                      →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-bottom-cta">
          <div className="projects-bottom-cta-inner">
            <div>
              <div className="projects-cta-text">
                Have a project in mind?
                <br />
                <span>Let&apos;s make it real.</span>
              </div>
              <div className="projects-cta-sub">
                Open for freelance and full-time opportunities.
              </div>
            </div>
            <a href="mailto:hello@yur1.dev" className="projects-cta-btn">
              Start a Conversation →
            </a>
          </div>
        </div>

        <Footer />
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {selectedProject && (
          <DialogContent
            className="proj-modal"
            style={{
              background: "rgba(6,6,8,0.98)",
              border: "0.5px solid rgba(255,255,255,0.1)",
              borderRadius: "1.25rem",
              padding: 0,
              overflow: "hidden",
              maxWidth: "640px",
              color: "#fff",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            <img
              src={selectedProject.imageSrc}
              alt={selectedProject.title}
              className="proj-modal-img"
            />
            <div className="proj-modal-body">
              <DialogHeader>
                <div className="proj-modal-header-row">
                  <DialogTitle
                    className="proj-modal-title"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "1.75rem",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {selectedProject.title}
                  </DialogTitle>
                  <span className="proj-modal-year-badge">
                    {selectedProject.year}
                  </span>
                </div>
                <DialogDescription
                  className="proj-modal-desc"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                  }}
                >
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="proj-modal-section-label">Features</div>
              <div className="proj-modal-features">
                {selectedProject.features.map((f) => (
                  <div key={f} className="proj-modal-feature">
                    <span
                      className="proj-modal-feature-dot"
                      style={{ background: selectedProject.color }}
                    />
                    {f}
                  </div>
                ))}
              </div>

              <div className="proj-modal-section-label">Tech Stack</div>
              <div className="proj-modal-tech-row">
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="proj-modal-tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="proj-modal-btns">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-modal-btn-gh"
                >
                  GitHub ↗
                </a>
                <a
                  href={selectedProject.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-modal-btn-live"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
