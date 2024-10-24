import type { Metadata } from "next";

import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { getProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Todd Goates | Projects",
  description:
    "Some of the different web projects that Todd Goates has worked on",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <Section>
        <>
          <h2 className="mb-12 text-center text-4xl">My work</h2>
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
