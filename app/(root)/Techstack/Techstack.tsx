import React from "react";

const techStackData = [
  { name: "React", src: "/react.svg" },
  { name: "Next.js", src: "/nextjs.svg" },
  { name: "Tailwind CSS", src: "/tailwindcss.svg" },
  { name: "TypeScript", src: "/typescript.svg" },
  { name: "Node.js", src: "/nodejs.png" },
  { name: "Figma", src: "/figma.svg" },
  { name: "Shadcn UI", src: "/shadcn.svg" },
  { name: "Mongodb", src: "/mongodb.png" },
];

const Techstack: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        .ts-root {
          max-width: 900px;
          margin: 0 auto;
          padding: 4rem 1.5rem 6rem;
          font-family: 'Syne', sans-serif;
          color: #fff;
        }

        .ts-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #22d3ee;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ts-label::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #22d3ee;
        }

        .ts-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1;
          color: #fff;
          margin: 0 0 0.5rem;
        }

        .ts-subtitle {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.3);
          font-weight: 400;
          margin-bottom: 3rem;
        }

        .ts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
          gap: 0.75rem;
        }

        .ts-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.9rem 1rem;
          border-radius: 0.875rem;
          border: 0.5px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          cursor: default;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          group: true;
        }

        .ts-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(163,230,53,0.03), rgba(34,211,238,0.03));
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .ts-card:hover {
          border-color: rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.3);
        }

        .ts-card:hover::after { opacity: 1; }

        .ts-logo {
          width: 36px;
          height: 36px;
          object-fit: contain;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        .ts-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
          letter-spacing: -0.01em;
          position: relative;
          z-index: 1;
          transition: color 0.25s ease;
        }

        .ts-card:hover .ts-name { color: #fff; }
      `}</style>

      <section className="ts-root">
        <div className="ts-label">Tools</div>
        <h2 className="ts-title">Tech Stack</h2>
        <p className="ts-subtitle">Technologies I work with daily.</p>

        <div className="ts-grid">
          {techStackData.map((tech) => (
            <div key={tech.name} className="ts-card">
              <img src={tech.src} alt={tech.name} className="ts-logo" />
              <span className="ts-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Techstack;
