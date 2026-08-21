# Task: Add About Page + Navbar Links + SEO Section

## Scope — READ CAREFULLY
Only touch the following. Do NOT modify, restyle, or refactor any other page,
component, or config in this repo.

1. **Add** a new About page at `app/about/page.jsx`
2. **Edit** the Navbar component only — add two nav links: `About`, `GitHub`
3. **Edit** the Home page only — insert one new "SEO Expertise" section
   (new component + one import/render line). No other section on Home changes.

Stack: Next.js (App Router), Tailwind CSS, Framer Motion — same as the rest
of this codebase. Match existing theme, spacing, and animation patterns
exactly (bordered card sections, dark boxed layout, fade-up on scroll).
Reuse existing shared components/utilities where they already exist instead
of creating new design tokens.

---

## 1. About Page

Create `app/about/page.jsx`. Reference implementation to adapt to this repo's
actual component/style conventions (className helpers, card wrapper, etc.):
see `reference/about-page.jsx` in this task folder.

Sections, in this order:
1. Header — "About Me" + short tagline
2. Bio (verbatim, don't rewrite the tone):
   > I'm Rohit, a MERN Stack Developer who builds scalable, real-time,
   > SEO-friendly web applications with React, Next.js, and Node.js. I care
   > about performance, security, and clean data handling — and I've spent
   > the last few months delivering production apps directly to freelance
   > clients, end to end.
3. Experience — Freelance MERN Stack Developer, Direct Clients, 3 months
   - Delivered 5 web apps (1 full-stack MERN, 4 React/Next.js frontend)
   - Set up CI/CD pipelines for automated builds/deployments
   - Designed REST APIs with JWT auth + role-based access control
4. Skills grid: React.js, Next.js, Node.js, Express.js, MongoDB, Redis,
   Tailwind CSS, REST APIs, JWT, WebSockets, GitHub Actions, Vercel,
   Cloudinary, SEO
5. Featured projects (2 cards):
   - **ChatNova** — Real-time chat app (Socket.IO), JWT auth, ~40% faster
     login (1.2s → 700ms) via Redis pipelining + server region move, React
     lazy-loading for smaller bundles.
     Link: https://chat-nova-frontend-4nna.vercel.app
   - **Recipe Riot** — Full-stack recipe sharing platform, RBAC, Cloudinary
     image uploads, search & filtering.
     Link: https://recipe-riot-frontend-aed5.vercel.app
6. Education — Bachelor of Computer Applications (BCA), 81%, 2020–2023
7. CTA block — reuse the exact same CTA component/markup already used on
   Home ("Have an idea? Let's build it." → Contact Me →). Do not create a
   new CTA component if one already exists.

Mobile-first: base styles target small screens, scale up with `sm:` / `md:`
breakpoints. Use Framer Motion `whileInView` fade-up on each section,
matching whatever easing/duration values are already used elsewhere in
this codebase (don't invent new ones).

---

## 2. Navbar

Add two links, positioned consistently with existing nav items:
- `About` → `/about` (internal route)
- `GitHub` → external link to Rohit's GitHub profile, `target="_blank"`,
  `rel="noopener noreferrer"`

If the navbar uses a links array/config, add entries there instead of
hardcoding JSX. Do not change existing nav items, styling, or mobile menu
behavior beyond adding these two entries.

---

## 3. Home Page — SEO Expertise Section

Add one new section, placed after the Tech Stack section and before
"How I Work". Reference implementation: `reference/seo-expertise.jsx`.

Three cards:
- **Technical SEO** — Semantic HTML, meta tags, sitemap & robots.txt,
  structured data, strong Core Web Vitals
- **On-Page SEO** — Optimized headings, alt text, clean crawlable content
  structure
- **Performance** — Lazy loading, code-splitting, Redis-backed APIs for
  fast page loads

Reuse the same card component/styling as the existing "What I Do" section
if one exists — don't build a parallel card system.

---

## Constraints

- No new npm dependencies (Framer Motion + Tailwind already in the project).
- No changes to `tailwind.config`, global styles, or any page other than
  Home (one section added) and the new About page.
- No changes to routing/layout files beyond what's needed to register the
  About route.
- Keep diffs minimal and scoped — this is an additive change, not a refactor.

## Done when
- [ ] `/about` route renders and matches site theme, mobile-first
- [ ] Navbar shows About + GitHub on both desktop and mobile menu
- [ ] Home page shows the new SEO Expertise section in the right position
- [ ] No other page/component was modified
