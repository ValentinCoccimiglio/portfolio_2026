"use client";

import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  delay?: number;
}

export default function ExperienceCard({
  company,
  role,
  period,
  description,
  delay = 0,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4 }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-zinc-900/60
        p-6
        transition-all
        duration-300
        hover:border-white/20
        hover:bg-white/[0.03]
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{role}</h3>

          <p className="mt-1 text-zinc-400">
            {company}
          </p>
        </div>

        <span className="text-sm text-zinc-500 whitespace-nowrap">
          {period}
        </span>
      </div>

      <p className="mt-6 leading-7 text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}