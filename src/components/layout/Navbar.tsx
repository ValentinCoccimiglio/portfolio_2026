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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
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
        <div className="relative flex h-20 items-center justify-between gap-4">
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

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-5 md:flex">
              <Link
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 transition hover:text-white"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 transition hover:text-white"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:border-white/20 hover:text-white md:hidden"
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </svg>
              )}
            </button>
          </div>

          <div
            className={`absolute inset-x-0 top-full z-40 overflow-hidden rounded-b-3xl border border-white/10 bg-zinc-950/95 px-6 pb-6 pt-4 backdrop-blur-xl shadow-2xl transition-all duration-300 md:hidden ${
              menuOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-zinc-200 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-5 flex items-center gap-5">
              <Link
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 transition hover:text-white"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 transition hover:text-white"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
