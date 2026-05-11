# Website Design Document
## Ivory + Charcoal Theme

---

## 🎨 Design Philosophy

A **refined editorial aesthetic** — the kind you'd find in a luxury print magazine or a high-end architecture portfolio. The tension between warm ivory and cool charcoal creates a timeless, sophisticated tension. No gradients. No noise. Just disciplined typography, deliberate whitespace, and subtle texture.

**Tone:** Luxury / Refined / Editorial  
**Feel:** Print-inspired, tactile, authoritative  
**Mood Board Words:** linen, ink, marble, silence, precision

---

## 🖌️ Color Palette

| Role              | Name           | Hex       | Usage                                      |
|-------------------|----------------|-----------|---------------------------------------------|
| Background        | Ivory          | `#FFFFF0` | Page background, card fills                |
| Surface           | Warm Cream     | `#FAF7F0` | Section alternates, input fields           |
| Primary Text      | Charcoal       | `#2B2B2B` | Headings, body text, labels                |
| Secondary Text    | Ash            | `#5C5C5C` | Subtitles, captions, metadata              |
| Muted             | Pale Smoke     | `#D6D0C4` | Dividers, borders, inactive states        |
| Accent            | Deep Charcoal  | `#1A1A1A` | Buttons, hover states, strong contrast     |
| Highlight         | Warm Gold      | `#C9A84C` | CTAs, underlines, icons, active links      |

```css
:root {
  --ivory:       #FFFFF0;
  --cream:       #FAF7F0;
  --charcoal:    #2B2B2B;
  --ash:         #5C5C5C;
  --smoke:       #D6D0C4;
  --ink:         #1A1A1A;
  --gold:        #C9A84C;
}
```

---

## 🔤 Typography

| Role           | Font              | Weight      | Size            |
|----------------|-------------------|-------------|-----------------|
| Display/Hero   | **Cormorant Garamond** | 300–700 | 64px–96px       |
| Section Titles | **Playfair Display**   | 500     | 32px–48px       |
| Body Text      | **Lora**               | 400     | 16px–18px       |
| UI / Labels    | **Jost**               | 300–500 | 12px–14px       |
| Captions       | **Jost**               | 300 italic | 12px          |

- Line height (body): `1.8`
- Letter spacing (headings): `-0.02em`
- Letter spacing (labels/UI): `0.12em` (tracked out for elegance)

---

## 📐 Layout Structure

### Grid System
- **12-column grid**, 24px gutters
- Max content width: `1280px`
- Side margins: `clamp(24px, 6vw, 120px)`
- Section vertical rhythm: `120px` top/bottom padding

---

## 🗂️ Page Sections

---

### 1. NAVIGATION BAR

```
┌───────────────────────────────────────────────────────────────┐
│  [LOGO WORDMARK]              Home  Work  About  Journal  [CTA]│
│  ─────────────────────────────────────────────────────── gold ─│
└───────────────────────────────────────────────────────────────┘
```

- **Background:** Ivory (`#FFFFF0`) with a 1px bottom border in Smoke
- **Logo:** Cormorant Garamond, Charcoal, 22px, letter-spaced
- **Nav links:** Jost 400, 13px, uppercase, tracked `0.1em`, Ash color → Charcoal on hover
- **CTA Button:** Outlined — Charcoal border + text, fills to Ink on hover with Ivory text
- **Sticky behavior:** Slight backdrop blur on scroll (`backdrop-filter: blur(8px)`)
- **Mobile:** Hamburger → full-screen overlay in Charcoal with Ivory text

---

### 2. HERO SECTION

