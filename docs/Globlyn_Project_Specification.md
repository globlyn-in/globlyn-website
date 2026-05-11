# Globlyn — Project & Technical Specification

This document serves as the comprehensive architectural, technical, and UI/UX blueprint for the **Globlyn** agency website. It outlines the structure, design system, and content strategy required to build and maintain the project.

---

## 1. Project Overview

*   **Project Name:** Globlyn
*   **Business Model:** Web Development & AI Automation Agency
*   **Core Value Proposition:** Building high-speed, SEO-optimized digital experiences and integrating intelligent AI workflows (chatbots, CRM syncs, 24/7 automation).
*   **Target Audience:** Forward-thinking businesses, startups, and enterprises looking to scale digitally.

---

## 2. Technical Architecture

The project utilizes a hybrid architectural approach to maximize landing page performance while maintaining complex application capabilities.

*   **Root Landing Page (`/index.html`):**
    *   Built with raw **HTML5, Vanilla CSS3, and Vanilla JavaScript**.
    *   *Why:* Ensures blazing-fast First Contentful Paint (FCP), perfect Core Web Vitals, and maximum SEO indexability without the overhead of JavaScript bundles.
*   **Web Application (`/app` directory):**
    *   Built with **React.js** (bootstrapped via Vite).
    *   *Why:* Handles complex, state-driven interactive components and internal dashboards.
*   **Styling Methodology:**
    *   Pure Vanilla CSS using CSS Variables (`:root`).
    *   No external CSS frameworks (like Tailwind or Bootstrap) are used, ensuring zero bloat and absolute control over the design system.

---

## 3. UI/UX Design System (The "Monochrome Editorial" Theme)

The visual identity is designed to evoke a premium, highly technical, and modern aesthetic. It relies on a strict, high-contrast monochrome palette.

### 3.1 Color Palette
*   **Primary Background (`--bg`):** Absolute Black (`#000000`)
*   **Surface / Card Background (`--surf`):** Deep Dark Grey (`#0a0a0a`)
*   **Primary Text (`--dark` / `--white`):** Pure White (`#ffffff`)
*   **Secondary / Body Text (`--body`):** Light Grey (`#d1d1d1`)
*   **Muted Text (`--muted`):** Medium Grey (`#888888` / `#aaaaaa`)
*   **Borders / Dividers (`--border`):** Subtle Grey (`#222222` / `#333333`)

### 3.2 Typography System
*   **Headings (`h1` - `h6`):** `Codec Cold` (Weights: 400, 600, 700, 800). Used for bold, modern, and premium visual impact.
*   **Body Content:** `Codec Cold` (Weights: 300, 400, 500, 600). Highly legible sans-serif for long-form text and descriptions.
*   **Accents, Eyebrows, & Tags:** `JetBrains Mono` (Weights: 400, 600). Adds a developer-centric, technical flair to metadata and small labels.

### 3.3 Interactive Elements
*   **Primary Buttons:** 
    *   *Default:* Black background, white text, solid white border (`1.5px solid #ffffff`).
    *   *Hover State:* Inverts completely (White background, black text).
*   **Cards (Bento Grids):**
    *   *Default:* `#0a0a0a` background, 1px `#222` border, sharp rounded corners (`14px` radius).
    *   *Hover State:* Smooth upward translation (`transform: translateY(-4px)`), subtle white glow (`box-shadow`), and border highlights.
*   **Navbar (Scrolled State):**
    *   Glassmorphic effect: `rgba(0, 0, 0, 0.95)` with `backdrop-filter: blur(12px)`.

---

## 4. Website Structure & Content Draft

Below is the sequential flow of the single-page landing experience.

### 0. Navigation Bar
*   **Logo:** Globlyn.
*   **Links:** Services, Portfolio, About, Blog, Pricing.
*   **CTA:** "Get Free Consultation" (Outlined button).
*   **Behavior:** Transparent at the top, becomes a sticky black glassmorphic bar on scroll.

