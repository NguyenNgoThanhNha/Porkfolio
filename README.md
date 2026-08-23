# Portfolio — Nguyen Ngo Thanh Nha

Personal portfolio site for **Nguyen Ngo Thanh Nha**, Backend Developer / .NET Engineer.

Built with **Next.js (App Router) · TypeScript · Tailwind CSS v4 · Lucide Icons**.

---

## Getting started

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open <http://localhost:3000>.

Production build and preview:

```bash
npm run build
npm run start
```

Type-check without emitting:

```bash
npm run typecheck
```

---

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, JSON-LD, theme provider
  page.tsx              Section composition for the single-page site
  globals.css           Design tokens (light + dark) and Tailwind v4 theme
  opengraph-image.tsx   Social preview card, generated at build time
  sitemap.ts robots.ts  SEO route handlers

components/
  site-header.tsx       Sticky nav, scroll-spy, mobile menu, theme toggle
  hero.tsx              Hero section + code panel (stands in for a photo)
  about.tsx             About Me + "How I work" + portrait
  skills.tsx            Technical Skills, grouped by discipline
  experience.tsx        Experience timeline
  projects.tsx          Project grid with category filter
  project-modal.tsx     Project detail dialog (focus trap, Esc to close)
  project-mockup.tsx    Abstract SVG wireframe used instead of screenshots
  architecture-diagram.tsx  Simple layered architecture schematic
  engineering-focus.tsx Architecture & Engineering Focus
  education.tsx         Education & Achievement
  contact.tsx           Contact channels + CV download
  site-footer.tsx       Footer
  reveal.tsx            IntersectionObserver scroll reveal
  section.tsx           Shared section shell (eyebrow / title / description)
  tech-badge.tsx        Technology chip
  icons.tsx             Inline GitHub mark (lucide v1 dropped brand icons)

data/
  site.ts               Name, contact details, CV path, hero copy  ← edit first
  skills.ts             Technical skill groups + soft skills
  experience.ts         Timeline entries, education, achievements
  projects.ts           Project details, architecture layers, categories
  engineering.ts        Architecture / engineering focus areas

public/
  NguyenNgoThanhNha_SoftwareDev.pdf   Served by the "Download CV" buttons
  portrait.jpg                        About Me portrait
```

---

## Editing content

All copy lives in `data/` — no text is hard-coded inside components.

| Want to change…             | Edit                                        |
| --------------------------- | ------------------------------------------- |
| Name, email, phone, GitHub  | `data/site.ts`                              |
| Hero tagline and badges     | `data/site.ts`                              |
| Skills                      | `data/skills.ts`                            |
| Timeline entries            | `data/experience.ts`                        |
| Projects and architecture   | `data/projects.ts`                          |
| Colours / dark-light tokens | `app/globals.css` (`:root` and `.dark`)     |

### Before publishing

1. **Verify the email address** in `data/site.ts` — it is marked with a
   `TODO(verify)` comment because the source CV renders it across a line break.
2. **Set `site.url`** in `data/site.ts` to the real domain; canonical URLs, the
   sitemap and Open Graph tags all derive from it.
3. **Assets**
   - Portrait: `public/portrait.jpg`, rendered by `Portrait` in
     `components/about.tsx`. Replace the file to change the photo — the crop is
     `object-cover object-top` inside a 4:5 frame, so use a portrait-orientation
     image with the face in the upper half.
   - Project visuals: `components/project-mockup.tsx` draws a deliberately
     abstract wireframe because the client systems are confidential. Only swap in
     real screenshots that you are permitted to publish.

---

## Design notes

- **Palette** — navy, steel blue and a cyan accent, defined once as CSS custom
  properties in `app/globals.css` and exposed to Tailwind through `@theme inline`.
- **Dark / light mode** — `next-themes` with `attribute="class"`; dark is the
  default and the system preference is respected. The toggle lives in the header.
- **Motion** — a single fade-and-rise on scroll, disabled entirely under
  `prefers-reduced-motion: reduce`. A `<noscript>` rule keeps everything visible
  when JavaScript is off.
- **Accessibility** — skip link, visible focus rings, labelled landmarks,
  `aria-pressed` filters, a live region for the project count, and a modal with a
  focus trap that restores focus on close.
- **SEO** — per-page metadata, canonical URL, `Person` JSON-LD, generated Open
  Graph image, `sitemap.xml` and `robots.txt`.
- **Confidentiality** — every client project is flagged `confidential` in
  `data/projects.ts`; cards show a wireframe and the copy stays at architecture
  level. No real data, screenshots or customer names appear anywhere.

---

## Deploying

The site is fully static apart from the generated OG image, so any Node host
works. On Vercel: import the repository, keep the defaults (`npm run build`), and
set the production domain to whatever you put in `site.url`.
