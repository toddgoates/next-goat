export interface Word {
  id: string;
  description: string;
}

export interface Skill {
  text: string;
}

export interface Job {
  id: number;
  company: string;
  title: string;
  years: string;
  logo: string;
  website: string;
}

export interface Schooling {
  id: number;
  name: string;
  degree: string;
  years: string;
  logo: string;
  website: string;
}

export interface Project {
  name: string;
  description: string;
  link: string;
  repoLink?: string;
  image: string;
  tech: Array<string>;
}
