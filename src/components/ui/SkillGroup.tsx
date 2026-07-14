import type { SkillCategory } from "@/types/skill";

interface SkillGroupProps {
  category: SkillCategory;
}

export default function SkillGroup({ category }: SkillGroupProps) {
  return (
    <div className="min-h-[220px] rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{category.title}</p>
      <div className="mt-4 flex flex-col gap-2">
        {category.skills.map((skill) => (
          <span key={skill} className="text-lg leading-7">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
