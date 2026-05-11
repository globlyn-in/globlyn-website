# Globlyn — Project & Technical Specification
### "Void & Violet" — Clean Minimal 3D Experience
> Version 2.1 — React Edition | Senior Engineering Standard
> Status: Approved for Development

---

## 1. Design Philosophy

Globlyn v2.1 is built on a single governing principle: **restraint with impact.** The design draws from Apple's visual language — obsessive whitespace, typographic precision, and letting content breathe — but executed entirely in a dark void-and-violet palette.

> "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." — Antoine de Saint-Exupéry

Every element earns its place. No decorative noise. The 3D and animation work is purposeful, not performative — it should feel inevitable, not flashy.

---

## 2. Technical Architecture — Senior Engineering Standard

### 2.1 Framework & Core Stack

| Layer | Technology | Reason |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | RSC, file-based routing, built-in optimization, ISR for blog |
| **Language** | TypeScript (strict mode) | Type safety, better DX, self-documenting code |
| **Styling** | Tailwind CSS v3 + CSS Modules (hybrid) | Tailwind for layout/spacing utilities; CSS Modules for complex component states |
| **Animation** | Framer Motion 11 | Production-grade React animations, layout animations, gesture support |
| **3D** | React Three Fiber + @react-three/drei | Three.js declaratively in React, hero canvas scene |
| **Scroll** | Lenis (smooth scroll) + GSAP ScrollTrigger | Buttery inertial scroll, scroll-driven animations |
| **State** | Zustand | Lightweight global state (cursor, nav, filters) |
| **Icons** | Lucide React | Clean, consistent SVG icon library |
| **Forms** | React Hook Form + Zod | Type-safe form validation |
| **CMS (Blog)** | Contentlayer + MDX | Type-safe markdown, static blog posts |
| **Linting** | ESLint (Airbnb config) + Prettier | Code quality enforcement |
| **Testing** | Vitest + React Testing Library | Unit/component tests |

### 2.2 Project Structure (Next.js App Router)

```
globlyn/
├── app/
│   ├── layout.tsx              ← Root layout: fonts, providers, cursor, Lenis
│   ├── page.tsx                ← Landing page — composes all sections
│   ├── blog/
│   │   ├── page.tsx            ← Blog index
│   │   └── [slug]/page.tsx     ← Individual post (MDX)
│   └── globals.css             ← CSS custom properties + base reset
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── WhyGloblyn.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   └── CTABanner.tsx
│   ├── ui/
│   │   ├── GlassCard.tsx       ← Reusable glassmorphic card
│   │   ├── Button.tsx          ← Primary + outlined variants
│   │   ├── Tag.tsx             ← Monospace pill tag
│   │   ├── SectionLabel.tsx    ← Eyebrow text component
│   │   └── AnimatedText.tsx    ← Word-by-word reveal component
│   └── three/
│       ├── ParticleField.tsx   ← Hero R3F canvas
│       └── AuroraBlobs.tsx     ← CSS aurora background
│
├── hooks/
│   ├── useMouseParallax.ts
│   ├── useLenis.ts
│   └── useScrollProgress.ts
│
├── lib/
│   ├── fonts.ts                ← Next/font config
│   ├── constants.ts            ← Site-wide content data
│   └── utils.ts                ← cn() helper, etc.
│
├── content/
│   └── blog/                   ← MDX blog post files
│       ├── mobile-performance-guide.mdx
│       ├── n8n-automation-case-study.mdx
│       └── core-web-vitals-2025.mdx
│
├── public/
│   ├── images/
│   └── fonts/
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── contentlayer.config.ts
```

### 2.3 Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | > 95 |
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.0s |
| Cumulative Layout Shift | < 0.05 |
| Time to Interactive | < 3.0s |

**Strategies:**
- `React.lazy` + `Suspense` for Three.js canvas (heavy, code-split)
- `next/image` for all images (auto WebP, AVIF, lazy loading)
- `next/font` for zero-CLS font loading (self-hosted)
- `dynamic(() => import(...), { ssr: false })` for R3F and animation-heavy components
- ISR (`revalidate: 3600`) for blog pages

