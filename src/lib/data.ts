import { Job, Project, Schooling, Skill, Word } from "./types";

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
      text: "You!",
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

export function getProjects(): Array<Project> {
  return [
    {
      name: "Utah Tech Work",
      description:
        "This is a job board website for tech jobs in the state of Utah. This site was built with Laravel, Tailwind CSS, Livewire, and Alpine.js. It also uses Pest for automated testing and Stripe for one-time payments. The site is hosted on a DigitalOcean droplet, which I configured with Nginx, PHP-FPM, Composer, and other needed libraries.",
      link: "https://www.utahtech.work",
      image: "utw.png",
      tech: [
        "Laravel",
        "Tailwind CSS",
        "Livewire",
        "Alpine.js",
        "Pest",
        "Stripe",
      ],
    },
    {
      name: "North Texas Process Server",
      description:
        "This is a website I built for my father-in-law's business in Denton, Texas. The site was built with SvelteKit, Typescript, Tailwind CSS, and a serverless function for sending an email from the contact form via MailGun. I later added a payments page using Stripe. It is hosted on Vercel for fast builds and automated deployments.",
      link: "https://www.northtexasprocessserver.com",
      image: "notxps.png",
      tech: [
        "SvelteKit",
        "Tailwind CSS",
        "Typescript",
        "MailGun",
        "Vercel",
        "Stripe",
      ],
    },
    {
      name: "A Child's Hope Foundation",
      description:
        "I helped redesign an outdated, static site into a responsive Drupal theme and created a system where users could create accounts and register for upcoming events. I later built a donation payment processing page using Stripe. Several years later, I assisted in migrating the site to a fresh WordPress theme.",
      link: "https://achildshopefoundation.org",
      image: "achf-site.png",
      tech: ["Drupal", "Stripe", "LESS", "PHP", "jQuery"],
    },
    {
      name: "Todd Goates for President",
      description:
        "This was a joke website to announce my candidacy for President of the United States that I launched on my 35th birthday. The site was built with React and Remix. I used Tailwind CSS for styling and Vercel for hosting. The site was a fun way to show off my skills and troll my friends and followers on social media.",
      link: "https://vote4.toddgoates.com",
      repoLink: "https://github.com/toddgoates/votes4goates",
      image: "vote4goates.png",
      tech: ["React", "Remix", "Tailwind CSS", "Vercel"],
    },
    {
      name: "Pocket Planetarium",
      description:
        "A fun project built with React to see how much you would weigh on different planets in the solar system. The application uses several small components: WeightForm, PlanetList, and Planet. The user's weight is kept in context and passed to sibling components. I'm using styled components for scoping CSS.",
      link: "https://planetarium.toddgoates.com",
      repoLink: "https://github.com/toddgoates/react-planetarium",
      image: "planetarium.png",
      tech: ["React", "Styled Components"],
    },
    {
      name: "Rock Paper Scissors",
      description:
        "A fun little project built with Vue.js to play Rock Paper Scissors against your browser. The game is broken down to different Vue components. A history of your wins, loses, and ties are recorded with timestamps. Your wins are graphed with Chart.js. Players have the option to save progress and keep gameplay data in local storage.",
      link: "https://rps.toddgoates.com",
      repoLink: "https://github.com/toddgoates/rockpaperscissors",
      image: "rps.png",
      tech: ["VueJS", "Moment JS", "Chart JS", "Local Storage", "Bootstrap"],
    },
    {
      name: "Captain's Log",
      description:
        "Create your own Captain's Log in your browser with the HTML5 Speech Recognition API. Enable your browser's microphone and start speaking. The browser will then listen to you and transcribe your words in real time. I used CSS Grid to build the layout and some custom CSS to mimic the appearance of the Captain's Log on Star Trek.",
      link: "https://captainslog.toddgoates.com",
      repoLink: "https://github.com/toddgoates/captains-log",
      image: "captainslog.png",
      tech: ["JavaScript", "CSS Grid", "SpeechRecognition API"],
    },
  ];
}
