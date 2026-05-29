"use client";

import { useState } from "react";

const sections = [
  {
    id: "intro",
    label: "01 · INTRO",
    color: "#a3e635",
    content: {
      title: "Who You Are",
      blocks: [
        {
          heading: "Your One-Liner",
          body: `"I'm Yuri, a fullstack web developer based in Nueva Ecija. I build websites and web apps for local businesses that help them get found on Google and turn visitors into customers."`,
        },
        {
          heading: "Your Stack (what you offer)",
          list: [
            "Business websites (Next.js — fast, modern, mobile-first)",
            "E-commerce stores (online ordering, product catalog)",
            "Web applications (booking systems, dashboards, portals)",
            "Google SEO setup (show up when customers search)",
            "Google Maps listing (Google Business Profile)",
            "Analytics setup (track visitors, see what's working)",
            "Mobile apps (React Native / Expo)",
          ],
        },
        {
          heading: "Why Work With You",
          list: [
            "Local — based in Nueva Ecija, not disappearing after the project",
            "Full package — website + SEO + Google Maps, not just a pretty site",
            "You stay — monthly support and monitoring available",
            "You speak their language — no tech jargon, just results",
          ],
        },
        {
          heading: "Your Portfolio",
          body: "yur1-dev.vercel.app",
        },
      ],
    },
  },
  {
    id: "pitch",
    label: "02 · PITCH SCRIPT",
    color: "#38bdf8",
    content: {
      title: "The Full Pitch Flow",
      blocks: [
        {
          heading: "Opening Message (cold DM / Facebook)",
          body: `"Hi! I came across [Business Name] and I really like what you've got going. I noticed you don't have a website yet — when people search for [their service] in [city] on Google, you're not showing up but your competitors might be. I build professional websites for local businesses that help them get found and attract more customers. Would you be open to a quick chat? I can even show you a free mockup of what your site could look like."`,
        },
        {
          heading: "If they say: 'I have Facebook already'",
          body: `"Facebook is great for people who already know you. Google reaches people actively searching for your service right now — ready to buy. Those customers are going to your competitors because they have a website and you don't."`,
        },
        {
          heading: "If they say: 'How much?'",
          body: `"It depends on what you need — let me ask you a few quick questions so I can give you an accurate quote. It won't take long."`,
        },
        {
          heading: "If they say: 'I'll think about it'",
          body: `"Of course. While you think about it — [pull up Google, search their service + city, show them competitors ranking]. Let me show you something real quick."`,
        },
        {
          heading: "If they say: 'Someone else can do it cheaper'",
          body: `"Cheaper is fine if all you want is a website. What I build comes with SEO setup, Google Maps listing, and analytics so you can actually see results. Most developers hand you a site and disappear. I make sure it brings you customers."`,
        },
        {
          heading: "If they say: 'Why should I trust you?'",
          body: `"Fair question. I'm local — based right here in Nueva Ecija. I'm not some agency in Manila. I set up everything: website, Google listing, tracking — and I show you the results every month. You'll always know exactly what's happening."`,
        },
        {
          heading: "When they say YES",
          body: `"Great. I'll send you a proposal today with the full scope, timeline, and price. I collect 50% upfront to start and 50% on launch. Sound good?"`,
        },
        {
          heading: "Golden Rule",
          body: `❌ Never say: "Next.js, SEO, metadata, schema markup"\n✅ Always say: "When someone searches for you on Google, they'll find you instead of your competitor."\n\nTalk about CUSTOMERS, MONEY, and COMPETITORS. That's all they care about.`,
        },
      ],
    },
  },
  {
    id: "services",
    label: "03 · SERVICES",
    color: "#f59e0b",
    content: {
      title: "What You Offer",
      blocks: [
        {
          heading: "Service 1 — Business Website",
          body: "A professional website that represents your business online. Shows up on Google, works on mobile, answers customer questions 24/7.",
          list: [
            "Homepage, About, Services, Contact pages",
            "Mobile-first design",
            "Fast loading speed",
            "Contact form / inquiry form",
          ],
        },
        {
          heading: "Service 2 — SEO Setup",
          body: "Make your website show up when people search for your service on Google.",
          list: [
            "Google-friendly page titles and descriptions",
            "Location keywords (so local customers find you)",
            "Sitemap and indexing setup",
            "Structured data (tells Google exactly what your business is)",
          ],
        },
        {
          heading: "Service 3 — Google Business Profile",
          body: "Get your business on Google Maps. Show up in the local results with your address, phone, photos, and reviews.",
          list: [
            "Create and verify your GBP listing",
            "Add photos, services, hours, description",
            "Optimize for local search",
            "Guide you on getting reviews (biggest ranking factor)",
          ],
        },
        {
          heading: "Service 4 — Web Application / System",
          body: "A full platform with multiple user roles — owner dashboard, customer portal, staff management.",
          list: [
            "Online ordering / booking system",
            "Admin panel with analytics",
            "Customer accounts",
            "Notifications (email/SMS)",
            "Payment integration",
          ],
        },
        {
          heading: "Service 5 — Monthly Maintenance",
          body: "Ongoing support — monitor performance, fix issues, update content, send monthly reports.",
          list: [
            "Monthly analytics report",
            "Google Search Console monitoring",
            "Content updates",
            "Speed and security checks",
          ],
        },
        {
          heading: "Service 6 — Mobile App",
          body: "iOS and Android app for your business using React Native.",
          list: [
            "Customer-facing app",
            "Push notifications",
            "Synced with your website/database",
          ],
        },
      ],
    },
  },
  {
    id: "pricing",
    label: "04 · PRICING",
    color: "#c084fc",
    content: {
      title: "Pricing Tiers",
      blocks: [
        {
          heading:
            "Tier 1 — Small Business (sari-sari, solo freelancer, startup)",
          table: [
            ["Service", "Price"],
            ["Basic website (4–5 pages)", "₱8,000 – ₱15,000"],
            ["On-page SEO setup", "₱3,000 – ₱5,000"],
            ["Google Business Profile", "₱1,500 – ₱2,500"],
            ["Full bundle", "₱15,000 – ₱20,000"],
            ["Monthly retainer", "₱1,500 – ₱3,000/mo"],
          ],
        },
        {
          heading:
            "Tier 2 — Established Business (dental, law, restaurant, school)",
          table: [
            ["Service", "Price"],
            ["Website (6–10 pages)", "₱20,000 – ₱40,000"],
            ["On-page SEO", "₱5,000 – ₱10,000"],
            ["GBP setup + optimization", "₱3,000 – ₱5,000"],
            ["Full bundle", "₱30,000 – ₱50,000"],
            ["Monthly retainer", "₱3,000 – ₱8,000/mo"],
          ],
        },
        {
          heading:
            "Tier 3 — Large / Multi-branch (hospital, hotel, real estate, corp)",
          table: [
            ["Service", "Price"],
            ["Website (10+ pages, custom)", "₱60,000 – ₱150,000+"],
            ["Full SEO strategy", "₱15,000 – ₱30,000"],
            ["GBP multi-location", "₱8,000 – ₱15,000"],
            ["Full bundle", "₱80,000 – ₱200,000+"],
            ["Monthly retainer", "₱10,000 – ₱25,000/mo"],
          ],
        },
        {
          heading: "How to Identify the Tier",
          list: [
            "Solo / home-based / startup → Tier 1",
            "Physical storefront, 5–20 staff → Tier 2",
            "Multiple branches, 20+ staff, high-value industry → Tier 3",
            "Running Facebook Ads already? → They have budget, go higher",
            "Lawyers, doctors, real estate? → Their one client = big money. Charge more.",
          ],
        },
        {
          heading: "Golden Pricing Rules",
          list: [
            "Never quote immediately — ask questions first",
            "Charge based on value to them, not hours for you",
            "50% upfront, 50% on launch — always",
            "A dental clinic getting 5 new patients/month from your site = ₱50,000+ revenue for them. ₱15,000 is cheap.",
            "Raise prices after every 2–3 clients",
          ],
        },
      ],
    },
  },
  {
    id: "discovery",
    label: "05 · DISCOVERY",
    color: "#fb7185",
    content: {
      title: "Questions to Ask Before Quoting",
      blocks: [
        {
          heading: "About the Business",
          list: [
            "What does your business do exactly?",
            "How long have you been operating?",
            "Where are your customers located?",
            "How do customers currently find you?",
          ],
        },
        {
          heading: "About the Project",
          list: [
            "Do you have an existing website? (if yes — what's wrong with it?)",
            "Do you have a Google Maps listing already?",
            "What pages do you need? (Home, Services, Contact, About, Blog, Store…)",
            "Do you have a logo and brand colors?",
            "Do you have photos ready or do you need a photographer?",
            "Do you need any special features? (online booking, payment, ordering, login)",
          ],
        },
        {
          heading: "About Users (if they want a system)",
          list: [
            "Who are the users? (owner, staff, customers)",
            "What should the owner be able to do?",
            "What should staff be able to do?",
            "What should customers be able to do?",
            "Do you need SMS or email notifications?",
            "Do you need payment integration?",
          ],
        },
        {
          heading: "About Timeline and Budget",
          list: [
            "When do you need this done?",
            "Do you have a budget in mind?",
            "Have you gotten quotes from others?",
          ],
        },
        {
          heading: "Red Flags to Watch For",
          list: [
            "🚩 'I need it done in 1 week' — unrealistic timeline, set expectations early",
            "🚩 'Make it like [big company website]' — scope creep, clarify what features specifically",
            "🚩 'We'll pay after it's done' — never. 50% upfront always.",
            "🚩 'My nephew can do it for free' — let them. You're offering a professional service.",
            "🚩 Keeps changing requirements — charge for revisions beyond 2 rounds",
          ],
        },
      ],
    },
  },
];

