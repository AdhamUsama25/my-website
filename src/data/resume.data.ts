import type { IOrganization, IResumeInfo, ISkill } from "../Types/resume.types";
import StoryAppLogo from "../assets/Logos/StorkyApp logo.png";
import CSS_icon from "../assets/Skills/CSS.png";
import Express_icon from "../assets/Skills/ExpressJS.png";
import HTML_icon from "../assets/Skills/HTML.svg";
import JS_icon from "../assets/Skills/JS.png";
import NextIcon from "../assets/Skills/Next.js.png";
import NodeJS_icon from "../assets/Skills/NodeJS.svg";
import Redux_icon from "../assets/Skills/Redux.png";
import Sass_icon from "../assets/Skills/Sass.png";
import TS_icon from "../assets/Skills/TS.png";
import Tailwind_icon from "../assets/Skills/Tailwind.png";
import React_icon from "../assets/Skills/react.svg";
import EzzMedicalLogo from "../assets/Logos/ezzmedical.png"
import SynapseAnalyticsLogo from "../assets/Logos/synapse_analytics_logo.jpeg"
import facultyOfEngineeringLogo from "../assets/Logos/Faculty of Engineering - Tanta University Logo.png"


const organizations: Record<string, IOrganization> = {
  storkyApp: {
    name: "Storky App",
    logo: StoryAppLogo,
    url: "https://storkyapp.com/"
  },
  ezzMedical: {
    name: "Ezz Medical Industries",
    logo: EzzMedicalLogo,
    url: "https://www.ezzmedical.com",
  },
  synapseAnalytics: {
    name: "Synapse Analytics",
    logo: SynapseAnalyticsLogo,
    url: "https://synapse-analytics.io/",
  },
  facultyOfEngineering: {
    name: "Faculty of Engineering - Tanta University",
    url: "https://eng.tanta.edu.eg/",
    logo: facultyOfEngineeringLogo,
  }
}

export const resumeWorkExperience: IResumeInfo[] = [
  {
    organization: organizations.synapseAnalytics,
    title: "Frontend Engineer II",
    startDate: "Jan 2026",
    endDate: "Present",
    location: "Cairo, Egypt",
    responsibilities: [],
  },
  {
    organization: organizations.ezzMedical,
    title: "Frontend Engineer",
    startDate: "Nov 2024",
    endDate: "Dec 2025",
    location: "Cairo, Egypt",
    responsibilities: [
      "Developed and implemented internal software solutions to enhance engineering efficiency and streamline industrial processes.",
      "Key Projects:",
      "- Engineering Requirements Application (ERA): Created a system to document and manage product requirements, including standard requirements, CAR, and PRD, as well as design decisions, improving project clarity and coordination.",
      "- Operation Management System (OMS): Designed an application to oversee industrial processes, from defining production steps to managing construction, optimizing workflow and operational efficiency.",
    ],
  },
  {
    organization: organizations.storkyApp,
    title: "Software Developer",
    startDate: "Dec 2022",
    endDate: "Dec 2023",
    location: "Tanta, Egypt",
    responsibilities: [
      "- Developed and maintained web applications using HTML, CSS, TypeScript, ReactJS, and NodeJS.",
      "- Conducted thorough testing and debugging to ensure performance and reliability.",
      "- Collaborated with cross-functional teams, including designers and testers, to meet project goals.",
      "- Participated in code reviews to improve code quality and consistency.",
      "- Contributed to the development of a real-time virtual classroom platform with interactive whiteboard and chat features.",
    ],
  },
  {
    organization: organizations.storkyApp,
    title: "Software Developer Intern",
    startDate: "Jun 2022",
    endDate: "Aug 2023",
    location: "Tanta, Egypt",
    responsibilities: [
      "- Gained hands-on experience in front-end development with HTML5, CSS3, JavaScript, TypeScript, and ReactJS.",
      "- Completed multiple projects and tasks, applying learned skills in a practical setting.",
    ],
  },
];

export const resumeEducation: IResumeInfo[] = [
  {
    organization: organizations.facultyOfEngineering,
    title: "Bachelor of Computer Engineering & Automatic Control",
    startDate: "Sep 2019",
    endDate: "Jul 2024",
    location: "Tanta, Egypt",
    responsibilities: [],
  },
];

export const resumeSkills: ISkill[] = [
  {
    name: "HTML",
    icon: HTML_icon,
    proficiency: "Proficient",
    experience: "2 years",
  },
  {
    name: "CSS",
    icon: CSS_icon,
    proficiency: "Proficient",
    experience: "2 years",
  },
  {
    name: "JavaScript",
    icon: JS_icon,
    proficiency: "Proficient",
    experience: "2 years",
  },
  {
    name: "TypeScript",
    icon: TS_icon,
    proficiency: "Proficient",
    experience: "2 years",
  },
  {
    name: "NextJS",
    icon: NextIcon,
    proficiency: "Competent",
    experience: "1 month",
  },
  {
    name: "ReactJS",
    icon: React_icon,
    proficiency: "Proficient",
    experience: "2 years",
  },
  {
    name: "Redux",
    icon: Redux_icon,
    proficiency: "Proficient",
    experience: "2 years",
  },
  {
    name: "Sass",
    icon: Sass_icon,
    proficiency: "Competent",
    experience: "5 months",
  },
  {
    name: "Tailwind CSS",
    icon: Tailwind_icon,
    proficiency: "Proficient",
    experience: "5 months",
  },
  {
    name: "NodeJS",
    icon: NodeJS_icon,
    proficiency: "Competent",
    experience: "2 years",
  },
  {
    name: "ExpressJS",
    icon: Express_icon,
    proficiency: "Competent",
    experience: "2 years",
  },
];

