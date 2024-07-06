import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { getProjects } from "@/lib/data";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <Section>
        <>
          <h2 className="mb-12 text-4xl text-center">My work</h2>
          <div className="grid gap-12">
            {projects.map((project, index: number) => (
              <ProjectCard
                key={project.name}
                project={project}
                reverse={index % 2 === 0}
              />
            ))}
          </div>
        </>
      </Section>
    </>
  );
}