---

## 3. "Void & Violet" Design System

### 3.1 Design Principles

1. **Negative space is the loudest design element** — sections breathe with generous padding (`120px` vertical on desktop)
2. **One accent, infinite depth** — violet is the only color, used sparingly and purposefully
3. **Typography does the heavy lifting** — layout, hierarchy, and contrast are achieved through type alone, not decorative elements
4. **Motion is structural** — animations reveal hierarchy, they don't decorate it
5. **Glass surfaces float, they don't stack** — glassmorphism creates depth through translucency, not shadows alone

### 3.2 Color Tokens

```ts
// tailwind.config.ts — extend colors
colors: {
  void:    '#000000',
  deep:    '#05020f',
  surface: '#0d0818',

  violet: {
    dim:    '#3b0764',
    core:   '#7c3aed',
    bright: '#a855f7',
    glow:   '#c084fc',
    ghost:  'rgba(124, 58, 237, 0.08)',
  },

  text: {
    primary: '#ffffff',
    body:    '#c4b5d4',
    muted:   '#6b5f7a',
    accent:  '#a855f7',
  },

  glass: {
    bg:     'rgba(13, 8, 24, 0.55)',
    border: 'rgba(168, 85, 247, 0.18)',
  }
}
```

```css
/* globals.css — CSS custom properties */
:root {
  --bg-void:        #000000;
  --bg-deep:        #05020f;
  --bg-surface:     #0d0818;

  --violet-core:    #7c3aed;
  --violet-bright:  #a855f7;
  --violet-glow:    #c084fc;
  --violet-dim:     #3b0764;

  --grad-accent:    linear-gradient(90deg, #7c3aed, #a855f7, #c084fc);
  --grad-card:      linear-gradient(145deg, rgba(124,58,237,0.06), rgba(168,85,247,0.02));

  --glass-bg:       rgba(13, 8, 24, 0.55);
  --glass-border:   rgba(168, 85, 247, 0.15);
  --glass-blur:     blur(20px) saturate(150%);
  --glass-shadow:   0 8px 48px rgba(124, 58, 237, 0.12);

  --text-primary:   #ffffff;
  --text-body:      #c4b5d4;
  --text-muted:     #6b5f7a;
  --text-accent:    #a855f7;

  --border-subtle:  rgba(124, 58, 237, 0.10);
  --border-active:  rgba(168, 85, 247, 0.40);

  --radius-card:    18px;
  --radius-pill:    100px;

  /* Spacing scale (8pt grid) */
  --space-xs:   8px;
  --space-sm:   16px;
  --space-md:   32px;
  --space-lg:   64px;
  --space-xl:   96px;
  --space-2xl:  144px;
}
```

### 3.3 Typography System — Apple-Grade Precision

**Governing Rule:** Typography is the UI. Every size, weight, and line-height decision is deliberate.

| Role | Font | Size (desktop) | Weight | Line Height | Tracking |
|---|---|---|---|---|---|
| **Hero Display** | Bricolage Grotesque | clamp(52px, 6vw, 96px) | 800 | 1.0 | -0.04em |
| **Section Headline** | Bricolage Grotesque | clamp(32px, 4vw, 56px) | 700 | 1.1 | -0.03em |
| **Card Title** | Bricolage Grotesque | 22px | 600 | 1.2 | -0.02em |
| **Body / UI** | Geist | 17px | 400 | 1.65 | -0.01em |
| **Body Small** | Geist | 15px | 400 | 1.6 | 0 |
| **Eyebrow / Tag** | Geist Mono | 12px | 500 | 1 | 0.10em |
| **Nav Links** | Geist | 15px | 450 | 1 | -0.005em |

> **Bricolage Grotesque** — a contemporary grotesque with optical personality, not sterile. Pairs the warmth of humanist typefaces with the authority of geometric ones. Perfect for premium dark-theme headings.
>
> **Geist** — Vercel's open-source typeface. Engineered for digital interfaces. Exceptional legibility, neutral but refined. Available via `next/font/google`.
>
> **Geist Mono** — the monospaced companion. Used exclusively for tags, eyebrows, and technical metadata.

