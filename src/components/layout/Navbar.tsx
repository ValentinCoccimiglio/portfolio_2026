"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Container from "@/components/ui/Conteiner";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`
fixed top-0 z-50 w-full
transition-all duration-300
${
  scrolled
    ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
    : "bg-transparent"
}
`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight transition hover:text-blue-400"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              VALENTÍN.
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/"
              target="_blank"
              className="text-zinc-400 transition hover:text-white"
            >
              <FaGithub size={20} />
            </Link>

            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="text-zinc-400 transition hover:text-white"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
