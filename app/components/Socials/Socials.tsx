import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

export default function Socials() {
  const links = [
    { href: "https://github.com/yur1-dev", Icon: FaGithub, label: "GitHub" },
    { href: "https://t.me/yuri_roc", Icon: FaTelegramPlane, label: "Telegram" },
    {
      href: "https://www.linkedin.com/in/yuri-esber-9422b1227/",
      Icon: FaLinkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <style>{`
        .socials-wrap {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 0.6rem;
          border: 0.5px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.03);
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(163,230,53,0.1), rgba(34,211,238,0.1));
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .social-link:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }

        .social-link:hover::before { opacity: 1; }
      `}</style>

      <div className="socials-wrap">
        {links.map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={label}
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </>
  );
}
