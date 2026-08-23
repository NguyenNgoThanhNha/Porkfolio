import type { LucideIcon } from "lucide-react";
import {
  Layers,
  GitBranch,
  Lock,
  Workflow,
  Timer,
  ShieldCheck,
} from "lucide-react";

export type FocusArea = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
};

export const focusAreas: FocusArea[] = [
  {
    icon: Layers,
    title: "Modular application design",
    description:
      "Bounded modules inside one deployable application — a distributed monolith that keeps domain logic separated without paying the operational cost of microservices too early.",
    tags: ["Distributed Monolith", "Clean separation", "ASP.NET Core"],
  },
  {
    icon: GitBranch,
    title: "CQRS with MediatR",
    description:
      "Commands and queries handled explicitly, with FluentValidation at the edge and AutoMapper keeping DTOs away from the domain model.",
    tags: ["MediatR", "CQRS", "FluentValidation", "AutoMapper"],
  },
  {
    icon: Lock,
    title: "Concurrency and data integrity",
    description:
      "Pessimistic locking where two users really can touch the same price at the same time, and stored procedures where set-based work belongs in the database.",
    tags: ["Pessimistic locking", "EF Core", "T-SQL"],
  },
  {
    icon: Workflow,
    title: "Approval workflows",
    description:
      "Multi-level approval modelled as explicit state rather than status flags — price approvals, timesheets, day-off requests and guest schedules.",
    tags: ["Workflow state", "Multi-level approval", "Audit trail"],
  },
  {
    icon: Timer,
    title: "Background processing",
    description:
      "Quartz.NET and Hangfire for scheduled synchronisation, notification and reporting work that must not block a request thread.",
    tags: ["Quartz.NET", "Hangfire", "SignalR"],
  },
  {
    icon: ShieldCheck,
    title: "Enterprise integration",
    description:
      "Two-way SAP integration, Microsoft Graph API for Microsoft 365, and digital-signature providers behind adapters that keep vendor quirks out of the domain.",
    tags: ["SAP REST / SOAP", "Microsoft Graph", "VNPT Smart CA", "CMC"],
  },
];