### 1. Hero Section
*   **Visual:** Full-screen looping background video (`red_gradient_remix_remix_scene.webm`) overlaid with a dotted grid and subtle radial gradient glows.
*   **Eyebrow:** `[ WE BUILD DIGITAL EXPERIENCES THAT ]` (Monospace).
*   **Dynamic Headline:** Typewriter effect cycling through: *"Grow your business." / "Drive real results." / "Run on automation."*
*   **Sub-headline:** "Globlyn helps businesses transform digitally — through blazing-fast websites, intelligent AI automation, and performance-driven strategies..."
*   **CTA:** "🚀 Start Your Project"
*   **Trust Badges:** "✓ No Lock-in Contracts · ✓ 14-Day Delivery · ✓ Free Strategy Call"

### 2. Client Marquee
*   **Content:** Seamless, infinitely scrolling ribbon of partner/client logos or names (e.g., RetailEdge, StyleNest, FinTrack).

### 3. Services (What We Do)
*   **Layout:** 3-column Bento Grid.
*   **Cards:**
    1.  **Web Development:** Custom sites built for speed, SEO & conversion. *(Tags: Landing Pages, Next.js)*
    2.  **AI Automation:** Automate tasks, deploy chatbots, 24/7 workflows. *(Tags: n8n, OpenAI, CRM)*
    3.  **UI/UX Design:** Research-backed design that converts.
    4.  **E-Commerce:** High-converting stores on Shopify/WooCommerce.
    5.  **SEO & Performance:** Rank higher, load faster.
    6.  **Maintenance & Support:** Security, updates, uptime.

### 4. Portfolio (Our Work)
*   **Interactive Filters:** All, Web Dev, AI Automation, E-Commerce.
*   **Layout:** Grid of project cards featuring a cover image, category tag, project title, and a standout metric (e.g., "📈 300% organic traffic in 60 days").

### 5. Why Globlyn (Value Proposition)
*   **Layout:** 2x2 Grid.
*   **Selling Points:**
    *   **Speed Without Compromise:** 14-day delivery.
    *   **AI-First Thinking:** Automation evaluated for every project.
    *   **Measurable Results:** ROI-tracked, clear KPIs.
    *   **True Partnership:** No outsourcing, single point of contact.

### 6. Testimonials
*   **Layout:** Grid of quoted cards with large serif quotation marks.
*   **Content:** Authentic reviews highlighting time saved, revenue increased, and ease of communication. Includes client name, initials avatar, and company role.

### 7. Transparent Pricing
*   **Layout:** 3-Tier Pricing Table.
*   **Tiers:**
    1.  **Starter (₹24,999):** 5-page site, basic SEO, contact forms.
    2.  **Growth (₹59,999) [Most Popular]:** 10-page custom site, 1 AI chatbot, full SEO, CMS.
    3.  **Enterprise (Custom):** Full web app / SaaS, advanced AI suites, API integrations.

### 8. Technology Stack
*   **Visual:** Rows of monospace "pills" hovering in space.
*   **Stack Included:** React, Next.js, Node.js, Python, OpenAI GPT-4, LangChain, n8n, AWS, Vercel, Shopify, etc.

### 9. FAQ (Accordion)
*   Common questions addressed: Timeline (7-14 days), Global clients (Yes), AI tools used, Post-launch support (30 days included).

### 10. Blog / Insights
*   **Layout:** 3-column grid of recent articles.
*   **Content Types:** Educational pieces on AI Automation, Web Performance, and Case Studies.

### 11. Final CTA Banner
*   **Headline:** "Ready to Build Something Amazing?"
*   **Subtext:** "Book a free 30-minute strategy call. No pressure, no pitch..."
*   **Buttons:** "📅 Book Free Strategy Call" / "✉️ Send a Message"

### 12. Footer
*   **Layout:** 4-column link grid.
*   **Content:** Logo, Tagline ("Build. Automate. Grow."), Social Links, Service Links, Company Links, Direct Contact Info (Email/Phone). Copyright and legal links at the very bottom.

### 13. Floating Elements
*   **WhatsApp Widget:** Fixed bottom right for instant communication.
*   **Back to Top:** Appears on scroll.

---

## 5. Deployment & Build Instructions

1.  **Landing Page:** Directly serve `index.html`, `assets/`, and associated CSS files from the root.
2.  **React App (if deployed separately):**
    *   Navigate to `/app`
    *   Run `npm install`
    *   Run `npm run dev` for local development.
    *   Run `npm run build` to generate the production bundle.
