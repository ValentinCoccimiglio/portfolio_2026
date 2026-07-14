"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { Project } from "@/types/project";

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      {/* Header */}

      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-500">
          {project.title}
        </p>

        <h3 className="mt-4 text-5xl font-bold tracking-tight">
          {project.subtitle}
        </h3>

        <p className="mt-6 text-xl leading-9 text-zinc-400">
          {project.description}
        </p>

        <p className="mt-8 text-zinc-500">
          {project.technologies.join(" · ")}
        </p>

        <div className="mt-10 flex gap-8">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-white transition hover:text-blue-500"
          >
            Ver proyecto →
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-zinc-500 transition hover:text-white"
          >
            Ver código
          </a>
        </div>
      </div>

      {/* Image */}

      <motion.div
        whileHover={{
          scale: 1.01,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
        overflow-hidden
       rounded-3xl
        border
        border-white/10
        "
      >
        <Image
          src={project.image}
          alt={project.title}
          width={1800}
          height={1100}
          className="
          w-full
          transition-transform
          duration-500
          "
        />
      </motion.div>
    </motion.article>
  );
}
