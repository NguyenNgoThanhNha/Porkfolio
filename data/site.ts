/**
 * Single source of truth for personal / contact information.
 * Update this file first — every section of the site reads from it.
 */

export const site = {
  name: "Nguyen Ngo Thanh Nha",
  role: "Backend Developer",
  roleSecondary: ".NET Engineer",
  headline: "Backend Developer | .NET Engineer",
  location: "Binh Thanh, Ho Chi Minh City",

  // TODO(verify): the source CV renders this address with a line break; double-check
  // the exact spelling before publishing.
  email: "nguyenngothanhnha2003kg@gmail.com",
  phone: "0945 550 056",
  phoneHref: "+84945550056",

  github: "https://github.com/NguyenNgoThanhNha",
  githubHandle: "NguyenNgoThanhNha",

  /** Served from /public — see public/NguyenNgoThanhNha_SoftwareDev.pdf */
  cvPath: "/NguyenNgoThanhNha_SoftwareDev.pdf",
  cvFileName: "NguyenNgoThanhNha_SoftwareDev.pdf",

  /** Used for canonical URLs, sitemap and Open Graph tags. */
  url: "https://nguyenngothanhnha.vercel.app",

  tagline:
    "I build the backbone of enterprise systems — RESTful APIs, approval workflows and third-party integrations with C# and ASP.NET Core.",

  summary: [
    "I am a Backend Developer specialising in C# and ASP.NET Core, with close to two years of hands-on experience building ERP and CRM platforms for the steel, seafood, aviation and human-resources industries.",
    "My day-to-day work centres on RESTful API design, multi-level approval workflows, and integrations with SAP, Microsoft Graph API and digital-signature providers — plus the background jobs and scheduling that keep those systems running quietly at night.",
    "I care about clean architecture: CQRS with MediatR, a clear separation between domain and infrastructure, and data access that stays predictable when several people touch the same record at the same time.",
  ],

  /** Short, factual highlights — no invented metrics. */
  facts: [
    { label: "Experience", value: "~2 years" },
    { label: "Core stack", value: "C# / ASP.NET Core" },
    { label: "Domains", value: "ERP · CRM · B2B" },
    { label: "Based in", value: "Ho Chi Minh City" },
  ],

  /** Rendered as the badge row under the hero. */
  heroBadges: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "SQL Server",
    "ReactJS",
    "Docker",
  ],
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
