import {
  FaGithub,
  FaLinkedin,
  // FaInstagram,
  // FaFacebook,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Social() {
  return (
    <div className="flex justify-center space-x-4">
      {[
        { href: "https://github.com/Rii1126", Icon: FaGithub },
        { href: "https://t.me/zeyubh", Icon: FaTelegramPlane },
        {
          href: "https://www.linkedin.com/in/marc-yuri-esber-9422b1227/",
          Icon: FaLinkedin,
        },
        // { href: "https://www.instagram.com/yourprofile", Icon: FaInstagram },
        // { href: "https://www.facebook.com/yourprofile", Icon: FaFacebook },
        // { href: "https://t.me/yourprofile", Icon: FaTelegramPlane },
      ].map(({ href, Icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-white border rounded p-1 group overflow-hidden"
        >
          <Icon size={30} />
          <span className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.4)] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transform skew-x-[-30deg]"></span>
        </a>
      ))}
    </div>
  );
}
