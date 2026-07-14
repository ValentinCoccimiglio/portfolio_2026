import Container from "@/components/ui/Conteiner";
import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-gradient relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionTitle
          eyebrow="EXPERIENCIA"
          title="Mi recorrido."
          description="Proyectos, aprendizaje continuo y experiencia construyendo aplicaciones modernas."
        />

        <div className="mt-16 space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company + experience.role}
              company={experience.company}
              role={experience.role}
              period={experience.period}
              description={experience.description}
              delay={index * 0.12}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}