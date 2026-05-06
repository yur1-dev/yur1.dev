"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"counting" | "exit">("counting");

  useEffect(() => {
    const stages = [
      { target: 35, speed: 20 },
      { target: 70, speed: 30 },
      { target: 90, speed: 50 },
      { target: 100, speed: 70 },
    ];

    let current = 0;
    let stageIndex = 0;

    const tick = () => {
      const { target, speed } = stages[stageIndex];
      if (current < target) {
        current++;
        setProgress(current);
        setTimeout(tick, speed);
      } else if (stageIndex < stages.length - 1) {
        stageIndex++;
        setTimeout(tick, speed);
      } else {
        setTimeout(() => {
          setPhase("exit");
          setTimeout(onComplete, 900);
        }, 300);
      }
    };

    tick();
  }, [onComplete]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        .ls-root {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #080808;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.16,1,0.3,1);
          overflow: hidden;
        }

        .ls-root.exit {
          opacity: 0;
          transform: scale(1.05);
        }

        .ls-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 45% at 12% 12%, rgba(28,55,18,0.6) 0%, transparent 60%),
            radial-gradient(ellipse 45% 40% at 88% 88%, rgba(20,48,14,0.5) 0%, transparent 60%);
          pointer-events: none;
        }

        .ls-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 52px;
          animation: lsFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
        }

        .ls-logo {
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          font-size: clamp(3.5rem, 10vw, 6rem);
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1;
          display: inline-block;
        }

        .ls-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: clamp(240px, 50vw, 340px);
          animation: lsFadeUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both;
        }

        .ls-label-row {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        .ls-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        .ls-pct {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.04em;
        }

        .ls-track {
          width: 100%;
          height: 1.5px;
          background: rgba(255,255,255,0.08);
          border-radius: 99px;
          overflow: hidden;
        }

        .ls-fill {
          height: 100%;
          background: linear-gradient(90deg, #a3e635, #22d3ee);
          border-radius: 99px;
          box-shadow: 0 0 10px rgba(163,230,53,0.5);
          transition: width 0.08s linear;
        }

        @keyframes lsFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className={`ls-root${phase === "exit" ? " exit" : ""}`}>
        <div className="ls-glow" />
        <div className="ls-content">
          <span className="ls-logo">y1</span>

          <div className="ls-bottom">
            <div className="ls-label-row">
              <span className="ls-label">Loading</span>
              <span className="ls-pct">
                {String(progress).padStart(3, "\u2007")}%
              </span>
            </div>
            <div className="ls-track">
              <div className="ls-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