```ts
// lib/fonts.ts
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

// Bricolage Grotesque via Google Fonts
import { Bricolage_Grotesque } from 'next/font/google';
export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});
```

### 3.4 Glass Panel Component Spec

```tsx
// components/ui/GlassCard.tsx
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;      // Enable 3D tilt
  glow?: boolean;      // Enable violet glow on hover
}
```

```css
/* Base glass panel */
.glass-panel {
  background:              var(--glass-bg);
  backdrop-filter:         var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border:                  1px solid var(--glass-border);
  border-radius:           var(--radius-card);
  box-shadow:              var(--glass-shadow),
                           inset 0 1px 0 rgba(255, 255, 255, 0.04);
  transition:              border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
}

/* Hover — precise, not dramatic */
.glass-panel:hover {
  border-color: rgba(168, 85, 247, 0.35);
  box-shadow:   0 16px 56px rgba(124, 58, 237, 0.18),
                inset 0 1px 0 rgba(255, 255, 255, 0.07);
}

/* @supports fallback for no backdrop-filter */
@supports not (backdrop-filter: blur(1px)) {
  .glass-panel { background: rgba(13, 8, 24, 0.92); }
}
```

### 3.5 Motion System (Framer Motion)

```ts
// lib/motion.ts — reusable variants
export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};
```

**Universal scroll trigger pattern:**
```tsx
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
>
```

---

## 4. Section Specifications

### Section 0: Navbar

**Behavior:** Fixed, transparent on load → glassmorphic on scroll (`scrollY > 50`).

**Logo:** "Globlyn." — `font-bricolage font-bold text-white`, with the period in `text-violet-bright`.

**Links:** Services · Portfolio · About · Blog

**CTA:** "Get Free Consultation" — outlined glass button

**Mobile:** Hamburger → full-screen glass drawer with `AnimatePresence` slide-in.

---

### Section 1: Hero — CONTENTS UNCHANGED

**Visual Background Stack:**
- Layer 0 → `bg-deep` body base
- Layer 1 → R3F `<ParticleField />` canvas, lazy-loaded, 120 particles (40 mobile)
- Layer 2 → CSS aurora blobs (2 animated `div`, blurred radial gradients, slow drift keyframes)
- Layer 3 → SVG dotted grid overlay, 8% opacity

**Content — verbatim from original spec:**

```
Eyebrow (JetBrains Mono, 12px, tracked):
[ WE BUILD DIGITAL EXPERIENCES THAT ]

Headline (Bricolage Grotesque, 800, clamp):
Digitally Engineered
for businesses that
[Typewriter: "refuse to stand still." / "scale without limits." / "run on automation."]

Sub-headline (Geist, 17px, text-body):
Globlyn helps businesses transform digitally — through blazing-fast websites,
intelligent AI automation, and performance-driven strategies...

CTAs:
[🚀 Start Your Project]    [Watch Showreel ▶]

Trust Badges (Geist Mono, 12px, muted):
✓ No Lock-in Contracts  ·  ✓ 14-Day Delivery  ·  ✓ Free Strategy Call
```

**Animation (GSAP timeline on mount):**
```ts
gsap.timeline({ defaults: { ease: 'power3.out' } })
  .from('.hero-eyebrow',  { y: 16, opacity: 0, duration: 0.5 })
  .from('.hero-h1 .line', { y: 48, opacity: 0, duration: 0.8, stagger: 0.12 }, '-=0.2')
  .from('.hero-sub',      { y: 16, opacity: 0, duration: 0.6 }, '-=0.4')
  .from('.hero-ctas',     { y: 16, opacity: 0, duration: 0.5 }, '-=0.3')
  .from('.hero-badges',   { opacity: 0, duration: 0.4 }, '-=0.2');
```

---

### Section 2: Client Marquee

CSS infinite scroll marquee. Single row, JetBrains Mono, `text-muted` tint, `·` separators, pauses on hover. Bounded above and below by `1px` `border-subtle` lines.

---

### Section 3: Services — "What We Build"

**Asymmetric Bento Grid (CSS Grid):**

