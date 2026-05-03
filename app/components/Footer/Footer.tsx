import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        .footer-root {
          font-family: 'Syne', sans-serif;
          color: #fff;
          position: relative;
        }

        /* Top border gradient */
        .footer-border {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(163,230,53,0.3), rgba(34,211,238,0.3), transparent);
          margin-bottom: 0;
        }

        .footer-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 4rem 1.5rem 2rem;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 3rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .footer-logo {
          font-family: 'Space Mono', monospace;
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1;
          text-decoration: none;
          display: block;
          margin-bottom: 1rem;
        }

        .footer-tagline {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.25);
          font-weight: 400;
          max-width: 200px;
          line-height: 1.5;
        }

        .footer-nav-group {}

        .footer-nav-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 1rem;
        }

        .footer-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer-nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-nav-link:hover { color: #fff; }

        .footer-nav-groups {
          display: flex;
          gap: 4rem;
        }

        /* Bottom row */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 0.5px solid rgba(255,255,255,0.06);
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-copy {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.05em;
        }

        .footer-handle {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.05em;
        }

        /* CTA Box */
        .footer-cta {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: rgba(255,255,255,0.02);
          border: 0.5px solid rgba(255,255,255,0.07);
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 4rem;
        }

        .footer-cta-text {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .footer-cta-text span {
          background: linear-gradient(135deg, #a3e635, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-cta-sub {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
          font-weight: 400;
        }

        .footer-cta-btn {
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
          border-radius: 0.5rem;
          padding: 0.7rem 1.5rem;
          text-decoration: none;
          width: fit-content;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .footer-cta-btn:hover {
          box-shadow: 0 8px 30px rgba(163,230,53,0.35);
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .footer-top { flex-direction: column; }
          .footer-logo { font-size: 1.75rem; }
          .footer-cta-text { font-size: 1.25rem; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-border" />
        <div className="footer-inner">
          {/* CTA */}
          <div className="footer-cta">
            <div className="footer-cta-text">
              Got a project?
              <br />
              <span>Let's build it.</span>
            </div>
            <div className="footer-cta-sub">
              Open for freelance & full-time roles.
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&to=yuriesb01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta-btn"
            >
              Get in Touch →
            </a>
          </div>

          <div className="footer-top">
            <div>
              <a href="/" className="footer-logo">
                yur1.dev
              </a>
              <p className="footer-tagline">
                Frontend developer crafting modern web experiences.
              </p>
            </div>

            <div className="footer-nav-groups">
              <div className="footer-nav-group">
                <div className="footer-nav-label">Explore</div>
                <ul className="footer-nav-links">
                  <li>
                    <a href="/" className="footer-nav-link">
                      Intro
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="footer-nav-link">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="/projects" className="footer-nav-link">
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-nav-group">
                <div className="footer-nav-label">Connect</div>
                <ul className="footer-nav-links">
                  <li>
                    <a
                      href="https://t.me/yuri_roc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-nav-link"
                    >
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/yur1-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-nav-link"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/yuri-esber-9422b1227/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-nav-link"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">
              © 2025 Yuri Esber. All rights reserved.
            </span>
            <span className="footer-handle">@yur1.dev</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
