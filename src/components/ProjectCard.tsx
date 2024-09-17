import ButtonLink from "./ButtonLink";
import Badge from "./Badge";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
  reverse: boolean;
};

export default function ProjectCard({
  project,
  reverse = false,
}: ProjectCardProps) {
  return (
    <div
      key={project.name}
      className="bg-white p-6 rounded shadow-lg dark:bg-slate-800 dark:text-gray-50"
    >
      <div className="flex flex-col gap-8 md:flex-row">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="contents"
        >
          <img
            src={`images/${project.image}`}
            alt={`Screenshot of ${project.name}`}
            className={`w-full h-full md:w-1/2 lg:w-1/3 xl:w-1/4 ${
              reverse ? "md:order-last" : "md:order-first"
            }`}
          />
        </a>
        <div className="grow">
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-lg">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="flex gap-4">
              <ButtonLink href={project.link} external>
                Visit Site
              </ButtonLink>
              {project?.repoLink ? (
                <ButtonLink href={project.repoLink} outlined external>
                  View Code
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
