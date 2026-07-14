"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4}}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
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
      hover:-translate-y-1
      "
    >
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>

      <p className="text-zinc-400">{description}</p>
    </motion.div>
  );
}
