import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Server,
  LayoutDashboard,
  Database,
  Plug,
  Container,
} from "lucide-react";

export type SkillGroup = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    title: "Programming",
    icon: Braces,
    description: "Languages I write production code in every day.",
    items: ["C#", "JavaScript", "TypeScript", "T-SQL"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    description:
      "The .NET stack I use to design APIs, workflows and background processing.",
    items: [
      "ASP.NET Core Web API",
      "ASP.NET Core MVC",
      "Razor Pages",
      "Entity Framework Core",
      "MediatR",
      "CQRS",
      "FluentValidation",
      "AutoMapper",
      "SignalR",
      "Quartz.NET",
      "Hangfire",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: LayoutDashboard,
    description:
      "Enough front-end to ship a feature end to end when the team needs it.",
    items: ["ReactJS", "Tailwind CSS", "Ant Design", "Shadcn"],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    description: "Relational modelling, stored procedures, caching and search.",
    items: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    id: "integration",
    title: "Integration",
    icon: Plug,
    description:
      "Connecting enterprise systems that were never designed to talk to each other.",
    items: [
      "SAP REST / SOAP",
      "Microsoft Graph API",
      "VNPT Smart CA",
      "CMC digital signature",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: Container,
    description: "Packaging, shipping and observing what I build.",
    items: [
      "Docker",
      "Docker Compose",
      "GitHub",
      "GitHub Actions",
      "Elasticsearch",
    ],
  },
];

export const softSkills = [
  {
    title: "Self-learning and adaptability",
    description:
      "Comfortable picking up an unfamiliar framework or integration protocol and being productive with it quickly.",
  },
  {
    title: "Teamwork",
    description:
      "Used to working inside cross-functional product teams alongside BA, QC and front-end engineers.",
  },
  {
    title: "English technical reading",
    description:
      "Able to read and work directly from English technical documentation, SDKs and vendor API specs.",
  },
  {
    title: "Problem solving for enterprise systems",
    description:
      "Thinks in terms of business rules, edge cases and data integrity, not just endpoints.",
  },
];