```
Desktop (6 cells, 3-col):
┌─────────────────────┬───────────┐
│  Web Development    │  AI       │
│  (col-span-2)       │  Auto     │
├─────────┬───────────┴───────────┤
│ UI/UX   │  E-Commerce           │
│ Design  │  (col-span-2)         │
├─────────┴──────────┬────────────┤
│  SEO & Performance │ Maintenance│
└────────────────────┴────────────┘
```

**Each Card:**
- Glass panel base
- Top: Large SVG icon (48px, `text-violet-bright`) + index `01`–`06` in Geist Mono (top-right, muted)
- Middle: Title in Bricolage Grotesque 600 22px
- Bottom: Description in Geist 15px + tag pills in Geist Mono
- Hover: Framer Motion `whileHover={{ y: -6 }}` + border glow via CSS class toggle
- 3D tilt: `@vangware/tilt` (React-compatible tilt library)

---

### Section 4: Portfolio — "Our Work"

**Two Cards Only:**

**Card 1 — StyleNest E-Commerce Revamp**
- Category tag: `E-Commerce`
- Headline: "StyleNest — From Invisible to Industry Leader"
- Metric: `📈 +300% organic traffic in 60 days`
- Stack tags: `Next.js` · `Shopify` · `Framer Motion`
- Cover: Placeholder gradient image (deep violet to black)

**Card 2 — FinTrack AI Dashboard**
- Category tag: `AI Automation`
- Headline: "FinTrack — 40hrs of Weekly Admin, Automated"
- Metric: `⚡ 40 hours saved per week`
- Stack tags: `n8n` · `OpenAI GPT-4` · `React`
- Cover: Placeholder gradient image (indigo to deep)

**Layout:** Two cards side-by-side, equal width, generous gap. Each card 100% height with hover image zoom + glass overlay reveal on hover.

**Filter bar:** Retained but only shows relevant active categories.

---

### Section 5: Why Globlyn — "Our Edge"

**Philosophy:** Lead with numbers. Clients don't read paragraphs — they read proof.

**Layout:** 2×2 primary stats grid + a secondary horizontal stat strip below.

**Primary Grid (4 large KPI cards):**

| Stat | Number | Label | Sub-note |
|---|---|---|---|
| 🚀 | `14` Days | Average Delivery | From kickoff to live |
| 📈 | `3.8×` ROI | Average Client Return | Measured over 6 months |
| ⭐ | `98%` | Client Satisfaction | Across 40+ projects |
| 🤖 | `40hrs` | Weekly Time Saved | Per AI automation client |

**Secondary Stat Strip (horizontal row below):**

| Number | Label |
|---|---|
| `40+` | Projects Delivered |
| `12+` | Countries Served |
| `< 1.2s` | Avg Page Load Time |
| `30 Days` | Free Post-Launch Support |
| `0` | Missed Deadlines |

**Animation:** GSAP `CountTo` animation for all numbers on scroll-enter. Numbers count up from 0 with an ease-out curve. Triggers once via `ScrollTrigger`.

**Design:** Each KPI card is a glass panel. Number in Bricolage Grotesque 700, 56px, white. Label in Geist 16px, `text-body`. Sub-note in Geist Mono 12px, `text-muted`.

**Section callout (above the grid):**
```
Eyebrow:   [ THE NUMBERS DON'T LIE ]
Headline:  Results you can
           actually measure.
Sub:       Every project ships with clear KPIs and measurable outcomes.
           We don't celebrate launches — we celebrate your growth.
```

---

### Section 6: Testimonials

**Layout unchanged from original spec** — grid of quoted glass cards with large serif quotation marks.

**Grid:** 3-column on desktop, 1-column on mobile.

**Each Card:**
- Glass panel base
- Large `"` quotation mark — Bricolage Grotesque 800, `text-violet-glow`, 72px, decorative
- Quote text — Geist italic 17px, `text-body`, line-height 1.7
- Client row: initials avatar (glass circle, violet-bordered) + name in Geist 500 + role in Geist Mono 12px `text-muted`

**Testimonials Content:**

