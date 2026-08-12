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
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-purple-600 uppercase dark:text-purple-300">
              A few projects
            </p>
            <h2 className="text-5xl font-black text-balance sm:text-6xl">
              Things I’ve helped bring to life.
            </h2>
          </div>
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
