"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import React, { useState } from "react";

interface CardData {
  imageSrc: string;
  title: string;
  description: string;
  technologies: string[];
  fullDetails: string;
  galleryImages: string[];
  features: string[];
  githubLink: string;
  liveDemoLink: string;
}

const cardsData: CardData[] = [
  {
    imageSrc: "/svs-hero.png",
    title: "Solana Vibe Station",
    description: "Your Solana RPC Gateway",
    technologies: ["Next.js", "TypeScript", "Tailwind", "React"],
    fullDetails:
      "Solana Vibe Station is a high-performance RPC gateway built for the Solana ecosystem — fast, reliable, and beautifully designed.",
    galleryImages: ["/svs-hero.png"],
    features: [
      "Authentication",
      "Create / edit / delete posts",
      "Comments",
      "Likes",
      "Rich Markdown Support",
    ],
    githubLink: "https://github.com/example/project1",
    liveDemoLink: "https://example.com/project1",
  },
  {
    imageSrc: "/pumpbot-hero.png",
    title: "PumpBot",
    description: "The fastest way to launch and manage your assets.",
    technologies: ["React", "Tailwind", "Next.js"],
    fullDetails:
      "PumpBot is an automated trading and asset management platform for the Solana ecosystem, built for speed and simplicity.",
    galleryImages: ["/pumpbot-hero.png"],
    features: [
      "Asset Management",
      "Automated Trading",
      "Real-Time Data",
      "User Dashboard",
    ],
    githubLink: "https://github.com/example/project2",
    liveDemoLink: "https://example.com/project2",
  },
];

const Portfolio: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        .port-root {
          max-width: 900px;
          margin: 0 auto;
          padding: 4rem 1.5rem 6rem;
          font-family: 'Syne', sans-serif;
          color: #fff;
        }

        .port-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #a3e635;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .port-label::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #a3e635;
        }

        .port-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1;
          color: #fff;
          margin: 0 0 3rem;
        }

        .port-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .port-grid { grid-template-columns: 1fr; }
        }

        .port-card {
          border-radius: 1.25rem;
          border: 0.5px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .port-card:hover {
          border-color: rgba(255,255,255,0.12);
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }

        .port-card-img-wrap {
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          position: relative;
        }

        .port-card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .port-card:hover .port-card-img-wrap img {
          transform: scale(1.04);
        }

        /* Overlay gradient on image */
        .port-card-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(8,8,8,0.8));
        }

        .port-card-body {
          padding: 1.25rem;
        }

        .port-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.01em;
          margin-bottom: 0.25rem;
        }

        .port-card-desc {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          font-weight: 400;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .port-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1rem;
        }

        .port-card-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.05);
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 100px;
          padding: 0.2rem 0.6rem;
        }

        .port-card-cta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #a3e635;
          transition: gap 0.2s ease;
        }

        .port-card:hover .port-card-cta { gap: 0.75rem; }

        .port-card-cta-arrow {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1px solid rgba(163,230,53,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          transition: all 0.2s ease;
        }

        .port-card:hover .port-card-cta-arrow {
          background: #a3e635;
          border-color: #a3e635;
          color: #000;
        }

        /* Modal */
        .port-modal-content {
          background: rgba(8,8,8,0.97) !important;
          backdrop-filter: blur(30px) !important;
          border: 0.5px solid rgba(255,255,255,0.1) !important;
          border-radius: 1.25rem !important;
          color: #fff;
          font-family: 'Syne', sans-serif;
          max-width: 600px;
          padding: 0;
          overflow: hidden;
        }

        .port-modal-img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
        }

        .port-modal-body {
          padding: 1.5rem;
        }

        .port-modal-title {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 0.35rem;
        }

        .port-modal-desc {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .port-modal-features-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 0.75rem;
        }

        .port-modal-features {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.75rem;
        }

        .port-modal-feature {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.6);
        }

        .port-modal-feature::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #a3e635;
          flex-shrink: 0;
        }

        .port-modal-btns {
          display: flex;
          gap: 0.75rem;
        }

        .port-modal-btn-gh {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.05);
          border: 0.5px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          padding: 0.75rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .port-modal-btn-gh:hover {
          color: #fff;
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
        }

        .port-modal-btn-live {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #000;
          background: linear-gradient(135deg, #a3e635, #22d3ee);
          border: none;
          border-radius: 0.75rem;
          padding: 0.75rem;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .port-modal-btn-live:hover {
          box-shadow: 0 8px 30px rgba(163,230,53,0.3);
          transform: translateY(-1px);
        }
      `}</style>

      <section className="port-root" id="portfolio">
        <div className="port-label">Work</div>
        <h2 className="port-title">Portfolio</h2>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          {selectedCard && (
            <DialogContent
              className="port-modal-content"
              style={{
                background: "rgba(8,8,8,0.97)",
                border: "0.5px solid rgba(255,255,255,0.1)",
                borderRadius: "1.25rem",
                padding: 0,
                overflow: "hidden",
                color: "#fff",
                fontFamily: "'Syne', sans-serif",
                maxWidth: "600px",
              }}
            >
              <img
                src={selectedCard.imageSrc}
                alt={selectedCard.title}
                className="port-modal-img"
              />
              <div className="port-modal-body">
                <DialogHeader>
                  <DialogTitle
                    className="port-modal-title"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: "#fff",
                    }}
                  >
                    {selectedCard.title}
                  </DialogTitle>
                  <DialogDescription
                    className="port-modal-desc"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {selectedCard.fullDetails}
                  </DialogDescription>
                </DialogHeader>

                <div className="port-modal-features-label">Features</div>
                <div className="port-modal-features">
                  {selectedCard.features.map((f) => (
                    <div key={f} className="port-modal-feature">
                      {f}
                    </div>
                  ))}
                </div>

                <div className="port-modal-btns">
                  <a
                    href={selectedCard.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-modal-btn-gh"
                  >
                    GitHub
                  </a>
                  <a
                    href={selectedCard.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="port-modal-btn-live"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>

        <div className="port-grid">
          {cardsData.map((card, i) => (
            <div
              key={i}
              className="port-card"
              onClick={() => handleCardClick(card)}
            >
              <div className="port-card-img-wrap">
                <img src={card.imageSrc} alt={card.title} />
              </div>
              <div className="port-card-body">
                <div className="port-card-title">{card.title}</div>
                <div className="port-card-desc">{card.description}</div>
                <div className="port-card-tags">
                  {card.technologies.map((t) => (
                    <span key={t} className="port-card-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="port-card-cta">
                  View Project
                  <span className="port-card-cta-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
