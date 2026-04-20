"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaMapPin } from "react-icons/fa";
import Socials from "@/app/components/Socials/Socials";

const TelegramModal = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <>
      <style>{`
        .tg-backdrop {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(0,0,0,0.7); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          padding: 1rem; animation: backdropIn 0.25s ease both;
        }
        @keyframes backdropIn { from { opacity: 0; } to { opacity: 1; } }
        .tg-modal {
          position: relative; width: 100%; max-width: 420px;
          background: rgba(10,10,10,0.97); border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 1.5rem; overflow: hidden;
          animation: modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .tg-glow {
          position: absolute; inset: -1px; border-radius: 1.5rem;
          background: linear-gradient(135deg, rgba(163,230,53,0.25), rgba(34,211,238,0.25), transparent 60%);
          z-index: -1; pointer-events: none;
        }
        .tg-top-bar {
          height: 3px;
          background: linear-gradient(90deg, #a3e635, #22d3ee, #a3e635);
          background-size: 200% 100%; animation: shimmer 2s linear infinite;
        }
        @keyframes shimmer { 0% { background-position: 0% 0%; } 100% { background-position: 200% 0%; } }
        .tg-body { padding: 2rem 2rem 2.5rem; position: relative; }
        .tg-close {
          position: absolute; top: 1.25rem; right: 1.25rem;
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.05); border: 0.5px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: rgba(255,255,255,0.4);
          transition: all 0.2s ease; font-size: 0.9rem; line-height: 1;
        }
        .tg-close:hover { background: rgba(255,255,255,0.1); color: #fff; transform: rotate(90deg); }
        .tg-icon-wrap {
          width: 56px; height: 56px; border-radius: 1rem;
          background: linear-gradient(135deg, #229ED9, #1a85b8);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.5rem; box-shadow: 0 8px 32px rgba(34,158,217,0.3);
          animation: iconPop 0.4s 0.15s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes iconPop {
          from { opacity: 0; transform: scale(0.5) rotate(-15deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .tg-icon-wrap svg { width: 28px; height: 28px; }
        .tg-label {
          font-family: 'Space Mono', monospace; font-size: 0.65rem;
          letter-spacing: 0.2em; text-transform: uppercase; color: #a3e635;
          margin-bottom: 0.5rem; animation: fadeUp 0.4s 0.2s ease both;
        }
        .tg-title {
          font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 800;
          letter-spacing: -0.03em; color: #fff; line-height: 1.1; margin-bottom: 0.75rem;
          animation: fadeUp 0.4s 0.25s ease both;
        }
        .tg-title span {
          background: linear-gradient(135deg, #a3e635, #22d3ee);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .tg-desc {
          font-family: 'Syne', sans-serif; font-size: 0.875rem;
          color: rgba(255,255,255,0.4); line-height: 1.6; margin-bottom: 1.5rem;
          animation: fadeUp 0.4s 0.3s ease both;
        }
        .tg-handle {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(34,158,217,0.08); border: 0.5px solid rgba(34,158,217,0.2);
          border-radius: 100px; padding: 0.4rem 0.9rem; margin-bottom: 1.75rem;
          animation: fadeUp 0.4s 0.32s ease both;
        }
        .tg-handle-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #229ED9;
          animation: hpulse 2s ease infinite;
        }
        @keyframes hpulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        .tg-handle-text {
          font-family: 'Space Mono', monospace; font-size: 0.7rem;
          color: rgba(34,211,238,0.8); letter-spacing: 0.05em;
        }
        .tg-cta {
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
          width: 100%; padding: 0.9rem 1.5rem;
          background: linear-gradient(135deg, #229ED9, #1a6fa3);
          border: none; border-radius: 0.75rem;
          font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase; color: #fff;
          cursor: pointer; text-decoration: none; transition: all 0.25s ease;
          animation: fadeUp 0.4s 0.35s ease both; position: relative; overflow: hidden;
        }
        .tg-cta::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0; transition: opacity 0.25s ease;
        }
        .tg-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(34,158,217,0.4); }
        .tg-cta:hover::before { opacity: 1; }
        .tg-cta svg { width: 18px; height: 18px; flex-shrink: 0; }
        .tg-or {
          display: flex; align-items: center; gap: 0.75rem; margin: 1rem 0;
          animation: fadeUp 0.4s 0.38s ease both;
        }
        .tg-or-line { flex: 1; height: 0.5px; background: rgba(255,255,255,0.06); }
        .tg-or-text {
          font-family: 'Space Mono', monospace; font-size: 0.6rem;
          letter-spacing: 0.1em; color: rgba(255,255,255,0.2); text-transform: uppercase;
        }
        .tg-secondary {
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          width: 100%; padding: 0.75rem; background: none;
          border: 0.5px solid rgba(255,255,255,0.07); border-radius: 0.75rem;
          font-family: 'Syne', sans-serif; font-size: 0.8rem; font-weight: 600;
          color: rgba(255,255,255,0.35); cursor: pointer; text-decoration: none;
          transition: all 0.2s ease; animation: fadeUp 0.4s 0.4s ease both;
        }
        .tg-secondary:hover { color: rgba(255,255,255,0.7); border-color: rgba(255,255,255,0.15); background: rgba(255,255,255,0.03); }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="tg-backdrop" onClick={onClose}>
        <div className="tg-modal" onClick={(e) => e.stopPropagation()}>
          <div className="tg-glow" />
          <div className="tg-top-bar" />
          <div className="tg-body">
            <button className="tg-close" onClick={onClose} aria-label="Close">
              ✕
            </button>
            <div className="tg-icon-wrap">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </div>
            <div className="tg-label">Let's Work Together</div>
            <h2 className="tg-title">
              Got a project?
              <br />
              <span>Let's build it.</span>
            </h2>
            <p className="tg-desc">
              Drop me a message on Telegram — I usually reply within a few
              hours. Let's talk about your idea.
            </p>
            <div className="tg-handle">
              <span className="tg-handle-dot" />
              <span className="tg-handle-text">@yur1_dev</span>
            </div>
            <a
              href="https://t.me/yur1_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="tg-cta"
            >
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Open Telegram
            </a>
            <div className="tg-or">
              <div className="tg-or-line" />
              <span className="tg-or-text">or</span>
              <div className="tg-or-line" />
            </div>
            <a href="mailto:hello@yur1.dev" className="tg-secondary">
              Send an email instead →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const age =
    new Date().getFullYear() -
    2001 -
    (new Date() < new Date(new Date().getFullYear(), 1, 3) ? 1 : 0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        .hero-root {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          font-family: 'Syne', sans-serif;
          padding-top: 5rem;
          padding-bottom: 4rem;
        }

        .hero-orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
        .hero-orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(163,230,53,0.12) 0%, transparent 70%);
          top: -100px; right: -100px; animation: orbFloat1 8s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%);
          bottom: -50px; left: -80px; animation: orbFloat2 10s ease-in-out infinite;
        }
        .hero-orb-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(163,230,53,0.06) 0%, transparent 70%);
          top: 50%; left: 40%; animation: orbFloat1 12s ease-in-out infinite reverse;
        }
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-20px) scale(1.05); }
          66% { transform: translate(-20px,15px) scale(0.97); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px,-30px) scale(1.08); }
        }

        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px; z-index: 0;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }

        .hero-content {
          max-width: 900px; margin: 0 auto; padding: 0 1.5rem;
          position: relative; z-index: 1; width: 100%;
        }

        /* Desktop layout */
        .hero-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }

        .hero-text { flex: 1; min-width: 0; }
        .hero-image-col { flex-shrink: 0; }

        /* Image card */
        .hero-image-wrap { position: relative; width: 220px; height: 280px; }
        .hero-image-wrap::before {
          content: ''; position: absolute; inset: -1px; border-radius: 1.25rem;
          background: linear-gradient(135deg, rgba(163,230,53,0.4), rgba(34,211,238,0.4), transparent, transparent);
          z-index: 0;
        }
        .hero-image-inner {
          position: relative; z-index: 1; width: 100%; height: 100%;
          border-radius: 1.2rem; overflow: hidden; background: #111;
        }
        .hero-float-tag {
          position: absolute; bottom: -1rem; left: -1.5rem;
          background: rgba(8,8,8,0.9); backdrop-filter: blur(12px);
          border: 0.5px solid rgba(255,255,255,0.1); border-radius: 0.75rem;
          padding: 0.6rem 0.9rem; display: flex; align-items: center; gap: 0.5rem;
          white-space: nowrap; z-index: 2;
        }
        .float-tag-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #a3e635;
          animation: dotPulse 2s ease infinite;
        }
        .float-tag-text {
          font-family: 'Space Mono', monospace; font-size: 0.65rem;
          color: rgba(255,255,255,0.7); letter-spacing: 0.05em;
        }
        .hero-bracket {
          position: absolute; top: -0.75rem; right: -0.75rem;
          width: 28px; height: 28px;
          border-top: 1.5px solid rgba(163,230,53,0.5);
          border-right: 1.5px solid rgba(163,230,53,0.5);
          border-radius: 0 0.3rem 0 0; z-index: 2;
        }

        /* Text elements */
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-family: 'Space Mono', monospace; font-size: 0.7rem;
          letter-spacing: 0.2em; text-transform: uppercase; color: #a3e635;
          margin-bottom: 1.5rem; padding: 0.35rem 0.75rem 0.35rem 0.5rem;
          border: 0.5px solid rgba(163,230,53,0.25); border-radius: 100px;
          background: rgba(163,230,53,0.05); width: fit-content;
          animation: fadeSlideUp 0.6s ease both;
        }
        .hero-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #a3e635;
          animation: dotPulse 2s ease infinite;
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .hero-h1 {
          font-size: clamp(3rem, 8vw, 6rem); font-weight: 800;
          line-height: 0.95; letter-spacing: -0.03em;
          color: #fff; margin: 0 0 1.25rem;
          animation: fadeSlideUp 0.6s 0.1s ease both;
        }
        .hero-h1 .accent {
          background: linear-gradient(135deg, #a3e635 0%, #22d3ee 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .hero-location {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-family: 'Space Mono', monospace; font-size: 0.7rem;
          color: rgba(255,255,255,0.3); letter-spacing: 0.05em;
          margin-bottom: 1.25rem; animation: fadeSlideUp 0.6s 0.15s ease both;
        }

        .hero-desc {
          font-size: 1rem; line-height: 1.7; color: rgba(255,255,255,0.45);
          max-width: 460px; margin: 0 0 2rem;
          animation: fadeSlideUp 0.6s 0.2s ease both;
        }

        .hero-actions {
          display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
          animation: fadeSlideUp 0.6s 0.3s ease both; margin-bottom: 2rem;
        }

        .btn-hire {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-family: 'Syne', sans-serif; font-size: 0.8rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase; color: #000;
          background: linear-gradient(135deg, #a3e635, #22d3ee);
          border: none; border-radius: 0.5rem; padding: 0.75rem 1.75rem;
          cursor: pointer; transition: all 0.25s ease; position: relative; overflow: hidden;
        }
        .btn-hire::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, #22d3ee, #a3e635);
          opacity: 0; transition: opacity 0.25s ease;
        }
        .btn-hire:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(163,230,53,0.3); }
        .btn-hire:hover::after { opacity: 1; }
        .btn-hire span { position: relative; z-index: 1; }
        .btn-hire svg { position: relative; z-index: 1; width: 15px; height: 15px; }

        .btn-ghost {
          display: inline-block; font-family: 'Syne', sans-serif;
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.05em;
          text-transform: uppercase; color: rgba(255,255,255,0.6);
          background: none; border: 0.5px solid rgba(255,255,255,0.12);
          border-radius: 0.5rem; padding: 0.75rem 1.75rem;
          cursor: pointer; text-decoration: none; transition: all 0.25s ease;
        }
        .btn-ghost:hover { color: #fff; border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.04); }

        .hero-socials-wrap { margin-bottom: 2rem; animation: fadeSlideUp 0.6s 0.32s ease both; }

        .hero-stats { display: flex; gap: 2.5rem; animation: fadeSlideUp 0.6s 0.35s ease both; }
        .hero-stat-num {
          font-family: 'Space Mono', monospace; font-size: 1.75rem;
          font-weight: 700; color: #fff; line-height: 1; margin-bottom: 0.25rem;
        }
        .hero-stat-num span {
          background: linear-gradient(135deg, #a3e635, #22d3ee);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .hero-stat-label {
          font-size: 0.7rem; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(255,255,255,0.3);
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-divider {
          position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
          animation: fadeSlideUp 1s 0.6s ease both;
        }
        .hero-scroll-label {
          font-family: 'Space Mono', monospace; font-size: 0.6rem;
          letter-spacing: 0.15em; color: rgba(255,255,255,0.2); text-transform: uppercase;
        }
        .hero-scroll-line {
          width: 1px; height: 40px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent);
          animation: scrollLineAnim 2s ease infinite;
        }
        @keyframes scrollLineAnim {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }

        /* ─── MOBILE ─── */
        @media (max-width: 768px) {
          .hero-root {
            padding-top: 6rem;
            padding-bottom: 5rem;
            align-items: flex-start;
          }

          .hero-main {
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
          }

          /* Photo first on mobile */
          .hero-image-col { order: -1; }

          .hero-image-wrap { width: 160px; height: 210px; }

          /* Re-center the float tag on mobile since there's no left offset room */
          .hero-float-tag {
            left: 50%;
            transform: translateX(-50%);
            bottom: -0.75rem;
          }

          .hero-text { width: 100%; }

          .hero-h1 { font-size: clamp(2.75rem, 13vw, 4rem); }

          .hero-desc { font-size: 0.9rem; }

          .hero-stats { gap: 1.5rem; }
          .hero-stat-num { font-size: 1.4rem; }

          /* Hide scroll indicator on mobile — not enough room */
          .hero-divider { display: none; }
        }
      `}</style>

      {showModal && <TelegramModal onClose={() => setShowModal(false)} />}

      <section className="hero-root">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        <div className="hero-content">
          <div className="hero-main">
            {/* TEXT */}
            <div className="hero-text">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                Available for work
              </div>

              <h1 className="hero-h1">
                Fullstack
                <br />
                <span className="accent">Web3 Dev</span>
              </h1>

              <div className="hero-location">
                <FaMapPin size={10} />
                Nueva Ecija, Philippines
              </div>

              <p className="hero-desc">
                I'm Yuri — a {age}-year-old fullstack developer focused on Web3.
                I build fast, polished dApps, ai trading, web system, and
                everything in between.
              </p>

              <div className="hero-actions">
                <button onClick={() => setShowModal(true)} className="btn-hire">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <span>Hire Me</span>
                </button>
                {/* <a id="projects" className="btn-ghost">
                  View Work
                </a> */}
              </div>

              <div className="hero-socials-wrap">
                <Socials />
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-num">
                    <span>3+</span>
                  </div>
                  <div className="hero-stat-label">Years Exp</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">
                    <span>20+</span>
                  </div>
                  <div className="hero-stat-label">Projects</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">
                    <span>100%</span>
                  </div>
                  <div className="hero-stat-label">Remote</div>
                </div>
              </div>
            </div>

            {/* IMAGE — order: -1 on mobile puts this first */}
            <div className="hero-image-col">
              <div className="hero-image-wrap">
                <div className="hero-bracket" />
                <div className="hero-image-inner">
                  <Image
                    src="/hero-image.png"
                    alt="Yuri Esber"
                    width={220}
                    height={280}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    priority
                  />
                </div>
                <div className="hero-float-tag">
                  <span className="float-tag-dot" />
                  <span className="float-tag-text">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-divider">
          <span className="hero-scroll-label">Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>
    </>
  );
};

export default Hero;