export default function App() {
  const [active, setActive] = useState("intro");
  const section = sections.find((s) => s.id === active)!;

  return (
    <div
      style={{
        background: "#0a0a0f",
        minHeight: "100vh",
        fontFamily: "monospace",
        color: "#e2e8f0",
      }}
    >
      {/* Nav */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          padding: "16px 16px 0",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            style={{
              background: active === s.id ? s.color : "#1a1a2e",
              color: active === s.id ? "#0a0a0f" : s.color,
              border: `1px solid ${s.color}`,
              padding: "6px 14px",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1,
              transition: "all 0.15s",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: 16, maxWidth: 780 }}>
        <div
          style={{
            borderBottom: `2px solid ${section.color}`,
            marginBottom: 20,
            paddingBottom: 8,
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: section.color,
              letterSpacing: 2,
              marginBottom: 4,
            }}
          >
            SECTION {sections.findIndex((s) => s.id === active) + 1} OF{" "}
            {sections.length}
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>
            {section.content.title}
          </div>
        </div>

        {section.content.blocks.map((block, i) => (
          <div
            key={i}
            style={{
              marginBottom: 24,
              background: "#111122",
              border: "1px solid #1e1e3a",
              borderRadius: 6,
              padding: 16,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: section.color,
                letterSpacing: 1,
                marginBottom: 10,
                textTransform: "uppercase",
              }}
            >
              {block.heading}
            </div>

            {"body" in block && block.body && (
              <div
                style={{
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "#cbd5e1",
                  whiteSpace: "pre-line",
                  background: "#0d0d1a",
                  padding: 12,
                  borderRadius: 4,
                  borderLeft: `3px solid ${section.color}`,
                }}
              >
                {block.body}
              </div>
            )}

            {"list" in block && block.list && (
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {block.list.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 13,
                      color: "#cbd5e1",
                      padding: "5px 0",
                      borderBottom: "1px solid #1a1a2e",
                      display: "flex",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: section.color, flexShrink: 0 }}>
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {"table" in block && block.table && (
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 13,
                }}
              >
                <tbody>
                  {block.table.map((row, j) => (
                    <tr
                      key={j}
                      style={{
                        background:
                          j === 0
                            ? "#0d0d1a"
                            : j % 2 === 0
                              ? "#0f0f1e"
                              : "transparent",
                      }}
                    >
                      {row.map((cell, k) => (
                        <td
                          key={k}
                          style={{
                            padding: "8px 10px",
                            color: j === 0 ? section.color : "#cbd5e1",
                            fontWeight: j === 0 ? 700 : 400,
                            borderBottom: "1px solid #1a1a2e",
                            fontSize: j === 0 ? 11 : 13,
                            letterSpacing: j === 0 ? 1 : 0,
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
