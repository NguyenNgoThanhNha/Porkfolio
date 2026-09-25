export const projectCategories = [
  "All",
  "Enterprise Systems",
  "Backend",
  "Integration",
  "Full-stack",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type ArchitectureLayer = {
  title: string;
  nodes: { label: string; kind: "client" | "service" | "data" | "external" }[];
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  company?: string;
  period?: string;
  role: string;
  teamSize?: string;
  /** Client work — public description is kept deliberately high level. */
  confidential: boolean;
  categories: Exclude<ProjectCategory, "All">[];
  /** One-paragraph teaser shown on the card. */
  summary: string;
  /** Chips shown on the card (subset of `technologies`). */
  highlights: string[];
  problem: string;
  solution: string;
  responsibilities: string[];
  technologies: string[];
  architecture: {
    description: string;
    layers: ArchitectureLayer[];
  };
  /** Accent used by the placeholder mockup on the card. */
  accent: "cyan" | "steel" | "navy";
  /** Atmospheric cover in /public/projects — not a client screenshot. */
  coverImage?: string;
  /** Public source repository, shown for personal projects. */
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "vasg-sales-portal",
    title: "VASG Sales Portal",
    subtitle: "B2B Steel Sales & Distribution System",
    company: "CITEK.ISD",
    period: "03/2026 – Present",
    role: "Backend Developer (C#) & Frontend Developer (ReactJS)",
    teamSize: "Team of 8",
    confidential: true,
    categories: ["Enterprise Systems", "Backend", "Integration", "Full-stack"],
    summary:
      "A B2B sales and distribution platform for the steel industry: multi-version sales contracts, distributor sub-contracts, multi-level price approval and two-way SAP integration.",
    highlights: ["ASP.NET Core 8", "CQRS", "Quartz.NET", "ReactJS"],
    problem:
      "Steel distribution runs on contracts that change constantly — prices are renegotiated, volumes are split across distributors, and the numbers have to stay consistent with SAP, which remains the system of record for orders, credit limits and receivables. Sales staff were tracking remaining volume and price approvals outside the system, so concurrent edits and stale pricing were a real risk.",
    solution:
      "A distributed monolith on ASP.NET Core 8 with MediatR/CQRS, in which the Sales Contract module owns contract versioning and sub-contract allocation, a rule engine drives PreOrder creation per order type, and a pessimistic locking strategy protects price records from concurrent updates. Two-way SAP integration keeps sales orders, pricing conditions, credit limits and accounts receivable aligned, while Quartz.NET jobs handle recurring synchronisation and reporting work.",
    responsibilities: [
      "Built the Sales Contract module with multi-version contracts, distributor sub-contracts and remaining-volume calculation.",
      "Implemented a pessimistic locking mechanism to prevent concurrent price updates on the same record.",
      "Developed two-way SAP integration for sales orders, sales contracts, pricing conditions, credit limits and accounts receivable.",
      "Developed a multi-level price approval workflow together with Excel data export.",
      "Built the PreOrder module with a rule engine covering several order types.",
      "Implemented Quartz.NET background jobs for scheduled synchronisation and processing.",
      "Set up the CI/CD pipeline with GitHub Actions, Docker Compose and nginx.",
      "Integrated VNPT Smart CA and CMC for electronic contract signing.",
      "Contributed to the ReactJS + TypeScript front end for the sales workflows.",
    ],
    technologies: [
      "ASP.NET Core 8",
      "Distributed Monolith",
      "Entity Framework Core",
      "MediatR / CQRS",
      "SQL Server",
      "Quartz.NET",
      "SignalR",
      "ReactJS",
      "TypeScript",
      "Docker",
      "GitHub Actions",
      "nginx",
      "VNPT Smart CA",
      "CMC digital signature",
    ],
    architecture: {
      description:
        "A distributed monolith: one deployable ASP.NET Core application split into clearly bounded modules that communicate through MediatR, with SAP and the signature providers behind dedicated integration adapters.",
      layers: [
        {
          title: "Client",
          nodes: [
            { label: "ReactJS Sales Portal", kind: "client" },
            { label: "SignalR live updates", kind: "client" },
          ],
        },
        {
          title: "Application",
          nodes: [
            { label: "Sales Contract module", kind: "service" },
            { label: "PreOrder rule engine", kind: "service" },
            { label: "Price approval workflow", kind: "service" },
            { label: "Quartz.NET jobs", kind: "service" },
          ],
        },
        {
          title: "Data & Integration",
          nodes: [
            { label: "SQL Server", kind: "data" },
            { label: "SAP (REST / SOAP)", kind: "external" },
            { label: "VNPT Smart CA · CMC", kind: "external" },
          ],
        },
      ],
    },
    accent: "cyan",
    coverImage: "/projects/vasg-sales-portal.webp",
  },
  {
    id: "mps-icrm",
    title: "MPS iCRM",
    subtitle: "Customer Relationship Management System",
    role: "Backend Developer & Frontend Developer",
    confidential: true,
    categories: ["Enterprise Systems", "Backend", "Integration", "Full-stack"],
    summary:
      "A CRM platform with a two-level guest-schedule approval workflow, automated Microsoft Teams meetings, Outlook calendar sync and an email-to-ticket pipeline for complaint handling.",
    highlights: [
      "ASP.NET Core 8",
      "Microsoft Graph API",
      "Hangfire",
      "Ant Design",
    ],
    problem:
      "Guest visits were coordinated over email and personal calendars, so approvals were hard to trace and meetings were created by hand. At the same time the product still ran on a legacy ASP.NET MVC 5 codebase that was becoming expensive to extend.",
    solution:
      "A Guest Schedule module with a two-level approval workflow, wired to Microsoft Graph API so that an approved schedule automatically creates the Teams meeting and syncs the Outlook calendars of everyone involved. Incoming complaint email is converted into tickets, and the platform was progressively migrated from ASP.NET MVC 5 to a .NET 8 API.",
    responsibilities: [
      "Developed the Guest Schedule module with a two-level approval workflow.",
      "Integrated Microsoft Graph API to create Teams meetings automatically and synchronise Outlook calendars.",
      "Built an email-to-ticket system for complaint handling.",
      "Optimised stored procedures used by reporting and list screens.",
      "Supported the migration from the legacy ASP.NET MVC 5 system to a .NET 8 API.",
    ],
    technologies: [
      "ASP.NET Core 8",
      "Entity Framework Core",
      "MediatR / CQRS",
      "SQL Server",
      "Hangfire",
      "Quartz.NET",
      "Microsoft Graph API",
      "ReactJS",
      "TypeScript",
      "Ant Design",
      "ASP.NET MVC 5",
      "Entity Framework 6",
    ],
    architecture: {
      description:
        "A .NET 8 API gradually taking over from a legacy MVC 5 application, with Microsoft 365 as an external collaboration backbone and Hangfire/Quartz.NET handling asynchronous mail and schedule processing.",
      layers: [
        {
          title: "Client",
          nodes: [
            { label: "ReactJS + Ant Design", kind: "client" },
            { label: "Legacy ASP.NET MVC 5", kind: "client" },
          ],
        },
        {
          title: "Application",
          nodes: [
            { label: "Guest Schedule + approvals", kind: "service" },
            { label: "Email-to-ticket pipeline", kind: "service" },
            { label: "Hangfire / Quartz.NET workers", kind: "service" },
          ],
        },
        {
          title: "Data & Integration",
          nodes: [
            { label: "SQL Server + stored procedures", kind: "data" },
            { label: "Microsoft Graph API", kind: "external" },
          ],
        },
      ],
    },
    accent: "steel",
    coverImage: "/projects/mps-icrm.webp",
  },
  {
    id: "cabin-crew",
    title: "Cabin Crew",
    subtitle: "Uniform Warehouse Management System",
    role: "Sole Backend Developer",
    confidential: true,
    categories: ["Enterprise Systems", "Backend"],
    summary:
      "Warehouse management for airline cabin-crew uniforms: quota management, replacement history and traceable import/export across suppliers and staff — more than eight modules, owned end to end.",
    highlights: ["ASP.NET Core", "Stored Procedures", "Azure", "EPPlus"],
    problem:
      "Uniform entitlements differ by crew role and by airport, replacements have to be justified against history, and every item that enters or leaves the warehouse must be traceable back to a supplier and to the individual who received it.",
    solution:
      "A backend covering more than eight modules, with quota management and replacement history at its core, distribution logic driven by crew role and airport, and import/export flows built on stored procedures and EPPlus so that large spreadsheets stay fast and fully auditable.",
    responsibilities: [
      "Owned the backend architecture across more than eight modules.",
      "Built quota management and uniform replacement history.",
      "Developed import/export processes traceable by supplier and by employee.",
      "Implemented distribution logic based on crew role and airport.",
    ],
    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Stored Procedures",
      "Azure Cloud Services",
      "EPPlus",
      "Quartz.NET",
    ],
    architecture: {
      description:
        "A single backend owning the full uniform lifecycle, with heavy set-based work pushed into stored procedures and scheduled jobs handling recurring quota and reporting tasks.",
      layers: [
        {
          title: "Client",
          nodes: [{ label: "Warehouse web client", kind: "client" }],
        },
        {
          title: "Application",
          nodes: [
            { label: "Quota & replacement", kind: "service" },
            { label: "Import / export (EPPlus)", kind: "service" },
            { label: "Quartz.NET jobs", kind: "service" },
          ],
        },
        {
          title: "Data & Platform",
          nodes: [
            { label: "SQL Server + stored procedures", kind: "data" },
            { label: "Azure Cloud Services", kind: "external" },
          ],
        },
      ],
    },
    accent: "navy",
    coverImage: "/projects/cabin-crew.webp",
  },
  {
    id: "npp-hr",
    title: "NPP",
    subtitle: "HR & Project Management System",
    role: "Backend Developer",
    confidential: true,
    categories: ["Enterprise Systems", "Backend", "Integration"],
    summary:
      "Project, task, timesheet and day-off management with approval workflows, Microsoft Graph email notifications and scheduled jobs.",
    highlights: ["ASP.NET Core", "Microsoft Graph API", "Quartz.NET"],
    problem:
      "Project tracking, timesheets and leave requests lived in separate places, and approvals depended on people remembering to chase each other by email.",
    solution:
      "A single API surface for Project, Task, Day-off, Timesheet and Report, with approval workflows for timesheets and leave, Microsoft Graph API notifications so requests reach approvers in their inbox, and Quartz.NET jobs for recurring reminders and reporting.",
    responsibilities: [
      "Built APIs for Project, Task, Day-off, Timesheet and Report.",
      "Integrated Microsoft Graph API for email notifications and workflow steps.",
      "Developed the timesheet and day-off approval system.",
      "Implemented scheduled jobs with Quartz.NET.",
    ],
    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Microsoft Graph API",
      "Quartz.NET",
    ],
    architecture: {
      description:
        "A RESTful API around the HR domain, with approvals modelled as explicit workflow states and notifications delivered through Microsoft 365.",
      layers: [
        {
          title: "Client",
          nodes: [{ label: "HR web client", kind: "client" }],
        },
        {
          title: "Application",
          nodes: [
            { label: "Project / Task API", kind: "service" },
            { label: "Timesheet & Day-off approvals", kind: "service" },
            { label: "Quartz.NET jobs", kind: "service" },
          ],
        },
        {
          title: "Data & Integration",
          nodes: [
            { label: "SQL Server", kind: "data" },
            { label: "Microsoft Graph API", kind: "external" },
          ],
        },
      ],
    },
    accent: "steel",
    coverImage: "/projects/npp-hr.webp",
  },
  {
    id: "vacs-catering",
    title: "VACS",
    subtitle: "In-flight Catering Delivery System",
    role: "Backend Developer",
    confidential: true,
    categories: ["Enterprise Systems", "Backend", "Integration"],
    summary:
      "In-flight catering logistics: meal, beverage, utensil and linen modules with automatic quota calculation from passenger counts and routes, plus airline-specific Excel/PDF exports.",
    highlights: ["ASP.NET Core", "Netlines API", "LMS API", "PDF / Excel"],
    problem:
      "Catering quantities depend on passenger numbers and route, and every airline expects its delivery paperwork in its own template — a combination that does not survive manual preparation at scale.",
    solution:
      "RESTful APIs for the Meal, Beverage, Utensil and Linen modules, quota calculation derived automatically from passenger counts and flight routes, integration with the Netlines and LMS APIs for flight and logistics data, and an export layer that renders Excel and PDF documents against per-airline templates.",
    responsibilities: [
      "Built RESTful APIs for the Meal, Beverage, Utensil and Linen modules.",
      "Automated quota calculation based on passenger numbers and flight routes.",
      "Integrated the Netlines API and the LMS API.",
      "Developed Excel/PDF export following each airline's own template.",
    ],
    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Netlines API",
      "LMS API",
      "Excel / PDF export",
    ],
    architecture: {
      description:
        "Catering domain modules behind a REST API, fed by external flight-data systems and finished by a template-driven document export layer.",
      layers: [
        {
          title: "Client",
          nodes: [{ label: "Catering operations client", kind: "client" }],
        },
        {
          title: "Application",
          nodes: [
            { label: "Meal / Beverage / Utensil / Linen", kind: "service" },
            { label: "Quota calculation", kind: "service" },
            { label: "Template export engine", kind: "service" },
          ],
        },
        {
          title: "Data & Integration",
          nodes: [
            { label: "SQL Server", kind: "data" },
            { label: "Netlines API · LMS API", kind: "external" },
          ],
        },
      ],
    },
    accent: "navy",
    coverImage: "/projects/vacs-catering.webp",
  },
  {
    id: "helpdesk-ticketing",
    title: "Helpdesk Ticketing",
    subtitle: "Customer Support & SLA Tracking System",
    period: "09/2026 – Present",
    role: "Full-stack Developer (personal project)",
    confidential: false,
    categories: ["Backend", "Full-stack"],
    summary:
      "A helpdesk where customers raise tickets and agents work them through a validated status lifecycle, with SLA deadlines per priority, a background SLA monitor, audit history and fine-grained C/R/U/D permissions.",
    highlights: [".NET 10", "Clean Architecture", "CQRS", "ReactJS", "shadcn/ui"],
    problem:
      "Support requests arriving by email and chat get lost, nobody can say who owns a request or whether it is about to breach its response time, and a simple role check is not enough once some agents need extra rights and others need fewer.",
    solution:
      "A .NET 10 API built on Clean Architecture with MediatR/CQRS, FluentValidation and a generic Unit of Work, in which tickets move through an explicit state machine (New → Open → InProgress → Pending → Resolved → Closed) and every priority carries its own response and resolution deadlines. A hosted background service scans for tickets that are about to breach or have breached SLA, while a six-table permission model grants (activity, C/R/U/D) rights per role and per account. The React 19 + TypeScript front end uses shadcn/ui and TanStack Query/Table with server-side paging, and hides menus, routes and actions the user is not allowed to use.",
    responsibilities: [
      "Designed the Clean Architecture layout (Domain / Persistence / Application / Infrastructure / Api) with a MediatR pipeline for logging and validation.",
      "Modelled the ticket lifecycle as a state machine with comments, attachments, assignment and an audit trail of status, priority and assignee changes.",
      "Built SLA policies per priority and a background service that flags overdue and at-risk tickets and raises in-app notifications.",
      "Implemented JWT authentication with refresh-token rotation and permission-based authorisation over six Sys_* tables, with cached effective permissions.",
      "Added request/response API logging with masked secrets, traceable from the ProblemDetails traceId for debugging.",
      "Built the React 19 front end: ticket list with server-side filter/sort/paging, ticket detail timeline, role and permission matrix screens and a Recharts dashboard.",
      "Covered the system with xUnit + NSubstitute unit tests, SQL Server integration tests (Testcontainers) and Vitest + RTL + MSW front-end tests; containerised with Docker Compose and GitHub Actions CI.",
    ],
    technologies: [
      ".NET 10",
      "ASP.NET Core",
      "Clean Architecture",
      "MediatR / CQRS",
      "FluentValidation",
      "Mapster",
      "Entity Framework Core",
      "SQL Server",
      "JWT",
      "Serilog",
      "ReactJS",
      "TypeScript",
      "shadcn/ui",
      "TanStack Query",
      "Zustand",
      "xUnit",
      "Testcontainers",
      "Vitest",
      "Docker Compose",
      "GitHub Actions",
    ],
    architecture: {
      description:
        "Clean Architecture with thin controllers: each request flows Controller [HasPermission] → MediatR → logging and validation behaviours → handler → Unit of Work, saved once per request, while a hosted service drives the SLA scan on a timer.",
      layers: [
        {
          title: "Client",
          nodes: [
            { label: "React 19 + shadcn/ui", kind: "client" },
            { label: "Permission-aware routing", kind: "client" },
          ],
        },
        {
          title: "Application",
          nodes: [
            { label: "Ticket state machine", kind: "service" },
            { label: "SLA monitor service", kind: "service" },
            { label: "6-table permission model", kind: "service" },
            { label: "API request logging", kind: "service" },
          ],
        },
        {
          title: "Data & Platform",
          nodes: [
            { label: "SQL Server (EF Core)", kind: "data" },
            { label: "Docker Compose · GitHub Actions", kind: "external" },
          ],
        },
      ],
    },
    accent: "cyan",
    coverImage: "/projects/helpdesk-ticketing.webp",
    repoUrl: "https://github.com/NguyenNgoThanhNha/Helpdesk-Ticketing",
  },
  {
    id: "inventory-warehouse",
    title: "Inventory Warehouse",
    subtitle: "Concurrency-safe Inventory & Warehouse Management",
    period: "09/2026 – Present",
    role: "Full-stack Developer (personal project)",
    confidential: false,
    categories: ["Backend", "Full-stack"],
    summary:
      "Multi-warehouse inventory where stock can never go wrong or negative under concurrent use: goods receipts, issues, atomic transfers and stock-takes over an immutable ledger, with a Kardex report, Redis-cached dashboard and batch Excel import.",
    highlights: [".NET 10", "Optimistic Concurrency", "Redis", "ReactJS", "TanStack Virtual"],
    problem:
      "When several people issue goods from the same warehouse at once, naive read-then-write code oversells stock that is almost gone, totals drift away from the documents behind them, and large catalogues make both the stock screen and spreadsheet imports painfully slow.",
    solution:
      "Every stock change goes through a single StockLedger that writes an immutable StockMovement, so the ledger always sums to on-hand stock. Row-version optimistic concurrency with a retry behaviour re-reads stock on conflict and either posts the document or rejects it with 409 and per-line shortages; negative stock is blocked in three layers down to a database CHECK constraint, and Idempotency-Key makes double submits create exactly one document. Reporting runs on stored procedures with window functions (Kardex running balance, a six-table dashboard) behind Redis caching, and the React front end renders 12,000+ SKUs in a virtualised, server-paged table.",
    responsibilities: [
      "Designed the stock ledger and document lifecycle (Draft → Posted / Cancelled) for goods receipts, goods issues, atomic warehouse transfers and stock-takes.",
      "Prevented overselling with row-version optimistic concurrency and a conflict-retry pipeline behaviour, proven by concurrent integration tests (6 parallel issues on 10 units → 3 accepted, 3 rejected, 1 left).",
      "Enforced non-negative stock in three layers (ledger check, domain Adjust, SQL CHECK constraint) and added Idempotency-Key support backed by a unique index.",
      "Wrote the Kardex report with a window-function running balance that stays correct across pages, plus a six-table dashboard stored procedure cached for 30 seconds in Redis with graceful fallback to the database.",
      "Built batch Excel import with a dry-run step, row-level error reporting and 500-row batches (10,000 rows in a few seconds), and filtered stock/Kardex exports.",
      "Added a background low-stock alert service with one open alert per product and warehouse, safe across multiple instances, and summarised notifications per warehouse.",
      "Built the React 19 front end: virtualised infinite stock table, one document form for four document types with live stock checks, catalogue screens, Kardex and a dashboard.",
      "Tested with 48 unit and 21 SQL Server integration tests plus 65 front-end tests; set up Docker Compose for dev and prod, GitHub Actions CI and CD to GHCR with SSH deploy.",
    ],
    technologies: [
      ".NET 10",
      "ASP.NET Core",
      "Clean Architecture",
      "MediatR / CQRS",
      "Entity Framework Core",
      "SQL Server",
      "Stored Procedures",
      "Redis",
      "Optimistic concurrency",
      "EPPlus / Excel",
      "ReactJS",
      "TypeScript",
      "shadcn/ui",
      "TanStack Query",
      "TanStack Virtual",
      "xUnit",
      "Testcontainers",
      "Vitest",
      "Docker Compose",
      "GitHub Actions",
    ],
    architecture: {
      description:
        "Built on the Helpdesk Clean Architecture template: a create-and-post request flows through validation and a conflict-retry behaviour into a document writer, a poster that turns documents into stock changes, and the single StockLedger — all committed in one SaveChanges transaction.",
      layers: [
        {
          title: "Client",
          nodes: [
            { label: "React 19 + shadcn/ui", kind: "client" },
            { label: "Virtualised stock table", kind: "client" },
          ],
        },
        {
          title: "Application",
          nodes: [
            { label: "Stock documents + ledger", kind: "service" },
            { label: "Conflict retry + idempotency", kind: "service" },
            { label: "Excel import / export", kind: "service" },
            { label: "Low-stock alert service", kind: "service" },
          ],
        },
        {
          title: "Data & Platform",
          nodes: [
            { label: "SQL Server + stored procedures", kind: "data" },
            { label: "Redis cache", kind: "data" },
            { label: "GHCR · Docker · GitHub Actions", kind: "external" },
          ],
        },
      ],
    },
    accent: "steel",
    coverImage: "/projects/inventory-warehouse.webp",
    repoUrl: "https://github.com/NguyenNgoThanhNha/Inventory-Warehouse",
  },
  {
    id: "solace-spa",
    title: "Solace SPA",
    subtitle: "AI-assisted Skincare Application",
    period: "01/2025 – 05/2025",
    role: "Backend Developer",
    confidential: false,
    categories: ["Backend", "Full-stack"],
    summary:
      "A smart skincare application with AI-assisted skin analysis, a progress-tracking dashboard and real-time chat between users and specialists.",
    highlights: ["ASP.NET Core", "SignalR", "Redis", "MongoDB", "Docker"],
    problem:
      "Skincare routines only work when they are followed and adjusted over time, which means users need to see their own progress and be able to reach a specialist when something changes.",
    solution:
      "An ASP.NET Core backend with a progress dashboard, a SignalR chat channel between users and specialists, and support for AI-driven skin analysis and personalised treatment suggestions — deployed with Docker Compose and GitHub Actions across MySQL, Redis and MongoDB.",
    responsibilities: [
      "Built the backend for a smart, AI-integrated skincare application.",
      "Developed a dashboard for tracking skincare progress.",
      "Implemented real-time chat between users and specialists.",
      "Supported skin analysis and personalised treatment recommendations.",
    ],
    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "SignalR",
      "MySQL",
      "Redis",
      "MongoDB",
      "Docker Compose",
      "GitHub Actions",
    ],
    architecture: {
      description:
        "A containerised ASP.NET Core service using a relational store for core data, Redis for caching and MongoDB for unstructured analysis results, with SignalR carrying the chat channel.",
      layers: [
        {
          title: "Client",
          nodes: [
            { label: "Web / mobile client", kind: "client" },
            { label: "SignalR chat", kind: "client" },
          ],
        },
        {
          title: "Application",
          nodes: [
            { label: "Skincare progress API", kind: "service" },
            { label: "Chat hub", kind: "service" },
            { label: "Analysis & recommendation", kind: "service" },
          ],
        },
        {
          title: "Data & Platform",
          nodes: [
            { label: "MySQL", kind: "data" },
            { label: "Redis cache", kind: "data" },
            { label: "MongoDB", kind: "data" },
          ],
        },
      ],
    },
    accent: "cyan",
    coverImage: "/projects/solace-spa.webp",
  },
];

export const featuredProjectIds = ["vasg-sales-portal", "mps-icrm", "cabin-crew"];
