import { FaExternalLinkAlt as LinkIcon } from "react-icons/fa";

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
      className="group rounded-4xl border border-purple-100 bg-white/80 p-5 shadow-[0_20px_60px_-30px_rgba(88,28,135,.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-[0_28px_70px_-28px_rgba(88,28,135,.45)] sm:p-8 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
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
            className={`h-full w-full rounded-2xl border border-slate-200 object-cover shadow-md transition-transform duration-500 group-hover:scale-[1.015] md:w-1/2 lg:w-1/3 xl:w-2/5 dark:border-white/10 ${
              reverse ? "md:order-last" : "md:order-first"
            }`}
          />
        </a>
        <div className="grow">
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-extrabold sm:text-3xl">
              {project.name}
            </h3>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="flex gap-4">
              <ButtonLink
                href={project.link}
                buttonClass="flex gap-2 items-center"
                external
              >
                Visit Site <LinkIcon className="size-4" />
              </ButtonLink>
              {project?.repoLink ? (
                <ButtonLink
                  href={project.repoLink}
                  buttonClass="flex gap-2 items-center"
                  outlined
                  external
                >
                  View Code <LinkIcon className="size-4" />
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
