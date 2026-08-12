import type { Metadata } from "next";
import { AiOutlineDownload as DownloadIcon } from "react-icons/ai";

import AudioButton from "@/components/AudioButton";
import ButtonLink from "@/components/ButtonLink";
import Section from "@/components/Section";
import { getJobs, getSchooling, getSkills } from "@/lib/data";
import IconLink from "@/components/IconLink";
import InfoCard from "@/components/InfoCard";

export const metadata: Metadata = {
  title: "Todd Goates | About",
  description: "All about Todd Goates: Skills, Work Experience, and Education",
};

export default function AboutPage() {
  const skills = getSkills();
  const jobs = getJobs();
  const schooling = getSchooling();

  return (
    <>
      <Section>
        <>
          <h2 className="mb-8 text-5xl font-black sm:hidden dark:text-white">
            All about me
          </h2>
          <div className="flex flex-col md:flex-row md:gap-8">
            <div className="mx-auto text-center">
              <img
                src="images/portrait.jpg"
                alt="A professional headshot of Todd Goates: a dark-haired, caucasian male in his early thirties"
                className="mb-8 h-auto w-full max-w-72 -rotate-2 rounded-4xl border border-purple-100 bg-white p-2 shadow-[0_24px_60px_-24px_rgba(88,28,135,.5)] transition-transform duration-300 hover:rotate-0 md:mr-10 dark:border-white/10 dark:bg-white/5"
              />
            </div>
            <div>
              <h2 className="mb-3 hidden text-sm font-bold tracking-[0.2em] text-purple-600 uppercase sm:block dark:text-purple-300">
                A little background
              </h2>
              <h2 className="mb-8 hidden text-5xl font-black sm:block">
                All about me<span className="text-orange-500">.</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed">
                Hey, I'm Todd Goates
                <AudioButton
                  src="audio/goat.mp3"
                  description="How to pronounce my last name"
                />
              </p>
              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Thanks for stopping by! I'm a Full-Stack Developer, artist,
                wanna-be writer, outdoor enthusiast, lover of synths, and most
                importantly, a husband and father. I am passionate about
                programming and keeping up with the latest technology.
              </p>
              <p className="mb-12 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Interested in working together? Check out some of the work I've
                done.
              </p>
              <div className="clear-both"></div>
              <ButtonLink href="/projects" prefetch>
                View Projects
              </ButtonLink>
            </div>
          </div>
        </>
      </Section>

      <Section
        background="bg-linear-to-br from-purple-700 via-purple-600 to-fuchsia-600"
        color="text-white"
      >
        <>
          <h3 className="mb-10 text-center text-4xl font-black sm:text-5xl">
            I like working with
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {skills.map((skill) => (
              <li
                className="rounded-2xl border border-white/20 bg-white/90 p-4 text-center text-lg font-bold text-purple-950 shadow-lg transition duration-300 hover:-translate-y-1 hover:rotate-1 dark:bg-white/10 dark:text-white"
                key={skill.text}
              >
                {skill.text}
              </li>
            ))}
          </ul>
        </>
      </Section>

      <Section background="bg-purple-50/70">
        <>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-8 text-center text-3xl font-black">
                Places I’ve worked
              </h3>
              <ul className="mb-8">
                {jobs.map((job) => (
                  <InfoCard
                    key={job.id}
                    title={job.company}
                    subtitle={job.title}
                    image={job.logo}
                    imageInvertable={job.imageInvertable}
                    dates={job.years}
                    link={job.website}
                  />
                ))}
              </ul>
              <p className="mb-8 flex flex-col items-center sm:flex-row">
                Want to learn more about my work?
                <IconLink
                  href="/files/TMG-2025.pdf"
                  download="Todd-Goates-Resume"
                >
                  <DownloadIcon />
                  Download my resume
                </IconLink>
              </p>
            </div>
            <div>
              <h3 className="mb-8 text-center text-3xl font-black">
                Education
              </h3>
              <ul className="mb-8">
                {schooling.map((school) => (
                  <InfoCard
                    key={school.id}
                    title={school.name}
                    subtitle={school.degree}
                    image={school.logo}
                    dates={school.years}
                    link={school.website}
                  />
                ))}
              </ul>
            </div>
          </div>
        </>
      </Section>
    </>
  );
}
