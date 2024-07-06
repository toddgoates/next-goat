import { Job, Schooling, Skill, Word } from "./types";

export function getWords(): Array<Word> {
  return [
    {
      id: "webdev",
      description: "Web Developer",
    },
    {
      id: "webmaster",
      description: "Web Master",
    },
    {
      id: "codewriter",
      description: "Code Writer",
    },
    {
      id: "dbguru",
      description: "Database Guru",
    },
    {
      id: "fullstackdev",
      description: "Full-Stack Developer",
    },
    {
      id: "softwareeng",
      description: "Software Engineer",
    },
    {
      id: "10x",
      description: "10X Developer",
    },
    {
      id: "cloudguy",
      description: "Cloud Enthusiast",
    },
    {
      id: "catwhisper",
      description: "Cat Whisperer",
    },
    {
      id: "familyman",
      description: "Husband and Father",
    },
    {
      id: "goose",
      description: "Silly Goose",
    },
    {
      id: "programmer",
      description: "Programmer",
    },
    {
      id: "webdev2",
      description: "Web Developer",
    },
  ];
}

export function getSkills(): Array<Skill> {
  return [
    {
      text: "HTML",
    },
    {
      text: "CSS",
    },
    {
      text: "Tailwind CSS",
    },
    {
      text: "JavaScript",
    },
    {
      text: "TypeScript",
    },
    {
      text: "NodeJS",
    },
    {
      text: "React",
    },
    {
      text: "Svelte",
    },
    {
      text: "Vue",
    },
    {
      text: "PHP",
    },
    {
      text: "Laravel",
    },
    {
      text: "MySQL",
    },
    {
      text: "AWS",
    },
    {
      text: "Docker",
    },
    {
      text: "PHPUnit",
    },
    {
      text: "Pest",
    },
    {
      text: "Redis",
    },
    {
      text: "VS Code",
    },
    {
      text: "GitHub",
    },
    {
      text: "You",
    },
  ];
}

export function getJobs(): Array<Job> {
  return [
    {
      id: 1,
      company: "Strumn",
      title: "Chief Technology Officer",
      years: "Jan 2021 - Now",
      logo: "strumn-logo.svg",
      website: "https://strumn.com",
    },
    {
      id: 2,
      company: "Q90 Corporation",
      title: "VP of Development",
      years: "Dec 2019 - Now",
      logo: "q90-logo.svg",
      website: "https://www.q90.com",
    },
    {
      id: 3,
      company: "Q90 Corporation",
      title: "Software Engineer",
      years: "May 2014 - Dec 2019",
      logo: "q90-logo.svg",
      website: "https://www.q90.com",
    },
    {
      id: 4,
      company: "A Child's Hope Foundation",
      title: "Web Developer Volunteer",
      years: "2013",
      logo: "achf-logo.png",
      website: "https://achildshopefoundation.org",
    },
  ];
}

export function getSchooling(): Array<Schooling> {
  return [
    {
      id: 1,
      name: "Utah Valley University",
      degree: "Digital Media - Internet Technologies",
      years: "2007 - 2013",
      logo: "uvu-logo.svg",
      website: "https://www.uvu.edu",
    },
  ];
}