```
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│   [Overline label — small gold uppercase text]                │
│                                                               │
│   Extraordinary                                               │
│   Design Starts                    ┌──────────────────────┐  │
│   Here.                            │                      │  │
│                                    │   [Hero Image —      │  │
│   [Short descriptor paragraph]     │    portrait crop,    │  │
│                                    │    charcoal frame]   │  │
│   [Primary CTA]   [Secondary CTA]  │                      │  │
│                                    └──────────────────────┘  │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

- **Layout:** Asymmetric two-column — text 55%, image 45%
- **Heading:** Cormorant Garamond 700, 80px, Charcoal, line-height 1.05
- **Overline:** Jost 400, 11px, Gold, `letter-spacing: 0.2em`, uppercase
- **Body text:** Lora, 17px, Ash
- **Image frame:** 2px solid Charcoal border, slightly offset (6px translate) for depth effect
- **Primary CTA:** Solid Charcoal background, Ivory text, Jost 500 13px, `padding: 14px 32px`
- **Secondary CTA:** Underline only, Gold color, Jost 400
- **Scroll indicator:** Thin vertical line + down arrow in Gold, bottom-center

---

### 3. SERVICES / FEATURES STRIP

```
┌───────────────────────────────────────────────────────────────┐
│  ─── 01 Strategy ────── 02 Design ────── 03 Development ───  │
│       Ash line separator between each with Gold dot accent     │
└───────────────────────────────────────────────────────────────┘
```

- **Background:** Cream (`#FAF7F0`)
- **Layout:** Horizontal 3-column flex row, center-aligned, full width
- **Number:** Jost 300, 11px, Gold, uppercase
- **Title:** Playfair Display 500, 22px, Charcoal
- **Dividers:** 1px vertical Smoke lines between columns
- **Hover:** Gold underline slides in from left on service title

---

### 4. ABOUT / INTRO SECTION

```
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│   ┌──────────────────┐    We don't follow trends.            │
│   │                  │    We set the standard.               │
│   │   [Square Image] │                                       │
│   │   with thin      │    [3-paragraph body text]            │
│   │   charcoal       │                                       │
│   │   border]        │    [Stat: 120+]  [Stat: 8yrs]         │
│   └──────────────────┘    Projects     Experience            │
│                                                               │
│                           [Learn More →]                      │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

- **Layout:** 2-column, image left, text right, 5:7 ratio
- **Pull quote:** Cormorant Garamond italic, 36px, Charcoal
- **Stats:** Playfair Display 700, 48px, Charcoal + Jost 400 12px, Ash label below
- **Link:** Arrow → animates right on hover, Gold color

---

### 5. PORTFOLIO / WORK GRID

```
┌───────────────────────────────────────────────────────────────┐
│  Selected Work                    [View All →]                │
│  ────────────────────────────────────────────────────────     │
│                                                               │
│   ┌─────────────────────┐   ┌─────────────────────┐         │
│   │   [Project Image]   │   │   [Project Image]   │         │
│   │   tall card         │   │   short card        │         │
│   └─────────────────────┘   ├─────────────────────┤         │
│   Project Name              │   [Project Image]   │         │
│   Category · Year           │   short card        │         │
│                             └─────────────────────┘         │
│                             Project Name                     │
│                             Category · Year                  │
└───────────────────────────────────────────────────────────────┘
```

- **Layout:** Masonry-style, 2-column asymmetric grid
- **Card hover:** Charcoal overlay fades in at 85% opacity, Ivory title appears
- **Image border:** None by default; 2px Charcoal border slides in on hover
- **Category label:** Jost 300, 11px, Gold, uppercase
- **Project name:** Playfair Display 500, 20px, Charcoal

---

### 6. TESTIMONIALS / QUOTE SECTION

```
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│   ❝                                                          │
│                                                               │
│   Working with them transformed how we present ourselves     │
│   to the world. The result was beyond expectation.           │
│                                                               │
│   — Sarah Chen, Creative Director at Luminis                 │
│                                                               │
│              ○  ●  ○  ○   (carousel dots)                    │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

- **Background:** Charcoal (`#2B2B2B`)
- **Quote mark:** Cormorant Garamond, 120px, Gold, opacity 0.3
- **Quote text:** Cormorant Garamond italic, 28px, Ivory, centered
- **Attribution:** Jost 300, 13px, Pale Smoke, `letter-spacing: 0.08em`
- **Carousel dots:** Gold (active), Smoke (inactive)

