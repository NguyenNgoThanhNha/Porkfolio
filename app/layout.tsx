import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/data/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-code",
});

const description =
  "Backend Developer specialising in C# and ASP.NET Core, building ERP, CRM and B2B systems with RESTful APIs, approval workflows and SAP / Microsoft Graph integrations.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.headline}`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "Backend Developer",
    ".NET Engineer",
    "ASP.NET Core",
    "C#",
    "Entity Framework Core",
    "CQRS",
    "MediatR",
    "SQL Server",
    "SAP integration",
    "ERP",
    "CRM",
    "Ho Chi Minh City",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.name} — ${site.headline}`,
    description,
    siteName: `${site.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.headline}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#060d18" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.headline,
  email: `mailto:${site.email}`,
  telephone: site.phoneHref,
  url: site.url,
  sameAs: [site.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ho Chi Minh City",
    addressCountry: "VN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "FPT University",
  },
  knowsAbout: [
    "C#",
    "ASP.NET Core",
    "Entity Framework Core",
    "CQRS",
    "SQL Server",
    "SAP integration",
    "ReactJS",
    "Docker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        {/* Scroll-reveal starts at opacity 0 and is switched on by an
            IntersectionObserver — without JavaScript the page must still be
            fully readable. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </ThemeProvider>
        <script
          type="application/ld+json"
          // Static, developer-authored JSON-LD — no user input involved.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
