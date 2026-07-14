import Container from "@/components/ui/Conteiner";
import ProjectShowcase from "../ui/ProjectShowcase";
import { projects } from "@/data/projects";


export default function Projects() {
  return (
    <section
      id="projects"
      className="section-gradient section-projects relative overflow-hidden py-32"
    >
      <Container maxWidth="max-w-[1600px]">


        {projects.map((project) => (
          <ProjectShowcase key={project.title} project={project} />
        ))}
      </Container>
    </section>
  );
}
