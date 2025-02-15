import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

export default function Social() {
  return (
    <div className="flex justify-center space-x-4">
      {[
        { href: "https://github.com/yur1-dev", Icon: FaGithub },
        {
          href: "https://www.behance.net/marcyuriesber",
          Icon: FaBehance,
        },
        {
          href: "https://www.linkedin.com/in/yuri-esber-9422b1227/",
          Icon: FaLinkedin,
        },
      ].map(({ href, Icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-white border rounded p-1 group overflow-hidden transition-all transform hover:scale-105"
        >
          <Icon size={30} />
          <span className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.4)] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></span>
        </a>
      ))}
    </div>
  );
}
