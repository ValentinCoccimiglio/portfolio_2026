import Container from "@/components/ui/Conteiner";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    title: "Frontend Development",
    description:
      "Desarrollo aplicaciones modernas, escalables y enfocadas en ofrecer experiencias digitales de calidad.",
  },
  {
    title: "UI / UX",
    description:
      "Diseño interfaces intuitivas, armoniosas y centradas en la experiencia del usuario.",
  },
  {
    title: "Performance",
    description:
      "Optimizo el rendimiento, la accesibilidad y la fluidez para crear aplicaciones rápidas y eficientes.",
  },
  {
    title: "Clean Architecture",
    description:
      "Organizo cada proyecto con una arquitectura limpia, componentes reutilizables y código fácil de mantener.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-gradient section-about relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionTitle
          eyebrow="Acerca de mi"
          title={"Crear\nProductos\nCon propósito."}
          description="Creo que una buena aplicación no solo debe funcionar, sino también ofrecer una experiencia intuitiva, rápida y agradable."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              delay={index * 0.12}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
