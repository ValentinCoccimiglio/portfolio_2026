import Container from "@/components/ui/Conteiner";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillGroup from "@/components/ui/SkillGroup";

import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32">
      <Container>

        <SectionTitle
          eyebrow="Skills"
          title="Mi stack de trabajo."
          description="Las tecnologías y herramientas que utilizo para desarrollar interfaces modernas."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillGroup
              key={category.title}
              category={category}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}