---

### 7. CONTACT / CTA SECTION

```
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│   Let's build something                                       │
│   remarkable together.                                        │
│                                                               │
│   [Your Name ________________]  [Your Email ______________]  │
│                                                               │
│   [Your Message ____________________________________________] │
│   [____________________________________________]              │
│                                                               │
│                              [Send Message →]                 │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

- **Background:** Cream (`#FAF7F0`)
- **Heading:** Cormorant Garamond 300, 56px, Charcoal, line-height 1.1
- **Inputs:** No background, bottom-border only (1px Smoke → Gold on focus), Lora 16px
- **Submit button:** Full-width Charcoal → Ink on hover, Ivory text, Jost 500 13px

---

### 8. FOOTER

```
┌───────────────────────────────────────────────────────────────┐
│  [LOGO]                                                       │
│  ─────────────────────────────────────────── 1px Gold line ──│
│  © 2026 Studio Name   Privacy · Terms   [IG] [LI] [TW]       │
└───────────────────────────────────────────────────────────────┘
```

- **Background:** Ink (`#1A1A1A`)
- **Logo + text:** Ivory, Jost 300
- **Gold rule:** 1px top border in Gold above footer content
- **Social icons:** Outline style, Smoke → Gold on hover
- **Links:** Jost 300, 12px, Ash → Ivory on hover

---

## 📱 Responsive Breakpoints

| Breakpoint | Width       | Changes                                              |
|------------|-------------|------------------------------------------------------|
| Desktop    | `> 1280px`  | Full layout as described above                       |
| Laptop     | `1024–1280px` | Slightly reduced font sizes, tighter margins       |
| Tablet     | `768–1024px`  | Single column hero, stacked about section          |
| Mobile     | `< 768px`     | Full single column, hamburger nav, 24px margins    |

---

## ✨ Animation & Interaction Guidelines

| Element            | Animation                                              |
|--------------------|--------------------------------------------------------|
| Page load          | Fade up + slight Y translate (60px → 0), staggered 80ms delay per element |
| Nav CTA hover      | Background fill left-to-right, 250ms ease             |
| Portfolio card     | Overlay fade-in, border slide-in, 300ms ease          |
| Scroll reveal      | Intersection Observer → `opacity 0→1` + `translateY 40px→0`, 600ms |
| Gold underlines    | `scaleX(0→1)` from left, 240ms ease-out               |
| Form inputs        | Border color transition, 200ms ease                   |
| Arrow links (→)    | `translateX(0→6px)`, 200ms ease                       |

---

## 🧩 Component Tokens Summary

```css
/* Spacing scale */
--space-xs:   8px;
--space-sm:   16px;
--space-md:   32px;
--space-lg:   64px;
--space-xl:   120px;

/* Border radius */
--radius-sm:  2px;   /* buttons, inputs */
--radius-md:  4px;   /* cards */
--radius-none: 0px;  /* images (keeps editorial feel) */

/* Shadows */
--shadow-card: 4px 8px 32px rgba(43, 43, 43, 0.08);
--shadow-hover: 8px 16px 48px rgba(43, 43, 43, 0.14);

/* Transitions */
--ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);
--ease-out:     cubic-bezier(0, 0, 0.2, 1);
--duration-fast: 200ms;
--duration-base: 300ms;
--duration-slow: 600ms;
```

---

## 📁 Suggested File Structure

```
/
├── index.html
├── styles/
│   ├── tokens.css         ← CSS variables (colors, type, spacing)
│   ├── base.css           ← Reset, body, typography defaults
│   ├── layout.css         ← Grid, containers, sections
│   ├── components.css     ← Nav, cards, buttons, forms
│   └── animations.css     ← Keyframes, transitions, reveals
├── scripts/
│   ├── scroll-reveal.js   ← Intersection Observer logic
│   └── nav.js             ← Mobile menu toggle
└── assets/
    ├── fonts/
    └── images/
```

---

*Design document authored for Ivory + Charcoal themed website — Studio Edition.*
