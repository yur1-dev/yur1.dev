"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// ─── EMAILJS KEYS ────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_klgnlz5";
const EMAILJS_TEMPLATE_ID = "template_syz4b1l";
const EMAILJS_PUBLIC_KEY = "JbSfSkf1T_McKXr3M";
// ─────────────────────────────────────────────────────────────────────────────

// ─── RATE LIMIT CONFIG ───────────────────────────────────────────────────────
const RATE_LIMIT_MAX = 3; // max submissions
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes in ms
// ─────────────────────────────────────────────────────────────────────────────

// ─── INPUT LIMITS ────────────────────────────────────────────────────────────
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;
// ─────────────────────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error" | "rate_limited";

/** Strip HTML tags and dangerous characters from a string */
function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/[<>"'`]/g, "") // strip remaining dangerous chars
    .replace(/javascript:/gi, "") // strip js: protocol
    .replace(/on\w+\s*=/gi, "") // strip inline event attrs
    .trim();
}

/** Validate email format */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Simple in-memory rate limiter using localStorage timestamps */
function checkRateLimit(): { allowed: boolean; remaining: number } {
  try {
    const key = "contact_submissions";
    const now = Date.now();
    const raw = localStorage.getItem(key);
    const timestamps: number[] = raw ? JSON.parse(raw) : [];

    // Keep only timestamps within the window
    const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);

    if (recent.length >= RATE_LIMIT_MAX) {
      return { allowed: false, remaining: 0 };
    }

    recent.push(now);
    localStorage.setItem(key, JSON.stringify(recent));
    return { allowed: true, remaining: RATE_LIMIT_MAX - recent.length };
  } catch {
    // If localStorage isn't available, allow the request
    return { allowed: true, remaining: RATE_LIMIT_MAX };
  }
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    from_name: "",
    from_email: "",
    message: "",
    // Honeypot — hidden from real users, bots will fill this
    website: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // Enforce max lengths
    const limits: Record<string, number> = {
      from_name: MAX_NAME_LENGTH,
      from_email: MAX_EMAIL_LENGTH,
      message: MAX_MESSAGE_LENGTH,
    };

    if (limits[name] && value.length > limits[name]) return;

    setValues((v) => ({ ...v, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!values.from_name.trim()) {
      newErrors.from_name = "Name is required";
    } else if (values.from_name.trim().length < 2) {
      newErrors.from_name = "Name must be at least 2 characters";
    }

    if (!values.from_email.trim()) {
      newErrors.from_email = "Email is required";
    } else if (!isValidEmail(values.from_email)) {
      newErrors.from_email = "Enter a valid email address";
    }

    if (!values.message.trim()) {
      newErrors.message = "Message is required";
    } else if (values.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // ── Honeypot check ──────────────────────────────────────────────────────
    // If the hidden "website" field is filled, it's a bot — silently ignore
    if (values.website) {
      setStatus("success"); // fake success so bots don't know
      return;
    }

    // ── Validate ────────────────────────────────────────────────────────────
    if (!validate()) return;

    // ── Rate limit ──────────────────────────────────────────────────────────
    const { allowed } = checkRateLimit();
    if (!allowed) {
      setStatus("rate_limited");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    // ── Sanitize before sending ─────────────────────────────────────────────
    // We mutate the hidden inputs so emailjs picks up clean values
    const nameInput =
      formRef.current.querySelector<HTMLInputElement>('[name="from_name"]');
    const emailInput = formRef.current.querySelector<HTMLInputElement>(
      '[name="from_email"]',
    );
    const messageInput =
      formRef.current.querySelector<HTMLTextAreaElement>('[name="message"]');

    if (nameInput) nameInput.value = sanitize(values.from_name);
    if (emailInput) emailInput.value = sanitize(values.from_email);
    if (messageInput) messageInput.value = sanitize(values.message);

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setValues({ from_name: "", from_email: "", message: "", website: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const btnClass =
    status === "idle"
      ? "submit-btn submit-btn-idle"
      : status === "sending"
        ? "submit-btn submit-btn-sending"
        : status === "success"
          ? "submit-btn submit-btn-success"
          : status === "rate_limited"
            ? "submit-btn submit-btn-error"
            : "submit-btn submit-btn-error";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        .contact-root {
          max-width: 900px;
          margin: 0 auto;
          padding: 6rem 1.5rem;
          font-family: 'Syne', sans-serif;
          color: #fff;
        }

        .contact-label {
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

        .contact-label::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #a3e635;
        }

        .contact-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1;
          color: #fff;
          margin: 0 0 0.75rem;
        }

        .contact-title span {
          background: linear-gradient(135deg, #a3e635, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-sub {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.35);
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
        }

        .contact-info { display: flex; flex-direction: column; gap: 1rem; }

        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          border-radius: 0.875rem;
          border: 0.5px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          transition: all 0.2s ease;
        }

        .contact-info-card:hover {
          border-color: rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
        }

        .info-icon {
          width: 40px;
          height: 40px;
          border-radius: 0.625rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1rem;
        }

        .info-icon-tg { background: rgba(34, 158, 217, 0.12); }
        .info-icon-mail { background: rgba(163, 230, 53, 0.08); }
        .info-icon-loc { background: rgba(255, 255, 255, 0.05); }

        .info-card-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 0.15rem;
        }

        .info-card-value {
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
        }

        .contact-avail {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(163, 230, 53, 0.06);
          border: 0.5px solid rgba(163, 230, 53, 0.2);
          border-radius: 100px;
          padding: 0.5rem 1rem;
          margin-top: 0.5rem;
          width: fit-content;
        }

        .avail-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #a3e635;
          animation: availPulse 2s ease infinite;
        }

        @keyframes availPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(163,230,53,0.4); }
          50% { opacity: 0.7; box-shadow: 0 0 0 4px rgba(163,230,53,0); }
        }

        .avail-text {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a3e635;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Honeypot — visually hidden but accessible to bots */
        .hp-field {
          position: absolute;
          left: -9999px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          tabIndex: -1;
        }

        .field-wrap { position: relative; }

        .field-label {
          display: block;
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 0.5rem;
          transition: color 0.2s ease;
        }

        .field-label.focused { color: #a3e635; }
        .field-label.errored { color: #f87171; }

        .field-input,
        .field-textarea {
          width: 100%;
          background: rgba(255,255,255,0.02);
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 0.75rem;
          padding: 0.875rem 1rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.875rem;
          color: #fff;
          outline: none;
          transition: all 0.2s ease;
          box-sizing: border-box;
          resize: none;
        }

        .field-input::placeholder,
        .field-textarea::placeholder {
          color: rgba(255,255,255,0.15);
        }

        .field-input:focus,
        .field-textarea:focus {
          border-color: rgba(163, 230, 53, 0.35);
          background: rgba(163, 230, 53, 0.03);
          box-shadow: 0 0 0 3px rgba(163, 230, 53, 0.06);
        }

        .field-input.has-value,
        .field-textarea.has-value {
          border-color: rgba(255,255,255,0.12);
        }

        .field-input.has-error,
        .field-textarea.has-error {
          border-color: rgba(248, 113, 113, 0.4);
          background: rgba(248, 113, 113, 0.03);
        }

        .field-error {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: #f87171;
          margin-top: 0.35rem;
          letter-spacing: 0.05em;
        }

        .field-counter {
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          color: rgba(255,255,255,0.2);
          text-align: right;
          margin-top: 0.25rem;
        }

        .field-textarea { min-height: 130px; line-height: 1.6; }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          width: 100%;
          padding: 0.9rem 1.5rem;
          border: none;
          border-radius: 0.75rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .submit-btn-idle {
          background: linear-gradient(135deg, #a3e635, #22d3ee);
          color: #000;
        }

        .submit-btn-idle:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(163, 230, 53, 0.25);
        }

        .submit-btn-sending {
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.4);
          cursor: not-allowed;
        }

        .submit-btn-success {
          background: linear-gradient(135deg, rgba(163,230,53,0.15), rgba(34,211,238,0.1));
          border: 0.5px solid rgba(163,230,53,0.3);
          color: #a3e635;
          cursor: default;
        }

        .submit-btn-error {
          background: rgba(239, 68, 68, 0.1);
          border: 0.5px solid rgba(239, 68, 68, 0.3);
          color: #f87171;
          cursor: default;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.2);
          border-top-color: rgba(255,255,255,0.7);
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .contact-divider {
          margin-top: 5rem;
          height: 0.5px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
        }
      `}</style>

      <section className="contact-root" id="contact">
        <div className="contact-label">Get In Touch</div>
        <h2 className="contact-title">
          Let's <span>work together</span>
        </h2>
        <p className="contact-sub">
          Have a project in mind? Fill out the form and I'll get back to you
          within 24 hours.
        </p>

        <div className="contact-grid">
          {/* Left — contact info */}
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="info-icon info-icon-tg">💬</div>
              <div>
                <div className="info-card-label">Telegram</div>
                <div className="info-card-value">@yur1_dev</div>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon info-icon-mail">✉️</div>
              <div>
                <div className="info-card-label">Email</div>
                <div className="info-card-value">yuriesb01@gmail.com</div>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon info-icon-loc">📍</div>
              <div>
                <div className="info-card-label">Location</div>
                <div className="info-card-value">Nueva Ecija, Philippines</div>
              </div>
            </div>

            <div className="contact-avail">
              <span className="avail-dot" />
              <span className="avail-text">Available for projects</span>
            </div>
          </div>

          {/* Right — form */}
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            {/* ── Honeypot field — hidden from real users ─────────────────── */}
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={values.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* ── Name ──────────────────────────────────────────────────────── */}
            <div className="field-wrap">
              <label
                className={`field-label ${focused === "from_name" ? "focused" : ""} ${errors.from_name ? "errored" : ""}`}
              >
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Enter your name"
                value={values.from_name}
                onChange={handleChange}
                onFocus={() => setFocused("from_name")}
                onBlur={() => setFocused(null)}
                maxLength={MAX_NAME_LENGTH}
                className={`field-input ${values.from_name ? "has-value" : ""} ${errors.from_name ? "has-error" : ""}`}
              />
              {errors.from_name && (
                <div className="field-error">{errors.from_name}</div>
              )}
            </div>

            {/* ── Email ─────────────────────────────────────────────────────── */}
            <div className="field-wrap">
              <label
                className={`field-label ${focused === "from_email" ? "focused" : ""} ${errors.from_email ? "errored" : ""}`}
              >
                Email Address
              </label>
              <input
                type="email"
                name="from_email"
                required
                placeholder="Enter your email"
                value={values.from_email}
                onChange={handleChange}
                onFocus={() => setFocused("from_email")}
                onBlur={() => setFocused(null)}
                maxLength={MAX_EMAIL_LENGTH}
                className={`field-input ${values.from_email ? "has-value" : ""} ${errors.from_email ? "has-error" : ""}`}
              />
              {errors.from_email && (
                <div className="field-error">{errors.from_email}</div>
              )}
            </div>

            {/* ── Message ───────────────────────────────────────────────────── */}
            <div className="field-wrap">
              <label
                className={`field-label ${focused === "message" ? "focused" : ""} ${errors.message ? "errored" : ""}`}
              >
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Tell me about your project..."
                value={values.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                maxLength={MAX_MESSAGE_LENGTH}
                className={`field-textarea ${values.message ? "has-value" : ""} ${errors.message ? "has-error" : ""}`}
              />
              <div className="field-counter">
                {values.message.length} / {MAX_MESSAGE_LENGTH}
              </div>
              {errors.message && (
                <div className="field-error">{errors.message}</div>
              )}
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className={btnClass}
            >
              {status === "idle" && (
                <>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                  Send Message
                </>
              )}
              {status === "sending" && (
                <>
                  <div className="spinner" />
                  Sending...
                </>
              )}
              {status === "success" && <>✓ Message Sent — I'll reply soon!</>}
              {status === "rate_limited" && (
                <>⚠ Too many attempts — wait 10 min</>
              )}
              {status === "error" && <>✕ Something went wrong — try again</>}
            </button>
          </form>
        </div>

        <div className="contact-divider" />
      </section>
    </>
  );
};

export default Contact;
