import Container from "@/components/ui/Conteiner";
import ProjectShowcase from "../ui/ProjectShowcase";
import { projects } from "@/data/projects";


export default function Projects() {
  return (
    <section
      id="projects"
      className="section-gradient section-projects relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <Container maxWidth="max-w-[1600px]">
        <div className="space-y-20">
          {projects.map((project) => (
            <ProjectShowcase key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
