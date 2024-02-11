import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Milos Segic",
  initials: "MS",
  location: "Nis, Serbia, CET",
  locationLink: "https://www.google.com/maps/place/Nis",
  about:
    "Experienced Software Engineer with 8+ years of experience focused on React & React Native technologies.",
  summary:
    "With 8+ years of development behind me, I have built applications and websites for start-ups and big tech companies, from initial ideas to final deployment on the web and app stores.",
  avatarUrl: "https://avatars.githubusercontent.com/u/30130573?v=4",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "segicm@gmail.com",
    // tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/segicm",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/segicmilos/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "College of Applied Technical Sciences",
      degree: "Bachelor of Applied Science (B.A.Sc.), Computer Programming",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Aptly",
      link: "https://www.getaptly.com/",
      badges: ["Remote"],
      title: "Mobile & Web Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "Present",
      description:
        "As a dedicated React/React Native Developer at Aptly, I lead in the creation of dynamic, user-centric web and mobile applications. Leveraging expertise in React.js and React Native frameworks, I collaborate closely with cross-functional teams to deliver high-quality, scalable solutions. My role involves driving the development lifecycle, from conceptualization to deployment, ensuring seamless user experiences and optimal performance.",
    },
    {
      company: "Index.dev",
      link: "https://index.dev/",
      badges: ["Remote"],
      title: "React Native Developer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "Working as a Full-time React/React Native developer at the Index Company. I was responsible for building and maintaining mobile and web apps.",
    },
    {
      company: "InvoiceQuick",
      link: "https://invoicequick.com/",
      badges: [],
      title: "React Native Developer",
      logo: JojoMobileLogo,
      start: "2021",
      end: "2022",
      description:
        "Development of the InvoiceQuick iOS and Android Mobile app using React Native.",
    },
    {
      company: "Excelerate Consulting",
      link: "https://excelerateconsulting.co/",
      badges: ["Remote"],
      title: "React Developer",
      logo: NSNLogo,
      start: "2020",
      end: "2021",
      description: "Development of the Excelerate Consulting mobile app in React Native and Admin Dashboard app in React.",
    },
    {
      company: "The Big Red Balloon",
      link: "http://www.thebigredballoon.com/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: NSNLogo,
      start: "2018",
      end: "2021",
      description: "Develop efficient Web & Mobile Apps using React, React Native and NodeJS technologies.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React Native",
    "React/Next.js",
    "Node.js",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
