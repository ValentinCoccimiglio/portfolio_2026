"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types/project";
import Badge from "./Badge";
import Button from "./Button";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-zinc-900/60
      backdrop-blur-xl
      "
    >
      <div className="flex flex-col">
        {/* LEFT */}

        <div className="p-10">
          <span className="text-sm uppercase tracking-[0.3em] text-blue-500">
            Trabajos
          </span>

          <h3 className="mt-4 text-4xl font-bold">{project.title}</h3>

          <p className="mt-2 text-xl text-zinc-400">{project.subtitle}</p>

          <p className="mt-8 leading-8 text-zinc-400">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} text={tech} />
            ))}
          </div>

          <div className="mt-10 flex gap-4">
            <Button>Live Demo</Button>

            <Button>GitHub</Button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="px-10 pb-10">
          <div
            className="
    relative
    w-full
    overflow-hidden
    rounded-2xl
    border
    border-white/10
    shadow-2xl
    aspect-[16/10]
  "
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-all duration-500 hover:scale-[1.02]"/>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