```
1. "Globlyn delivered our new site in 11 days flat.
    The performance scores alone justified every rupee."
   — Arjun Mehta, Founder @ RetailEdge

2. "The AI automation they built saved our ops team
    two full working days every single week. Mind-blowing."
   — Priya Nair, COO @ FinTrack

3. "Most agencies overpromise. Globlyn underplayed it.
    We hit page one on Google within 45 days of launch."
   — Daniel Osei, Head of Growth @ StyleNest

4. "Working with them felt like having a tech co-founder,
    not a vendor. That's rare at this price point."
   — Sarah Lin, CEO @ LaunchPad SaaS

5. "The chatbot they deployed handles 70% of our
    support tickets automatically. Our team finally sleeps."
   — Rahul Verma, CTO @ QuickServe

6. "First site we've ever built that actually converted.
    Up 220% in leads within the first month."
   — Meera Krishnan, Marketing Director @ NovaBrands
```

---

### Section 7: Blog / Insights — "From the Studio"

**Layout:** 3-column grid, staggered fade-in on scroll.

**Three genuine blog posts based on Globlyn's services:**

---

**Post 1 — Web Development**
- **Slug:** `/blog/mobile-performance-guide`
- **Title:** Why 70% of Your Mobile Visitors Leave in 3 Seconds (And the Exact Fix)
- **Category:** `Web Performance`
- **Read Time:** `7 min read`
- **Date:** `May 2025`
- **Excerpt:** Most business websites fail on mobile not because of bad design — but because of avoidable technical debt. Here's the exact checklist we run on every client project, and the issues we find almost every single time.
- **Topics Covered:** Core Web Vitals, image optimization, font loading strategy, render-blocking scripts, LCP targets
- **Canonical SEO Value:** Targets "mobile website performance" and "improve website speed" — high-intent search terms for Globlyn's web dev service

---

**Post 2 — AI Automation**
- **Slug:** `/blog/n8n-automation-case-study`
- **Title:** How We Automated 40 Hours of Weekly Admin for a Retail Client Using n8n
- **Category:** `AI Automation`
- **Read Time:** `9 min read`
- **Date:** `April 2025`
- **Excerpt:** A walkthrough of the exact n8n workflow we built for a mid-size retail client — from CRM data sync and invoice generation to WhatsApp follow-up sequences — all triggered automatically without a single line of custom code.
- **Topics Covered:** n8n workflow design, OpenAI integration for classification, CRM webhook triggers, ROI calculation framework
- **Canonical SEO Value:** Targets "n8n automation agency" and "AI workflow automation for business" — directly tied to Globlyn's AI service line

---

**Post 3 — SEO & Performance**
- **Slug:** `/blog/core-web-vitals-2025`
- **Title:** Core Web Vitals in 2025: The Technical SEO Checklist We Use on Every Project
- **Category:** `SEO & Performance`
- **Read Time:** `6 min read`
- **Date:** `March 2025`
- **Excerpt:** Google's ranking signals have shifted again. If your website isn't passing the 2025 Core Web Vitals thresholds, you're losing rankings to competitors who are. Here's the exact checklist we follow — and the tools we use to verify it before any site goes live.
- **Topics Covered:** INP (Interaction to Next Paint), LCP optimization, CLS prevention, real-user monitoring tools, PageSpeed Insights API
- **Canonical SEO Value:** Targets "technical SEO checklist 2025" — pulls in decision-makers actively researching SEO agencies

---

**Blog Card Design:**
- Category tag: Geist Mono pill, violet-tinted border
- Title: Bricolage Grotesque 600, 20px
- Excerpt: Geist 15px, `text-body`, 2-line clamp
- Bottom: `Read Time` + `Date` in Geist Mono 12px `text-muted` + hover-reveal arrow `→` in `text-violet-bright`
- Hover: Title color shifts to `text-violet-bright`, card lifts `translateY(-4px)`

---

### Section 8: CTA Banner — Minimal & Clean

**Philosophy:** No aurora blobs. No gradients. Just typography and a `1px` violet line at the top of the section. The restraint IS the message.

