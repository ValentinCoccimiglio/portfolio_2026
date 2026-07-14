"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import DeveloperCard from "./developerCard";
import { technologies } from "@/data/technologies";

export default function Hero() {
  return (
    <section className="section-gradient section-hero relative flex min-h-screen items-center overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="aurora-background" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-6">
        <div className="grid items-center gap-24 lg:gap-40 lg:grid-cols-[1.15fr_0.85fr]">
          {" "}
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge text="Frontend Developer" />

            <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Creando
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Experiencias
              </span>
              <br />
              Digitales
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
              Desarrollo interfaces modernas, rápidas y escalables con React, Next.js y TypeScript, priorizando una experiencia de usuario excepcional.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#projects"
                className="group inline-flex items-center text-base font-medium text-white/90 transition hover:text-cyan-300"
              >
                Ver proyectos
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/Valentin_Coccimiglio.pdf"
                download
                className="group inline-flex items-center text-base font-medium text-zinc-300 transition hover:text-white"
              >
                Descargar CV
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>
          {/* RIGHT */}
          <div className="mt-10 lg:mt-20">
            <DeveloperCard technologies={technologies} />
          </div>
        </div>
      </div>
    </section>
  );
}
