export type ExperienceEntry = {
  id: string;
  title: string;
  organisation?: string;
  /** Omitted when the CV does not state a period — nothing is invented here. */
  period?: string;
  role: string;
  teamSize?: string;
  description: string;
  achievements: string[];
  stack: string[];
  /** Links the entry to a card in the Projects section. */
  projectId?: string;
};

export const experience: ExperienceEntry[] = [
  {
    id: "citek-isd",
    title: "VASG Sales Portal — B2B Steel Sales & Distribution",
    organisation: "CITEK.ISD",
    period: "03/2026 – Present",
    role: "Backend Developer (C#) & Frontend Developer (ReactJS)",
    teamSize: "Team of 8",
    description:
      "Building the sales-contract and pre-order core of a B2B steel distribution platform, including two-way SAP integration and electronic contract signing.",
    achievements: [
      "Multi-version sales contracts with distributor sub-contracts and remaining-volume calculation.",
      "Pessimistic locking to keep concurrent price updates safe.",
      "Two-way SAP integration for orders, pricing conditions, credit limits and receivables.",
      "CI/CD with GitHub Actions, Docker Compose and nginx.",
    ],
    stack: [
      "ASP.NET Core 8",
      "MediatR / CQRS",
      "SQL Server",
      "Quartz.NET",
      "ReactJS",
      "Docker",
    ],
    projectId: "vasg-sales-portal",
  },
  {
    id: "mps-icrm",
    title: "MPS iCRM — Customer Relationship Management",
    role: "Backend Developer & Frontend Developer",
    description:
      "Guest-schedule workflows, Microsoft 365 integration and an email-to-ticket pipeline, delivered alongside a migration from ASP.NET MVC 5 to a .NET 8 API.",
    achievements: [
      "Two-level approval workflow for guest schedules.",
      "Automatic Teams meeting creation and Outlook calendar sync via Microsoft Graph API.",
      "Email-to-ticket system for complaint handling.",
      "Stored-procedure optimisation and legacy-to-.NET 8 migration support.",
    ],
    stack: [
      "ASP.NET Core 8",
      "Microsoft Graph API",
      "Hangfire",
      "ReactJS",
      "Ant Design",
    ],
    projectId: "mps-icrm",
  },
  {
    id: "cabin-crew",
    title: "Cabin Crew — Uniform Warehouse Management",
    role: "Sole Backend Developer",
    description:
      "Owned the backend architecture for an airline uniform warehouse covering more than eight modules, from quota rules to fully traceable import and export.",
    achievements: [
      "Quota management and uniform replacement history.",
      "Import/export traceable by supplier and by employee.",
      "Distribution logic driven by crew role and airport.",
    ],
    stack: [
      "ASP.NET Core",
      "SQL Server",
      "Stored Procedures",
      "Azure",
      "EPPlus",
    ],
    projectId: "cabin-crew",
  },
  {
    id: "npp-hr",
    title: "NPP — HR & Project Management",
    role: "Backend Developer",
    description:
      "APIs and approval workflows covering projects, tasks, timesheets and leave, with notifications delivered through Microsoft 365.",
    achievements: [
      "Project, Task, Day-off, Timesheet and Report APIs.",
      "Timesheet and day-off approval system.",
      "Scheduled jobs with Quartz.NET.",
    ],
    stack: ["ASP.NET Core", "Microsoft Graph API", "Quartz.NET", "SQL Server"],
    projectId: "npp-hr",
  },
  {
    id: "vacs-catering",
    title: "VACS — In-flight Catering Delivery",
    role: "Backend Developer",
    description:
      "Catering domain APIs with automatic quota calculation from passenger and route data, plus airline-specific document exports.",
    achievements: [
      "Meal, Beverage, Utensil and Linen module APIs.",
      "Quota calculation from passenger numbers and flight routes.",
      "Netlines and LMS API integration.",
      "Excel/PDF export per airline template.",
    ],
    stack: ["ASP.NET Core", "Netlines API", "LMS API", "SQL Server"],
    projectId: "vacs-catering",
  },
  {
    id: "solace-spa",
    title: "Solace SPA — AI-assisted Skincare Application",
    period: "01/2025 – 05/2025",
    role: "Backend Developer",
    description:
      "Backend for a smart skincare product: progress dashboard, real-time specialist chat and AI-assisted skin analysis.",
    achievements: [
      "Skincare progress dashboard.",
      "Real-time chat between users and specialists over SignalR.",
      "Support for skin analysis and personalised treatment suggestions.",
    ],
    stack: ["ASP.NET Core", "SignalR", "MySQL", "Redis", "MongoDB", "Docker"],
    projectId: "solace-spa",
  },
];

export const education = {
  school: "FPT University",
  degree: "Software Engineering",
  period: "2021 – 05/2025",
  gpa: "3.2 / 4.0",
};

export const achievements = [
  {
    title: "Excellent Student",
    context: "Fall 2024 Entrepreneurial Competition",
  },
];
