import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Arian Jamali",
  title: "Frontend Developer",

  avatarUrl: "/assets/img.jpeg",

  professionalSummary:
    "Frontend Developer with 2+ years of professional experience building modern web applications using React, Vue.js, Nuxt.js, JavaScript, and TypeScript. Experienced in developing responsive user interfaces, REST APIs with Node.js, PostgreSQL databases, and Linux-based deployments. Delivered 20+ freelance projects and worked directly with clients to develop, maintain, and support production web applications.",

  contact: {
    email: "arianthedude@gmail.com",
    location: "Tehran, Iran",
    github: "github.com/arianthedude",
    website: "https://your-portfolio.com",
  },

  expertise: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "Node.js",
    "Express.js",
    "NestJS",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Linux",
    "Git",
    "GitHub",
    "Tailwind CSS",
    "REST API Development",
    "Browser Automation",
    "Technical Support",
    "Troubleshooting",
  ],

  languages: [
    {
      name: "Persian",
      level: "NATIVE",
    },
    {
      name: "English",
      level: "PROFESSIONAL",
    },
    {
      name: "German",
      level: "BASIC",
    },
  ],

  education: [
    {
      degree: "Diploma in Mathematics and Physics",
      school: "Khatam High School",
      period: "2009 — 2013",
    },
  ],

  experience: [
    {
      id: "exp-1",

      role: "Frontend Developer & Technical Support Specialist",

      company: "Pazhvak Etela'at Pars",

      location: "Tehran, Iran",

      period: "2022 — 2025",

      bullets: [
        "Maintained and supported 30+ corporate websites and web applications for business clients across multiple industries.",

        "Diagnosed and resolved 100+ technical issues related to hosting environments, website deployments, and application infrastructure.",

        "Collaborated with developers, designers, and stakeholders to implement new features, bug fixes, and platform improvements.",

        "Managed production deployments, website updates, and ongoing maintenance activities to ensure system stability.",

        "Provided technical support to 50+ clients, ensuring timely issue resolution and improved customer satisfaction.",

        "Assisted in testing and troubleshooting web applications running in production Linux environments.",
      ],

      tags: [
        "JavaScript",
        "React",
        "Linux",
        "Git",
        "Technical Support",
      ],
    },

    {
      id: "exp-2",

      role: "Freelance Web Developer",

      company: "Self-Employed",

      location: "Remote",

      period: "2019 — Present",

      bullets: [
        "Delivered 20+ web development projects for clients using React, Vue.js, Nuxt.js, and Node.js technologies.",

        "Developed responsive user interfaces and reusable frontend components to improve maintainability and development speed.",

        "Built and integrated REST APIs using Node.js and Express.js to support business workflows and customer-facing applications.",

        "Managed Linux-based deployments, application updates, and ongoing maintenance for multiple active projects.",

        "Worked directly with 10+ recurring clients to gather requirements, provide technical consultation, and deliver customized solutions.",

        "Provided long-term support and troubleshooting services for client websites, applications, and backend systems.",
      ],

      tags: [
        "React",
        "Vue.js",
        "Nuxt.js",
        "Node.js",
        "PostgreSQL",
      ],
    },

    {
      id: "exp-3",

      role: "Customer Service Representative",

      company: "Cafe",

      location: "Tehran, Iran",

      period: "2018 — 2019",

      bullets: [
        "Served 100+ customers weekly in a fast-paced service environment while maintaining high customer satisfaction.",

        "Managed order processing, cash handling, and customer interactions during peak business hours.",

        "Collaborated with team members to ensure smooth daily operations and efficient service delivery.",

        "Developed strong communication, teamwork, and problem-solving skills through direct customer engagement.",
      ],

      tags: [
        "Customer Service",
        "Communication",
        "Teamwork",
      ],
    },
  ],

  projects: [
    {
      id: "proj-1",

      title: "Campaign Management Dashboard",

      description:
        "Built an administrative dashboard using React, TypeScript, and TanStack Table featuring advanced filtering, sorting, inline editing, and API integration capabilities.",

      link: "",

      tags: [
        "React",
        "TypeScript",
        "TanStack Table",
        "REST API",
      ],
    },

    {
      id: "proj-2",

      title: "User Management Platform",

      description:
        "Developed user profile management functionality, role-based access controls, and administrative tools integrated with backend APIs and PostgreSQL databases.",

      link: "",

      tags: [
        "React",
        "Node.js",
        "PostgreSQL",
      ],
    },

    {
      id: "proj-3",

      title: "Browser Automation Tools",

      description:
        "Created browser automation workflows using Playwright and Node.js for data extraction, form submission, and repetitive web-based processes.",

      link: "",

      tags: [
        "Node.js",
        "Playwright",
        "Automation",
      ],
    },

    {
      id: "proj-4",

      title: "Profile Management Dashboard",

      description:
        "Built a user profile management system with editable tables, dynamic forms, and role-based permissions using React, Tailwind CSS, and modern frontend development practices.",

      link: "",

      tags: [
        "React",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
  ],
};