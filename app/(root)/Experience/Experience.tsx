import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import Image from "next/image";

const workData = [
  {
    id: 1,
    image: "/pumpbot-experience.png",
    duration: "Jan 2024 — Sept 2024",
    company: "PUMPBOT",
    role: "Frontend Web Developer",
    skills: ["Fullstack", "Figma", "Web Design"],
  },
  {
    id: 2,
    image: "/svs-experience.png",
    duration: "Nov 2023 — Dec 2023",
    company: "Solana Vibe Station",
    role: "Frontend Web Developer",
    skills: ["Web Design", "Web Development"],
  },
  {
    id: 3,
    image: "/vyns-experience.png",
    duration: "Mar 2023 — Jul 2023",
    company: "Vyns",
    role: "Web Developer",
    skills: ["Next.js", "Tailwind", "TypeScript"],
  },
];

const studiesData = [
  {
    id: 1,
    image: "/au.png",
    duration: "2024 — Present",
    institution: "PHINMA-Araullo University",
    degree: "Bachelor of Science in Information Technology",
    details: "Focused on web technologies and software development.",
  },
  {
    id: 2,
    image: "/maliwalo.png",
    duration: "2017 — 2019",
    institution: "Maliwalo Senior High School",
    degree: "Diploma in Senior High School",
    details: "Specialized in front-end",
  },
  {
    id: 3,
    image: "/scholastica.png",
    duration: "2015 — 2017",
    institution: "Scholastica de Leau Mer Academy",
    degree: "High School Diploma",
    details: "Basic programming and minor subjects",
  },
];

const Experience = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        .exp-root {
          max-width: 900px;
          margin: 0 auto;
          padding: 6rem 1.5rem;
          font-family: 'Syne', sans-serif;
          color: #fff;
        }

        .exp-label {
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

        .exp-label::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #a3e635;
        }

        .exp-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1;
          color: #fff;
          margin: 0 0 3rem;
        }

        .exp-tabs-list {
          display: flex;
          gap: 0;
          background: rgba(255,255,255,0.03);
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 0.75rem;
          padding: 0.3rem;
          width: fit-content;
          margin-bottom: 2.5rem;
        }

        .exp-tab-trigger {
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          background: none;
          border: none;
          border-radius: 0.55rem;
          padding: 0.55rem 2rem;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .exp-tab-trigger[data-state="active"] {
          color: #000;
          background: linear-gradient(135deg, #a3e635, #22d3ee);
        }

        .exp-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.25rem 1.5rem;
          border-radius: 1rem;
          border: 0.5px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .exp-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #a3e635, #22d3ee);
          opacity: 0;
          transition: opacity 0.25s ease;
          border-radius: 0 1px 1px 0;
        }

        .exp-card:hover {
          border-color: rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          transform: translateX(4px);
        }

        .exp-card:hover::before { opacity: 1; }

        .exp-cards-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .exp-logo {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          border-radius: 0.75rem;
          overflow: hidden;
          background: rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0.5px solid rgba(255,255,255,0.08);
        }

        .exp-duration {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }

        .exp-company {
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.01em;
          margin-bottom: 0.15rem;
        }

        .exp-role {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.45);
          font-weight: 400;
          margin-bottom: 0.6rem;
        }

        .exp-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .exp-skill-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.05em;
          color: rgba(163, 230, 53, 0.8);
          background: rgba(163, 230, 53, 0.07);
          border: 0.5px solid rgba(163, 230, 53, 0.2);
          border-radius: 100px;
          padding: 0.2rem 0.6rem;
        }

        .exp-index {
          margin-left: auto;
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.1);
          flex-shrink: 0;
        }
      `}</style>

      <section className="exp-root" id="experience">
        <div className="exp-label">Career</div>
        <h2 className="exp-title">Experience</h2>

        <Tabs defaultValue="work">
          <TabsList
            className="exp-tabs-list"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "0.5px solid rgba(255,255,255,0.08)",
              borderRadius: "0.75rem",
              padding: "0.3rem",
              height: "auto",
            }}
          >
            <TabsTrigger
              value="work"
              className="exp-tab-trigger"
              style={{
                borderRadius: "0.55rem",
                padding: "0.55rem 2rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Work
            </TabsTrigger>
            <TabsTrigger
              value="studies"
              className="exp-tab-trigger"
              style={{
                borderRadius: "0.55rem",
                padding: "0.55rem 2rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Studies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="work">
            <div className="exp-cards-wrap">
              {workData.map((item, i) => (
                <div key={item.id} className="exp-card">
                  <div className="exp-logo">
                    <Image
                      src={item.image}
                      alt={item.company}
                      width={52}
                      height={52}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="exp-duration">{item.duration}</div>
                    <div className="exp-company">{item.company}</div>
                    <div className="exp-role">{item.role}</div>
                    <div className="exp-skills">
                      {item.skills.map((s) => (
                        <span key={s} className="exp-skill-tag">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="exp-index">0{i + 1}</div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="studies">
            <div className="exp-cards-wrap">
              {studiesData.map((item, i) => (
                <div key={item.id} className="exp-card">
                  <div className="exp-logo">
                    <Image
                      src={item.image}
                      alt={item.institution}
                      width={52}
                      height={52}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="exp-duration">{item.duration}</div>
                    <div className="exp-company">{item.institution}</div>
                    <div className="exp-role">{item.degree}</div>
                    <div className="exp-skills">
                      <span className="exp-skill-tag">{item.details}</span>
                    </div>
                  </div>
                  <div className="exp-index">0{i + 1}</div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default Experience;
