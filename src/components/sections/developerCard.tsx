"use client";

import { motion } from "framer-motion";
import type { Technology } from "@/types/technology";

interface DeveloperCardProps {
  technologies: Technology[];
}

export default function DeveloperCard({ technologies }: DeveloperCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -8, 0],
      }}
      transition={{
        duration: 0.8,
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-4 text-sm text-zinc-500">developer.ts</span>
      </div>

      <div className="space-y-4 p-8 font-mono text-sm text-zinc-200">
        <div className="text-cyan-400">const developer = {'{'}</div>
        <div className="pl-6 text-zinc-300">
          name: <span className="text-emerald-400">"Valentín Coccimiglio"</span>,
        </div>
        <div className="pl-6 text-zinc-300">
          role: <span className="text-amber-400">"Frontend Developer"</span>,
        </div>
        <div className="pl-6 text-zinc-300">
          location: <span className="text-sky-400">"Buenos Aires, AR"</span>,
        </div>
        <div className="pl-6 text-zinc-300">
          passion: <span className="text-fuchsia-400">"UI & UX"</span>,
        </div>
        <div className="pl-6 text-zinc-300">
          status: <span className="text-lime-400">"Open to work"</span>,
        </div>
        <div className="text-cyan-400">{'}'}</div>
      </div>
    </motion.div>
  );
}
