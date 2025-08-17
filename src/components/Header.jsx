import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/70 ">
      <nav className="container-lg flex items-center justify-between py-3">
        <a href="#" className="font-bold tracking-tight text-xl">Portfolio</a>
        <ul className="hidden md:flex items-center gap-6 text-bold">
          {links.map((l) => (
            <li key={l.href}>
              <a className="text-slate-600 hover:text-brand" href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a aria-label="GitHub" href="https://github.com/roshani-gaund" className="btn-outline"><FaGithub/></a>
          <a aria-label="LinkedIn" href="https://linkedin.com/in/roshani-gaund-0a8152306" className="btn-outline"><FaLinkedin/></a>
         
        </div>
      </nav>
    </header>
  );
}