```
Section:
  ─────────────────────────── (1px border-subtle line)

  Eyebrow (Geist Mono, 12px, violet):
  [ LET'S BUILD SOMETHING ]

  Headline (Bricolage Grotesque, 700, clamp 40–72px):
  Ready when you are.

  Sub (Geist, 17px, text-muted):
  Free 30-minute strategy call. No pitch decks. No pressure.
  Just an honest conversation about your goals.

  Buttons (side by side, centered):
  [📅 Book Free Call]    [✉️ Send a Message]
```

**Background:** `bg-deep` — absolutely flat, no effects. Let the typography command the space.

**Padding:** `py-[144px]` — generous vertical space for the content to breathe.

---

### Section 9: Footer

**4-column layout:**
- Col 1: Logo + "Build. Automate. Grow." tagline + social icons (GitHub, LinkedIn, Twitter/X, Instagram)
- Col 2: Services (Web Dev, AI Automation, UI/UX, E-Commerce, SEO, Maintenance)
- Col 3: Company (About, Portfolio, Blog, Careers, Contact)
- Col 4: Contact (email, phone, location)

**Bottom bar:** `1px border-subtle` separator. Copyright left, legal links right. Both Geist Mono 12px `text-muted`.

---

### Floating Elements

| Element | Spec |
|---|---|
| **WhatsApp** | Fixed bottom-right, circular glass button, violet pulse ring animation, `z-50` |
| **Back to Top** | Glass pill, appears after 600px scroll, `AnimatePresence` fade, violet arrow icon |
| **Custom Cursor** | Small `4px` white dot + `32px` transparent violet ring with `lerp` lag (JS), scales on hover of interactive elements |

---

## 5. Responsive Design

| Breakpoint | Behavior |
|---|---|
| `2xl` (≥1536px) | Max-width container `1280px`, centered |
| `xl` (≥1280px) | Full desktop layout |
| `lg` (≥1024px) | 2-col bento, reduced hero padding |
| `md` (≥768px) | Tablet: 2-col grids, nav collapses |
| `sm` (< 768px) | Mobile: all single-column, R3F canvas hidden (CSS bg fallback), tilt disabled |

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Accessibility Standards

- All interactive elements keyboard-navigable with visible `:focus-visible` ring (`outline: 2px solid var(--violet-bright)`)
- Minimum contrast ratio: **4.5:1** for all body text (WCAG AA)
- `prefers-color-scheme` not needed (dark-only), but `prefers-contrast: more` respected
- All images have `alt` attributes
- ARIA landmarks on all sections
- `motion.div` animations respect `prefers-reduced-motion` via Framer Motion's `useReducedMotion()` hook

---

## 7. Deployment Pipeline

```
GitHub (main) → Vercel CI/CD → Preview URL per PR → Production on merge

├── Environment Variables managed via Vercel dashboard
├── Analytics: Vercel Analytics + Speed Insights
├── Domain: Custom domain, HTTPS enforced, HSTS header
└── Blog: ISR with revalidate: 3600 (refreshes every hour)
```

---

## 8. Development Phases

| Phase | Scope | Estimated Time |
|---|---|---|
| **Phase 1** | Setup: Next.js, TypeScript, Tailwind, fonts, design tokens, `GlassCard`, `Button`, `SectionLabel` | Day 1 |
| **Phase 2** | Navbar + Hero (R3F canvas, GSAP timeline, Typed.js) | Day 2–3 |
| **Phase 3** | Marquee + Services (bento grid, tilt, icons) | Day 4 |
| **Phase 4** | Portfolio (2 cards) + Why Globlyn (GSAP counters) | Day 5 |
| **Phase 5** | Testimonials + Blog section | Day 6 |
| **Phase 6** | CTA Banner + Footer + Floating elements | Day 7 |
| **Phase 7** | Responsive CSS, accessibility audit, performance optimization | Day 8–9 |
| **Phase 8** | Blog MDX setup (Contentlayer), 3 posts published | Day 10 |
| **Phase 9** | QA, cross-browser testing, Lighthouse audit, deploy | Day 11–14 |

---

*Globlyn v2.1 — "Void & Violet" Clean Minimal Edition*
*Engineered for performance. Designed for conversion. Built to impress.*
